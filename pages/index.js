import { photos } from "../photos";
import { useState } from "react";
import Head from "next/head";

const Home = () => {
  const shuffle = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };
  const [photosList, setPhotos] = useState(shuffle(photos));
  return (
    <div className="container">
      <Head>
        <title>Aspe inspiration</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="navbar">
        <div className="navbar__title navbar__item">Aspe inspiration</div>
        <div
          onClick={() => {
            setPhotos(shuffle(photosList));
          }}
          className="navbar__item"
        >
          Shuffle Gallery
        </div>
        <div className="navbar__item">
          <a href="https://www.instagram.com/todaspe/">Instagram</a>
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
