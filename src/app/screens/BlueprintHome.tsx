import React, { useState, useRef, useEffect } from "react";
import { ipcRenderer } from "electron";
import { CSSTransition } from "react-transition-group";
import download from "../../assets/svg/download.svg";
import milanote from "../../assets/media/icons/Milanote.png";
import Blockbench from "../../assets/media/icons/BlockBench.png";
import JukeBox from "../../assets/media/icons/Jukebox_JE2_BE2.webp";
import Libs from "../../assets/media/icons/libs.png";
import Learn from "../../assets/media/icons/Learn.png";
import aseprite from "../../assets/media/icons/aseprite.ico";
import ProgrammingIcon from "../../assets/media/icons/programming.png";
import brick from "../../assets/media/icons/brick.webp";
import manager from "../../assets/media/icons/manager.png";
import paint from "../../assets/media/icons/paint.png";
import vscode from "../../assets/media/vscode.png";
import jupiterlabs from "../../assets/media/1200px-Jupyter_logo.svg.webp";
import openblockstudio from "../../assets/media/opennoteblockstudio.png";
import vasfxa from "../../assets/media/icons/VideoAudioSFXAnimations.png";
import pentesting from "../../assets/media/icons/pentesting.png";
import ai from "../../assets/media/icons/AI.png";
import blender from "../../assets/media/blender.png";
import minemator from "../../assets/media/minemator.png";
import capcut from "../../assets/media/capcut.png";
import InConstruccion from "@/components/Home/InConstruccion";
import customnpcslogo from "../../assets/media/misc/customnpcs.png";

