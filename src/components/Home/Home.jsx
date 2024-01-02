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
                  src="hello-img.png"
                  className="hello-img"
                  alt="hello emoji"
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
          <div className="hero-img">
            <img src="hero.jpg" className="hero-img" alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
