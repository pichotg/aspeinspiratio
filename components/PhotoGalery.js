import React, { Component } from "react";

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
      <div className="photo-grid">
        <button onClick={this.shufflePhoto}></button>
        {this.state.photos.map((photo, idx) => (
          <Photo photo={photo} />
        ))}
      </div>
    );
  }
}

const Photo = (props) => {
  return (
    <div>
      <div
        className={"card " + props.photo.shape}
        style={{ backgroundImage: `url('${props.photo.src}')` }}
      >
        <div className="description">{props.photo.author}</div>
      </div>
    </div>
  );
};

export default PhotoGalery;
