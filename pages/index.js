import Head from "next/head";

var sectionStyle = () => {
  return { backgroundImage: "url('/images/tumbler01.jpg')" };
};
const Home = () => (
  <div className="container">
    <main>
      <div className="photo-grid">
        <div className="card" style={sectionStyle()}>gtèigyt</div>
        <div className="card" style={sectionStyle()}></div>
        <div className="card" style={sectionStyle()}></div>
        <div className="card" style={sectionStyle()}></div>
      </div>
    </main>

    <footer>
      <a
        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by <img src="/zeit.svg" alt="ZEIT Logo" />
      </a>
    </footer>

    <style jsx>{`
      @import url("https://fonts.googleapis.com/css?family=Noto+Sans&display=swap");

      body {
        background: rgb(19, 19, 19);
        color: #fff;
        font-family: "Noto Sans", sans-serif;
      }

      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #353535;
        font-size: 3rem;
        color: #fff;
        box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
          rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        transition: all 500ms;
        overflow: hidden;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .card:hover {
        box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
          rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
        transform: translateY(-3px) scale(1.1);
      }

      .photo-grid {
        display: grid;
        gap: 1rem;

        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-auto-rows: 240px;

        margin-right: 5rem;
        margin-left: 5rem;
      }

      /* Medium screens */
      @media screen and (min-width: 600px) {
        .card-tall {
          grid-row: span 2 / auto;
        }

        .card-wide {
          grid-column: span 2 / auto;
        }
      }
    `}</style>
  </div>
);

export default Home;