const DownloadButton = ({ url, label }) => {
  const extractFilenameFromUrl = (url) => {
    // Extraer el nombre del archivo de la URL
    const parts = url.split("/");
    return parts[parts.length - 1];
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = url;
    a.download = extractFilenameFromUrl(url);
    a.click();
  };

  return <button onClick={handleDownload}>{label}</button>;
};
function BlueprintHome() {
  const [isHomeVisible, setIsHomeVisible] = useState(true);
  const [IsDownloadVisible, setIsDownloadVisible] = useState(false);
  const [isBLearnVisible, setIsBLearnVisible] = useState(false);
  const [isBManageVisible, setIsBManageVisible] = useState(false);
  const [isBBlockBenchVisible, setIsBBlockBenchVisible] = useState(false);
  const [isBPentestVisible, setIsBPentestVisible] = useState(false);
  const [isBAiVisible, setIsBAiVisible] = useState(false);
  const [isBCodeVisible, setIsBCodeVisible] = useState(false);
  const [isBLibVisible, setIsBLibVisible] = useState(false);
  const [isBMusicVisible, setIsBMusicVisible] = useState(false);
  const [isBBuildVisible, setIsBBuildVisible] = useState(false);
  const [isBVASFXAVisible, setIsBVASFXAVisible] = useState(false);
  const [isBPaintVisible, setIsBPaintVisible] = useState(false);

  const onBCHome = () => {
    setIsDownloadVisible(false);
    setIsBLearnVisible(false);
    setIsBManageVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBPentestVisible(false);
    setIsBAiVisible(false);
    setIsBCodeVisible(false);
    setIsBLibVisible(false);
    setIsBMusicVisible(false);
    setIsBBuildVisible(false);
    setIsBVASFXAVisible(false);
    setIsBPaintVisible(false);
    setTimeout(() => {
      setIsHomeVisible(true);
    }, 300);
  };
  const onBLearn = () => {
    setIsDownloadVisible(false);
    setIsBManageVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBPentestVisible(false);
    setIsBAiVisible(false);
    setIsBCodeVisible(false);
    setIsBLibVisible(false);
    setIsBMusicVisible(false);
    setIsBBuildVisible(false);
    setIsBVASFXAVisible(false);
    setIsBPaintVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsBLearnVisible(true);
    }, 300);
  };
  const onBManage = () => {
    setIsDownloadVisible(false);
    setIsBLearnVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBPentestVisible(false);
    setIsBAiVisible(false);
    setIsBCodeVisible(false);
    setIsBLibVisible(false);
    setIsBMusicVisible(false);
    setIsBBuildVisible(false);
    setIsBVASFXAVisible(false);
    setIsBPaintVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsBManageVisible(true);
    }, 300);
  };
  const onBBlockBench = () => {
    setIsDownloadVisible(false);
    setIsBLearnVisible(false);
    setIsBManageVisible(false);
    setIsBPentestVisible(false);
    setIsBAiVisible(false);
    setIsBCodeVisible(false);
    setIsBLibVisible(false);
    setIsBMusicVisible(false);
    setIsBBuildVisible(false);
    setIsBVASFXAVisible(false);
    setIsBPaintVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsBBlockBenchVisible(true);
    }, 300);
  };
  const onBPentest = () => {
    setIsDownloadVisible(false);
    setIsBLearnVisible(false);
    setIsBManageVisible(false);
    setIsBAiVisible(false);
    setIsBCodeVisible(false);
    setIsBLibVisible(false);
    setIsBMusicVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBBuildVisible(false);
    setIsBVASFXAVisible(false);
    setIsBPaintVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsBPentestVisible(true);
    }, 300);
  };
  const onBAi = () => {
    setIsDownloadVisible(false);
    setIsBLearnVisible(false);
    setIsBManageVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBPentestVisible(false);
    setIsBCodeVisible(false);
    setIsBLibVisible(false);
    setIsBMusicVisible(false);
    setIsBBuildVisible(false);
    setIsBVASFXAVisible(false);
    setIsBPaintVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsBAiVisible(true);
    }, 300);
  };
  const onBCode = () => {
    setIsDownloadVisible(false);
    setIsBLearnVisible(false);
    setIsBManageVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBPentestVisible(false);
    setIsBAiVisible(false);
    setIsBLibVisible(false);
    setIsBMusicVisible(false);
    setIsBBuildVisible(false);
    setIsBVASFXAVisible(false);
    setIsBPaintVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsBCodeVisible(true);
    }, 300);
  };
  const onBLib = () => {
    setIsDownloadVisible(false);
    setIsBLearnVisible(false);
    setIsBManageVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBPentestVisible(false);
    setIsBAiVisible(false);
    setIsBCodeVisible(false);
    setIsBMusicVisible(false);
    setIsBBuildVisible(false);
    setIsBVASFXAVisible(false);
    setIsBPaintVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsBLibVisible(true);
    }, 300);
  };
  const onBMusic = () => {
    setIsDownloadVisible(false);
    setIsBLearnVisible(false);
    setIsBManageVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBPentestVisible(false);
    setIsBAiVisible(false);
    setIsBCodeVisible(false);
    setIsBLibVisible(false);
    setIsBBuildVisible(false);
    setIsBVASFXAVisible(false);
    setIsBPaintVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsBMusicVisible(true);
    }, 300);
  };
  const onBBuild = () => {
    setIsDownloadVisible(false);
    setIsBLearnVisible(false);
    setIsBManageVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBPentestVisible(false);
    setIsBAiVisible(false);
    setIsBCodeVisible(false);
    setIsBLibVisible(false);
    setIsBMusicVisible(false);
    setIsBVASFXAVisible(false);
    setIsBPaintVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsBBuildVisible(true);
    }, 300);
  };
  const onBVASFXA = () => {
    setIsDownloadVisible(false);
    setIsBLearnVisible(false);
    setIsBManageVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBPentestVisible(false);
    setIsBAiVisible(false);
    setIsBCodeVisible(false);
    setIsBLibVisible(false);
    setIsBMusicVisible(false);
    setIsBBuildVisible(false);
    setIsBPaintVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsBVASFXAVisible(true);
    }, 300);
  };
  const onBPaint = () => {
    setIsDownloadVisible(false);
    setIsBLearnVisible(false);
    setIsBManageVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBPentestVisible(false);
    setIsBAiVisible(false);
    setIsBCodeVisible(false);
    setIsBLibVisible(false);
    setIsBMusicVisible(false);
    setIsBBuildVisible(false);
    setIsBVASFXAVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsBPaintVisible(true);
    }, 300);
  };
  const onBCDownoad = () => {
    setIsBLearnVisible(false);
    setIsBManageVisible(false);
    setIsBBlockBenchVisible(false);
    setIsBPentestVisible(false);
    setIsBAiVisible(false);
    setIsBCodeVisible(false);
    setIsBLibVisible(false);
    setIsBMusicVisible(false);
    setIsBBuildVisible(false);
    setIsBVASFXAVisible(false);
    setIsBPaintVisible(false);
    setIsHomeVisible(false);
    setTimeout(() => {
      setIsDownloadVisible(true);
    }, 300);
  };
  function AppOpen(arg, title) {
    ipcRenderer.invoke("open-alt2-win", arg, title);
  }
  return (
    <div className="home-main">
      <div
        className="sidebar"
        style={{ overflowY: "scroll", overflowX: "hidden" }}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="800"
            height="800"
            viewBox="0 0 495.398 495.398"
            className="sidebarIcon"
            onClick={onBCHome}
          >
            <path d="m487.083 225.514-75.08-75.08v-86.73c0-15.682-12.708-28.391-28.413-28.391-15.669 0-28.377 12.709-28.377 28.391v29.941L299.31 37.74c-27.639-27.624-75.694-27.575-103.27.05L8.312 225.514c-11.082 11.104-11.082 29.071 0 40.158 11.087 11.101 29.089 11.101 40.172 0l187.71-187.729c6.115-6.083 16.893-6.083 22.976-.018l187.742 187.747a28.337 28.337 0 0 0 20.081 8.312c7.271 0 14.541-2.764 20.091-8.312 11.086-11.086 11.086-29.053-.001-40.158z" />
            <path d="M257.561 131.836c-5.454-5.451-14.285-5.451-19.723 0L72.712 296.913a13.977 13.977 0 0 0-4.085 9.877v120.401c0 28.253 22.908 51.16 51.16 51.16h81.754v-126.61h92.299v126.61h81.755c28.251 0 51.159-22.907 51.159-51.159V306.79c0-3.713-1.465-7.271-4.085-9.877L257.561 131.836z" />
          </svg>
        </div>
        <div className="grid">
          <img src={Learn} className="sidebarIcon" onClick={onBLearn} />
          <img src={manager} className="sidebarIcon" onClick={onBManage} />
          <img
            src={milanote}
            className="sidebarIcon"
            onClick={() =>
              AppOpen(
                "https://app.milanote.com/1QCc5O1EYxo3au?p=nBZKJedNE1x",
                "Workspace"
              )
            }
          />
          <img
            src={Blockbench}
            className="sidebarIcon"
            onClick={onBBlockBench}
          />
          <img src={pentesting} className="sidebarIcon" onClick={onBPentest} />
          <img
            src={ai}
            className="sidebarIcon"
            onClick={onBAi}
            style={{ imageRendering: "pixelated" }}
          />
          <img
            src={ProgrammingIcon}
            className="sidebarIcon"
            onClick={onBCode}
          />
          <img src={Libs} className="sidebarIcon" onClick={onBLib} />
          <img src={JukeBox} className="sidebarIcon" onClick={onBMusic} />
          <img src={brick} className="sidebarIcon" onClick={onBBuild} />
          <img src={vasfxa} className="sidebarIcon" onClick={onBVASFXA} />
          <img src={paint} className="sidebarIcon" onClick={onBPaint} />
        </div>
        <div>
          <img src={download} className="sidebarIcon" onClick={onBCDownoad} />
        </div>
      </div>
      <CSSTransition
        in={isHomeVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <h1 className="text-lg">Welcome to Blueprint</h1>
          <p className="mt-6 text-sm">
            The best tool for creating and editing product development for
            Minecraft, exclusively at AdeptusTeam!
            <br />
            <br />
            <span className="text-lg">Info</span>
          </p>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBLearnVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <h1>Welcome to Learn Site ! :D</h1>
          <p>
            What do you need to learn today ?
            <br />
            Haves a Tips and Tutorials to make Models and Textures, Fonts, Mods,
            Plugins, DiscordBots, Nodejs, CustomNpcs Scripting, Music, Ai,
            Build, Ilustrate, SFX, Animate, VideoEditing, and other things.
            <br />
            <br />
            Start to Learn !
            <br />
          </p>
          <div className="instance-container-main">
            <div className="instance-box-header">Modeling and Texturing</div>
            <div className="instance-container">
              <div className="instance-list">
                <div className="instance-box-add"></div>
              </div>
            </div>
          </div>
          <br />
          <div className="instance-container-main">
            <div className="instance-box-header">Programming</div>
            <div className="instance-container">
              <div className="instance-list">
                <div className="instance-box-add">
                  <img src={customnpcslogo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBManageVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <InConstruccion />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBBlockBenchVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <InConstruccion />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBPentestVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <InConstruccion />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBAiVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <InConstruccion />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBCodeVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <InConstruccion />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBLibVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <InConstruccion />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBMusicVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <InConstruccion />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBBuildVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <InConstruccion />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBVASFXAVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <InConstruccion />
        </div>
      </CSSTransition>
      <CSSTransition
        in={isBPaintVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <InConstruccion />
        </div>
      </CSSTransition>
      <CSSTransition
        in={IsDownloadVisible}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="home-work-container">
          <h1
            style={{
              fontFamily: "Satoshi-Light",
              textAlign: "center",
              fontSize: "medium",
            }}
          >
            Download
          </h1>
          <div>
            <p>Pixelart - Modeling</p>
            <div className="SlideBarApps">
              <div className="ApptoSlideBar">
                <img src={aseprite} />
                <DownloadButton
                  url="https://libresprite.github.io/#!/downloads"
                  label="Download"
                />
              </div>
            </div>
            <hr />
            <p>Programmming - Configurators</p>
            <div className="SlideBarApps">
              <div className="ApptoSlideBar">
                <img src={vscode} />
                <DownloadButton
                  url="https://code.visualstudio.com/Download"
                  label="Download"
                />
              </div>
              <div className="ApptoSlideBar">
                <img src={jupiterlabs} />
                <DownloadButton
                  url="https://jupyter.org/install"
                  label="Download"
                />
              </div>
            </div>
            <hr />
            {/* <p>Illustrator - Graphic Designer</p>
            <div className="SlideBarApps">
              <div className="ApptoSlideBar">
                <img src="" />
                <DownloadButton url="" label="Download" />
              </div>
            </div>
            <hr /> */}
            <p>Music Composition - Voice Actor</p>
            <div className="SlideBarApps">
              <div className="ApptoSlideBar">
                <img src={openblockstudio} />
                <DownloadButton
                  url="https://github.com/OpenNBS/OpenNoteBlockStudio/releases/latest/download/Minecraft.Note.Block.Studio.exe"
                  label="Download"
                />
              </div>
            </div>
            <hr />
            <p>3D Modelling - Game Developer</p>
            <div className="SlideBarApps">
              <div className="ApptoSlideBar">
                <img src={blender} />
                <DownloadButton
                  url="https://www.blender.org/download/"
                  label="Download"
                />
              </div>
            </div>
            <hr />
            <p>Video Editing - Animator</p>
            <div className="SlideBarApps">
              <div className="ApptoSlideBar">
                <img src={capcut} />
                <DownloadButton
                  url="https://www.capcut.com/es-es/"
                  label="Download"
                />
              </div>
              <div className="ApptoSlideBar">
                <img src={minemator} />
                <DownloadButton
                  url="https://www.mineimator.com/download"
                  label="Download"
                />
              </div>
            </div>
            {/* <hr />
            <p>Scriptwrite - Screenwrite</p>
            <div className="SlideBarApps">
              <div className="ApptoSlideBar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png" />
                <DownloadButton url="" label="Download" />
              </div>
            </div> */}
          </div>
        </div>
      </CSSTransition>
      <div className="sidebar-workspace">
        <div>
          <p>Explorer</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
export default BlueprintHome;
