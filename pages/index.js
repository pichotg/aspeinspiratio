import { photos } from "../photos";
import { useState } from "react";

const Home = () => {
  const [photosList, setPhotos] = useState(photos);
  const shuffle = () =>
    setPhotos([...photosList].sort(() => Math.random() - 0.5));
  return (
    <div className="container">
      <header className="navbar">
        <div className="navbar__title navbar__item">Aspe inspiration</div>
        <div className="navbar__item">instagram</div>
        <div onClick={shuffle} className="navbar__item">
          Shuffle Gallery
        </div>
      </header>
      <div>
        <div className="photo-grid">
          {photosList.map((photo, idx) => (
            <Photo photo={photo} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Photo = (props) => {
  const [isOpen, setisOpen] = useState("none");
  return (
    <>
      <div
        className={"card " + props.photo.shape}
        style={{ backgroundImage: `url('${props.photo.src}')` }}
        onClick={() => setisOpen("block")}
      >
        <div className="description">{props.photo.author}</div>
      </div>
      <div
        style={{ display: isOpen }}
        className="modal"
        onClick={() => setisOpen("none")}
      >
        <span className="close">&times;</span>
        <img className="modal-content" src={props.photo.src}></img>
      </div>
    </>
  );
};

export default Home;
