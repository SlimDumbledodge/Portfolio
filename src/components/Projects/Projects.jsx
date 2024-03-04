/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
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
          <h3 className="project_section_title">Projets</h3>
          <p id="hook-sentence">
            Chaque projet est unique !
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
                  <span className="project_date">(décembre 2023)</span>
                </h2>

                <Text className="project_description">
                  LeBonGeek est mon projet de fin d'études. Il a été réalisé en
                  3 semaines de développement. Le but de cette application est
                  la vente de petites annonces entre particuliers dans l'univers
                  geek (comics, figurines, etc...) Le plus gros du travail à été
                  fait, mais il reste quelques détails à régler. Le back a été
                  codé en Symfony par 2 développeurs, quant au front nous,
                  étions 3 dessus ! :)
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
                  pokédex <span className="project_date">(décembre 2023)</span>
                </h2>

                <Text className="project_description">
                  Un projet sur l'univers des Pokémons, il permet de consulter
                  un grand éventail d'informations sur chacun d'entre eux. Cette
                  application permet entre autres de rechercher un Pokémon,
                  consulter ses informations, consulter son évolution, etc... Je
                  vous invite à le visiter si vous voulez en savoir plus ! :)
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
                    <p>Sémantic UI</p>
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

          <Card
            id="project_card"
            direction={{ base: 'column', xl: 'row' }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: '100%', xl: '400px' }}
              src="https://www.allrecipes.com/thmb/WqWggh6NwG-r8PoeA3OfW908FUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody ml={4}>
                <h2 className="project_title">
                  cooking recipes{' '}
                  <span className="project_date">(février 2023)</span>
                </h2>

                <Text className="project_description">
                  Ce site de recettes culinaires facilite la création,
                  l'enregistrement et la consultation d'une variété de recettes
                  de cuisine, etc. L'application propose également une gestion
                  complète des utilisateurs, incluant la vérification des
                  adresses e-mail, la réinitialisation des mots de passe, etc.
                  Ce projet a considérablement renforcé mes compétences en React
                  et Laravel.
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
                    <p>Laravel</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>MySql</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                </div>
              </CardBody>

              <CardFooter>
                <div className="links">
                  <Badge borderRadius="full" p={4} colorScheme="telegram">
                    En cours de développement...
                  </Badge>
                </div>
              </CardFooter>
            </Stack>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
