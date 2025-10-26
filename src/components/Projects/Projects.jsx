/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import './Projects.scss';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-content">
          <h3 className="project_section_title">Projects</h3>
          <p id="hook-sentence">
            Each project is unique!
            <i className="fa-solid fa-puzzle-piece puzzle-icon" />
          </p>

          <Card
            id="project_card"
            direction={{ base: 'column', xl: 'row' }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', xl: '400px' }}
              src="https://i.ibb.co/w4h3nfR/LBGEEK-min.png"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody ml={4}>
                <h2 className="project_title">
                  lebongeek{' '}
                  <span className="project_date">(December 2023)</span>
                </h2>

                <Text className="project_description">
                  LeBonGeek is my end-of-study project. It was developed in 3
                  weeks. The purpose of this application is the sale of
                  classifieds between individuals in the geek universe (comics,
                  figurines, etc...). Most of the work has been done, but there
                  are still some details to fix. The backend was coded in
                  Symfony by 2 developers, and the frontend was made by 3 of us
                  ! :)
                </Text>

                <div className="stacks">
                  <div className="skill-box">
                    <p>React</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>Redux</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>SCSS</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>Material UI</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                </div>
              </CardBody>

              <CardFooter>
                <div className="links">
                  <a
                    href="https://github.com/O-clock-Bao/projet-08-le-bon-geek-front"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Code <i className="fa-brands fa-github" />
                  </a>
                  <a
                    href="http://lebongeek.surge.sh/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Site{' '}
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
              </CardFooter>
            </Stack>
          </Card>
          <Card
            id="project_card"
            direction={{ base: 'column', xl: 'row' }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', xl: '400px' }}
              src="https://i.ibb.co/crtqQT5/Capture-d-cran-2024-03-04-203517.png"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody ml={4}>
                <h2 className="project_title">
                  pokédex <span className="project_date">(December 2023)</span>
                </h2>

                <Text className="project_description">
                  A project about the world of Pokémon. It allows you to consult
                  a wide range of information about each one of them. This
                  application allows, among other things, to search for a
                  Pokémon, view its information, check its evolution, etc... I
                  invite you to visit it if you want to know more! :)
                </Text>

                <div className="stacks">
                  <div className="skill-box">
                    <p>React</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>Redux</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>SCSS</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>Semantic UI</p>
                    <img
                      src="https://react.semantic-ui.com/logo.png"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                </div>
              </CardBody>

              <CardFooter>
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
              </CardFooter>
            </Stack>
          </Card>

          {/* Badge réutilisable pour futurs projets */}
          <div className="project-badge-container">
            <Badge borderRadius="full" p={4} colorScheme="telegram">
              In development...
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
