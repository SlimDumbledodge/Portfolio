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
              src={tradelabImg}
              alt="tradelab"
              bg="white"
            />

            <Stack>
              <CardBody ml={4}>
                <h2 className="project_title">tradelab</h2>

                <Text className="project_description">
                  La Pince is a personal finance application designed to help
                  users easily track their expenses, manage their budgets, and
                  achieve their financial goals. The app focuses on simplicity,
                  customization, and accessibility, offering an intuitive
                  interface suitable for all users, regardless of their
                  financial knowledge. It aims to make budget management more
                  straightforward and engaging through practical, user-centered
                  features developed with an agile approach.
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
                  <Badge borderRadius="full" p={4} colorScheme="telegram">
                    In development...
                  </Badge>
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
                  la pince <span className="project_date">(July 2025)</span>
                </h2>

                <Text className="project_description">
                  La Pince is a personal finance application designed to help
                  users easily track their expenses, manage their budgets, and
                  achieve their financial goals. The app focuses on simplicity,
                  customization, and accessibility, offering an intuitive
                  interface suitable for all users, regardless of their
                  financial knowledge. It aims to make budget management more
                  straightforward and engaging through practical, user-centered
                  features developed with an agile approach.
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
                    Repo <i className="fa-brands fa-github" />
                  </a>

                  <a
                    href="https://www.la-pince.tech/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Website{' '}
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
                  <span className="project_date">(December 2023)</span>
                </h2>

                <Text className="project_description">
                  LeBonGeek is my end-of-study project. It was developed in 1
                  month. The purpose of this application is the sale of
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
                    Repo <i className="fa-brands fa-github" />
                  </a>
                  <a
                    href="http://lebongeek.surge.sh/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Website{' '}
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
                    Repo <i className="fa-brands fa-github" />
                  </a>
                  <a
                    href="https://amael-pokedex.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Website{' '}
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
