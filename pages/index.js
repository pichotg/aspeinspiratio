import { photos } from "../photos";

var sectionStyle = (url) => {
  return { backgroundImage: `url('${url}')` };
};

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

var photoGalery = shuffleArray(photos).map((photo) => (
  <div className={"card "+photo.shape} style={sectionStyle(photo.src)}>
    <div className="description">{photo.author}</div>
  </div>
));

const Home = () => (
  <div className="container">
    <main>
      <h1>Aspe inspiration</h1>
      <div className="photo-grid">{photoGalery}</div>
    </main>

    <footer></footer>
  </div>
);

export default Home;
