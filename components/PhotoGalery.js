import React, { Component, useState } from "react";

class PhotoGalery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: this.props.photos,
    };
    this.shufflePhoto = this.handleshuffle.bind(this);
  }

  handleshuffle() {
    this.setState((state) => ({
      photos: this.props.photos.sort(() => Math.random() - 0.5),
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.shufflePhoto}>Shuffle Gallery</button>
        <div className="photo-grid">
          {this.state.photos.map((photo, idx) => (
            <Photo photo={photo} idx={idx} />
          ))}
        </div>
      </div>
    );
  }
}

const Photo = (props) => {
  const [isOpen, setisOpen] = useState("none");
  return (
    <div
      className={"card " + props.photo.shape}
      style={{ backgroundImage: `url('${props.photo.src}')` }}
      onClick={() => setisOpen("block")}
    >
      <div className="description">{props.photo.author}</div>
      <div
        style={{ display: isOpen }}
        className="modal"
        onClick={() => setisOpen("none")}
      >
        <span className="close">&times;</span>
        <img className="modal-content" src={props.photo.src}></img>
      </div>
    </div>
  );
};

export default PhotoGalery;
