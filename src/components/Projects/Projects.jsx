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
                <img src="pokedex.png" className="project-img" alt="pokédex" />
              </div>
              <div className="project-text">
                <h2>
                  pokédex <span>(décembre 2023)</span>
                </h2>
                <p id="project-description">
                  Ce pokédex a été réalisé en parallèle de mes études.
                  L'utilisateur à la possibilité de rechercher un pokémon et
                  afficher les détails de celui-ci, consulter son évolution
                  direct etc... Si vous voulez le voir en détail je vous laisse
                  cliquer juste en dessous :)
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
                    href="https://amaelpokedex.netlify.app/"
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
