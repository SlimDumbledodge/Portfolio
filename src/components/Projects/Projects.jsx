/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-content">
          <h3>Projets</h3>
          <p id="hook-sentence">
            Chaque projet est unique !
            <i className="fa-solid fa-puzzle-piece puzzle-icon" />
          </p>
          <div className="project-wrapper">
            <div className="project-card first-project">
              <div>
                <img
                  src="https://i.ibb.co/zJxK4H9/Capture-d-cran-2024-01-09-204540.png"
                  className="project-img"
                  alt="pokédex"
                />
              </div>
              <div className="project-text">
                <h2>
                  pokédex <span>(décembre 2023)</span>
                </h2>
                <p id="project-description">
                  Un projet sur l'univers des Pokémons, il permet de consulter
                  un grand éventail d'informations sur chacun d'entre eux. Cette
                  application permet entre autres de rechercher un Pokémon,
                  consulter ses informations, consulter son évolution, etc... Je
                  vous invite à le visiter si vous voulez en savoir plus ! :)
                </p>
                <div className="stacks">
                  <p>react</p>
                  <p>redux</p>
                  <p>scss</p>
                </div>
                <div className="links">
                  <a
                    href="https://github.com/Rosales-Amael/Pokedex"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Code <i className="fa-brands fa-github" />
                  </a>
                  <a
                    href="https://amael-pokedex.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Site{' '}
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
