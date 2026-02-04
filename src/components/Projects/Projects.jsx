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
import tradelabImg from '../../assets/tradelab.png';
import prismaSvg from '../../assets/light-prisma-svgrepo-com.svg';
import laPinceImg from '../../assets/la-pince.png';
import symfonyIcon from '../../assets/symfony-icon.svg';

const Projects = () => {
  const openBothLinks = () => {
    window.open(
      'https://github.com/O-clock-Naga/projet-la-pince-front',
      '_blank'
    );
    window.open(
      'https://github.com/O-clock-Naga/projet-la-pince-back',
      '_blank'
    );
  };

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
              src={tradelabImg}
              alt="tradelab"
              bg="white"
            />

            <Stack>
              <CardBody ml={4}>
                <h2 className="project_title">
                  tradelab studio{' '}
                  <span className="project_date">(Décembre 2025)</span>
                </h2>

                <Text className="project_description">
                  TradeLab est une application de trading virtuelle conçue pour
                  permettre aux utilisateurs de s’initier au monde de la bourse
                  sans prendre de risques financiers. Elle offre la possibilité
                  d’investir avec de la monnaie fictive, tout en utilisant les
                  valeurs réelles du marché, afin de simuler des conditions
                  authentiques d’investissement.
                </Text>

                <div className="stacks">
                  <div className="skill-box">
                    <p>NextJS</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>TypeScript</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>Tailwind</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>NestJS</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>Prisma</p>
                    <img src={prismaSvg} alt="" className="skill-img" />
                  </div>
                  <div className="skill-box">
                    <p>PostgreSQL</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                </div>
              </CardBody>

              <CardFooter>
                <div className="links">
                  <a
                    href="https://github.com/SlimDumbledodge/trade-lab"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Repos <i className="fa-brands fa-github" />
                  </a>
                  <a
                    href="https://www.tradelab-studio.fr/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Site Web{' '}
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
              objectFit="contain"
              maxW={{ base: '100%', xl: '400px' }}
              src={laPinceImg}
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody ml={4}>
                <h2 className="project_title">
                  la pince <span className="project_date">(Juillet 2024)</span>
                </h2>

                <Text className="project_description">
                  La Pince est une application de finance personnelle conçue
                  pour aider les utilisateurs à suivre facilement leurs
                  dépenses, gérer leurs budgets et atteindre leurs objectifs
                  financiers. L'application met l'accent sur la simplicité, la
                  personnalisation et l'accessibilité, offrant une interface
                  intuitive adaptée à tous les utilisateurs, indépendamment de
                  leurs connaissances financières. Elle vise à rendre la gestion
                  budgétaire plus simple et engageante grâce à des
                  fonctionnalités pratiques et centrées sur l'utilisateur,
                  développées avec une approche agile.
                </Text>

                <div className="stacks">
                  <div className="skill-box">
                    <p>NextJS</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>TypeScript</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>Tailwind</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>NestJS</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>PostgreSQL</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                  <div className="skill-box">
                    <p>Docker</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg"
                      alt=""
                      className="skill-img"
                    />
                  </div>
                </div>
              </CardBody>

              <CardFooter>
                <div className="links">
                  <a
                    onClick={openBothLinks}
                    rel="noreferrer"
                    style={{ cursor: 'pointer' }}
                  >
                    Repos <i className="fa-brands fa-github" />
                  </a>

                  <a
                    href="https://www.la-pince.tech/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Site Web{' '}
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
              src="https://i.ibb.co/w4h3nfR/LBGEEK-min.png"
              alt="Caffe Latte"
            />

            <Stack>
              <CardBody ml={4}>
                <h2 className="project_title">
                  lebongeek{' '}
                  <span className="project_date">(Décembre 2023)</span>
                </h2>

                <Text className="project_description">
                  LeBonGeek est mon projet de fin d'études. Il a été développé
                  en 1 mois. Le but de cette application est la vente de petites
                  annonces entre particuliers dans l'univers geek (BD,
                  figurines, etc...). La majeure partie du travail est terminée,
                  mais il reste encore quelques détails à corriger. Le backend a
                  été codé en Symfony par 2 développeurs, et le frontend a été
                  réalisé par 3 d'entre nous ! :)
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
                    <p>Symfony</p>
                    <img src={symfonyIcon} alt="" className="skill-img" />
                  </div>
                  <div className="skill-box">
                    <p>PostgreSQL</p>
                    <img
                      src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
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
                    Repos <i className="fa-brands fa-github" />
                  </a>
                  <a
                    href="http://lebongeek.surge.sh/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Site Web{' '}
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
                  pokédex <span className="project_date">(Décembre 2023)</span>
                </h2>

                <Text className="project_description">
                  Un projet sur l'univers des Pokémon. Il permet de consulter un
                  large éventail d'informations sur chacun d'entre eux. Cette
                  application permet, entre autres, de rechercher un Pokémon,
                  consulter ses informations, vérifier son évolution, etc... Je
                  vous invite à la visiter si vous voulez en savoir plus ! :)
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
                    Repos <i className="fa-brands fa-github" />
                  </a>
                  <a
                    href="https://amael-pokedex.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Site Web{' '}
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
              </CardFooter>
            </Stack>
          </Card>

          {/* Badge réutilisable pour futurs projets */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
