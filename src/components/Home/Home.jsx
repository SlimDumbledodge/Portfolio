/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import './Home.scss';
import me from '../../assets/me.png'
import { Image } from '@chakra-ui/react';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="content">
          <div className="hero-text">
            <h1>
              Fullstack Engineer here !
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
              Bonjour ! Je suis Amaël Rosales, ingénieur Fullstack passionné,
              spécialisé en ReactJS, TypeScript et NestJS. Basé à Montpellier,
              je suis à la recherche de nouvelles opportunités en tant que
              frontalier en Suisse, particulièrement autour de Genève, Lausanne
              ou Neuchâtel 🇨🇭. Je combine expertise technique, développement
              fullstack et goût pour les solutions performantes et évolutives,
              prêt à contribuer à des projets à fort impact !
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
          <Image
            src={me}
            alt="about"
            objectFit="contain"
            id="hero-img"
            maxW={{ base: '100%', xl: '400px' }}
            rounded="full"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
