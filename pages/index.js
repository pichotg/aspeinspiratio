import { photos } from "../photos";
import PhotoGalery from "../components/PhotoGalery";

const Home = () => (
  <div className="container">
    <main>
      <h1>Aspe inspiration</h1>

      <PhotoGalery photos={photos} />
    </main>

    <footer></footer>
  </div>
);

export default Home;
