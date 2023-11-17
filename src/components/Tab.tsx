import UpdateElectron from "@/components/update";
import { ipcRenderer } from "electron";
import logo from "../../build/icon.png"

import "../assets/styles/App.css";
import "../assets/styles/satoshi.css"
function Tab() {
  function closeButton() {
    window.close();
  }
  function minimizeButton() {
    ipcRenderer.send("minimize-window");
  }
  function maximizeButton() {
    ipcRenderer.send("maximize-window");
  }
  return (
    <div className="bar">
      <div style={{ marginLeft: "10px", display: "flex", gap: "5px" }}>
        <img src={logo} />
        <span className="centered-text-main">Neutron Studio</span>
      </div>
      <div className="button-container">
        <UpdateElectron />
        <button className="minimize" onClick={minimizeButton}>
          &#xE921;
        </button>
        <button className="minimize" onClick={maximizeButton}>
          
        </button>
        <button className="close" id="close" onClick={closeButton}>
          &#xE8BB;
        </button>
      </div>
    </div>
  );
}

export default Tab;