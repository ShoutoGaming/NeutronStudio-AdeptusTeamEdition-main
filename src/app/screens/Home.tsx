import React, { useState, useRef, useEffect } from "react";
import { IpcRenderer, ipcRenderer } from "electron";
import { Outlet, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Sidebar from "../../components/Home/Sidebar";
import "../../assets/styles/Home.css";
import "../../assets/styles/Launcher.css";
import minecraftlogo from "../../assets/media/minecraft.webp";
import workspacelogo from "../../assets/media/workspace.png";
import pentestinglogo from "../../assets/media/pentesting.png";
import BlueprintLogo from "../../assets/media/blueprint.png";

import mcStatusServer, {
  checkServerStatus,
} from "../libs/minecraftserver-status";
import BlueprintHome from "./BlueprintHome";

function Home() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [isMcLauncherVisible, setIsMcLauncherVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [isUserVisible, setIsUserVisible] = useState(false);

  const onBCHome = () => {
    setIsMcLauncherVisible(false);
    setIsSettingsVisible(false);
    setIsUserVisible(false);
    setTimeout(() => {
      setIsHomeVisible(true);
    }, 300);
  };
  const toggleMcLauncher = () => {
    setIsHomeVisible(false);
    setIsSettingsVisible(false);
    setIsUserVisible(false);
    setTimeout(() => {
      setIsMcLauncherVisible(true);
    }, 300);
  };
  const onBCSettings = () => {
    setIsHomeVisible(false);
    setIsMcLauncherVisible(false);
    setIsUserVisible(false);
    setTimeout(() => {
      setIsSettingsVisible(true);
    }, 300);
  };
  const onBCUser = () => {
    setIsHomeVisible(false);
    setIsMcLauncherVisible(false);
    setIsSettingsVisible(false);
    setTimeout(() => {
      setIsUserVisible(true);
    }, 300);
  };
  function OpenCustomWindow(arg) {
    ipcRenderer.invoke("open-win", arg);
  }

  return (
    <div className="home-main">
      <Sidebar
        onBCHome_={onBCHome}
        onBCSettings_={onBCSettings}
        onBCUser_={onBCUser}
      />
      <CSSTransition
        in={isHomeVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-container">
          <div className="modules-list">
            <div className="module-container">
              <h1>Modalities</h1>
              <div className="module-option-list">
                <div className="module-option" onClick={() => OpenCustomWindow("blueprint")}>
                  <div className="module-text">
                    <img src={BlueprintLogo} />
                    <p style={{ textAlign: "center", margin: "0" }}>
                      Blueprint
                    </p>
                  </div>
                  <hr />
                  <div className="module-text">
                    <span>
                      Procesora de BlueprintStudio, esta contiene una suit de usos para todo tipo de trabajo,
                      tambien un facil acceso a moderacion y demas.
                    </span>
                  </div>
                </div>
                <div className="module-option" onClick={toggleMcLauncher}>
                  <div className="module-text">
                    <img src={minecraftlogo} />
                    <p style={{ textAlign: "center", margin: "0" }}>
                      MC Launcher
                    </p>
                  </div>
                  <hr />
                  <div className="module-text">
                    <span>
                      Este es el launcher integrado de Neutron, capas de iniciar
                      minecraft, y demas cosas
                    </span>
                  </div>
                </div>
                <div className="module-option" onClick={() => OpenCustomWindow("workspace")}>
                  <div className="module-text">
                    <img src={workspacelogo} />
                    <p style={{ textAlign: "center", margin: "0" }}>
                      Workspace
                    </p>
                  </div>
                  <hr />
                  <div className="module-text">
                    <span>
                      Este es el modo de Workspace el cual tiene todas las
                      herramientas de el staff
                    </span>
                  </div>
                </div>
                <div className="module-option" onClick={() => OpenCustomWindow("pentesting")}>
                  <div className="module-text">
                    <img src={pentestinglogo} />
                    <p style={{ textAlign: "center", margin: "0" }}>
                      Pentesting
                    </p>
                  </div>
                  <hr />
                  <div className="module-text">
                    <span>
                      Este es un modo de poder comprobar la seguridad de ciertas
                      cosas, al programar y demas
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="module-container">
              <h1>Data</h1>
            </div>
          </div>
          <div className="news-container">
            <h1>News and Announcements</h1>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isMcLauncherVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="launcher-container">
          <div className="launcher-header">
            <div>
              <h1>Minecraft - AdeptusTeam</h1>
            </div>
            <div>
              <p className='text-sm'>
                Modo de Lanzamiento, en este modo cuentas con varias ventajas a
                comparacion de demas launcher, acuerdate este esta enfocado a su
                uso de manera professional, si quieres algo mas para un usuario
                normal, es recomendable usar un launcher ya testeado, como{" "}
                <span className="span1">MagnumLauncher</span>
                <br />
                <br />
                Esto porque <span className="span1">Neutron Launcher</span>{" "}
                contiene Opciones{" "}
                <span className="span2">experimentales, o para developers</span>
                , no contiene opciones para la experiencia de usuario normal, y
                esta enfocado al 100% en el desarrollo.
                <br />
                <br />
                El launcher cuenta con Sistema AntiVirus, un Sistema de
                Pentesting, y Exploits Avanzados Actualizados, con posibilidad
                de Crear exploits para el launcher. Por esto mismo y por su
                contenido en hacks como cheater, es recomendable usar nuestro
                Launcher llamado <span className="span1">MagnumLauncher</span>,
                el cual no contiene funciones de Pentesting, y contiene una
                mejor Experiencia, claramente si tiene las demas funciones que
                tiene este.
              </p>
            </div>
          </div>
          <div className="launcher-footer">
            <div className="instance-container-main">
              <div className="instance-box-header"></div>
              <div className="instance-container">
                <div className="instance-list">
                  <div className="instance-box-add">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                    >
                      <circle cx="50" cy="50" r="45" fill="rgb(170, 69, 206)" />
                      <path
                        stroke="#fff"
                        strokeWidth="8"
                        d="M20 50h60M50 20v60"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="instance-container-main">
              <div className="instance-box-header"></div>
              <div className="instance-container">
                <div className="instance-list">
                  <div className="instance-box"></div>
                </div>
              </div>
            </div>
            <div className="instance-container-main">
              <div className="instance-box-header"></div>
              <div className="instance-container">
                <div className="instance-list">
                  <div className="instance-box"></div>
                </div>
              </div>
            </div>
            <div className="instance-container-main">
              <div className="instance-box-header"></div>
              <div className="instance-container">
                <div className="instance-list">
                  <div className="instance-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSettingsVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="settings-container">
          <h1 className="h1-1">Ajustes Generales</h1>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isUserVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-container">
          <h1 className="h1-1">Usuario</h1>
        </div>
      </CSSTransition>
    </div>
  );
}
export default Home;
