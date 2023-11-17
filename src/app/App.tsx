import { useState } from "react";
import { ipcRenderer } from "electron";
import Tab from "@/components/Tab";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from "../../build/icon.png"
import "../assets/styles/App.css";
import "../assets/styles/satoshi.css"
import PentestingHome from "./screens/PentestingHome";
import WorkspaceHome from "./screens/WorkspaceHome";
import BlueprintHome from "./screens/BlueprintHome";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/pentesting' Component={PentestingHome}/>
          <Route path='/workspace' Component={WorkspaceHome}/>
          <Route path='/blueprint' Component={BlueprintHome}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
