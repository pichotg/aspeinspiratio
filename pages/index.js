import Head from "next/head";
import { photos } from "../photos";

var sectionStyle = (url) => {
  return { backgroundImage: `url('${url}')` };
};

var photoGalery = photos.map((photo) => (
  <div className="card" style={sectionStyle(photo.src)}>
    <div className="description">{photo.author}</div>
  </div>
));

const Home = () => (
  <div className="container">
    <main>
      <div className="photo-grid">{photoGalery}</div>
    </main>

    <footer></footer>
  </div>
);

export default Home;
