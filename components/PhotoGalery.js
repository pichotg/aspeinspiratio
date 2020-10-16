import { useState } from "react";

export const PhotoGalery = (props) => {
  const [photos, setPhotos] = useState(props.photos);
  const shuffle = () => setPhotos([...photos].sort(() => Math.random() - 0.5));
  return (
    <div>
      <button onClick={shuffle}>Shuffle Gallery</button>
      <div className="photo-grid">
        {photos.map((photo, idx) => (
          <Photo photo={photo} key={idx} />
        ))}
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
