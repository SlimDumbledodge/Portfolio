/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import './Home.scss';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="content">
          <div className="hero-text">
            <h1>
              Développeur Fullstack React/Laravel
              <span>
                <img
                  src="https://i.ibb.co/DKVdrf2/hello-img.png"
                  className="hello-img"
                  alt="hello-img"
                  border="0"
                />
              </span>
            </h1>
            <p>
              Salut ! Je m'appelle Amaël Rosales et je suis un développeur
              fullstack passioné depuis l'adolescence basé à Montpellier.{' '}
              <i className="fa-solid fa-map-pin location-icon" />
            </p>
            <span>
              <a
                href="http://linkedin.com/in/amael-rosales"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                href="https://github.com/Rosales-Amael"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-github" />
              </a>
            </span>
          </div>
          {/* <img
            src="https://i.ibb.co/SP3sQsK/hero.jpg"
            className="hero-img"
            alt="hero"
          /> */}
          <img src="src/assets/hero.jpg" className="hero-img" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Home;
