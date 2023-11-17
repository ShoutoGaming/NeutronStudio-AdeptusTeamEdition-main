import danger from "../../assets/media/mini/Peligro.png";
import idea from "../../assets/media/mini/Foco.png";
import paper from "../../assets/media/mini/Escritura.png";

function InConstruccion() {
    return (
        <div
            style={{ margin: "0 auto", textAlign: "center", marginTop: "25%" }}
          >
            <h1>In Construccion</h1>
            <img
              src={danger}
              style={{
                width: "100px",
                height: "100px",
                imageRendering: "pixelated",
              }}
              alt="Danger"
            />
            <p>This Part is In BUILDING, Back Later!</p>
            <p>
              If you want to contribute, you can do it in the discord, asking
              for access to the repository and giving your ideas and
              modifications. <img src={idea} alt="Idea" />
              <img src={paper} alt="Paper" />
            </p>
          </div>
    )
}

export default InConstruccion;