// import { photos } from "../photos";
import { useState, useEffect } from "react";
import Head from "next/head";
import getPhotos from "../utils/api";

const Home = () => {
  const shuffle = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5);
  };
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getPhotos().then((data) => {
      setPhotos(shuffle(data));
    });
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Aspeinspiratio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="navbar">
        <div className="navbar__title navbar__item">Aspeinspiratio</div>
        <div
          onClick={() => {
            setPhotos(shuffle(photos));
          }}
          className="navbar__item"
        >
          Random
        </div>
        <div className="navbar__item">
          <a href="https://www.instagram.com/todaspe/">Instagram</a>
        </div>
      </header>
      <div>
        <div className="photo-grid">
          {photos.map((photo, idx) => (
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
        <div id="caption">{props.photo.author}</div>
      </div>
    </>
  );
};

export default Home;
