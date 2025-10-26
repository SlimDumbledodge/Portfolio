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
              Fullstack Engineer
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
              Hello! My name is Amaël Rosales, a passionate fullstack engineer
              specialized in ReactJS, TypeScript, and NestJS. I'm based in
              Montpellier and currently looking for new opportunities as a{' '}
              cross-border (frontalier) engineer in Switzerland , especially
              around Geneva, Lausanne, or Neuchâtel
              <span className="flag-emoji">🇨🇭</span>
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
                href="https://github.com/slimdumbledodge"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa-brands fa-github" />
              </a>
            </span>
          </div>
          <img
            src="https://i.ibb.co/SP3sQsK/hero.jpg"
            className="hero-img"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
