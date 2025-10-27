import './Skills.scss';
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import mongoSvg from '../../assets/mongodb.svg';
import restApiSvg from '../../assets/rest-api.svg';
import prismaSvg from '../../assets/light-prisma-svgrepo-com.svg';
import redisSvg from '../../assets/redis.svg';
import jestSvg from '../../assets/jest.svg';
import cypressSvg from '../../assets/cypress.svg';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-content">
          <h3>Skills</h3>

          <div className="skills-grid">
            <div className="skills-column left">
              {/* FRONTEND */}
              <Card id="card" direction={{ base: 'column' }} variant="outline">
                <CardBody>
                  <h4 style={{ textAlign: 'center', fontStyle: 'italic' }}>
                    Frontend
                  </h4>
                  <div className="skills-wrapper">
                    {[
                      {
                        name: 'NextJS',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg',
                      },
                      {
                        name: 'ReactJS',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
                      },
                      {
                        name: 'TypeScript',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg',
                      },
                      {
                        name: 'TailwindCSS',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg',
                      },

                      {
                        name: 'SCSS',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg',
                      },
                      {
                        name: 'CSS',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
                      },
                      {
                        name: 'HTML',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
                      },
                    ].map((skill) => (
                      <div className="skill-box" key={skill.name}>
                        <p>{skill.name}</p>
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="skill-img"
                        />
                      </div>
                    ))}
                  </div>
                </CardBody>
                <CardFooter />
              </Card>

              <Card id="card" direction={{ base: 'column' }} variant="outline">
                <CardBody>
                  <h4 style={{ textAlign: 'center', fontStyle: 'italic' }}>
                    Database
                  </h4>
                  <div className="skills-wrapper">
                    {[
                      {
                        name: 'MySQL',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg',
                      },
                      {
                        name: 'MongoDB',
                        img: mongoSvg,
                      },
                      {
                        name: 'API Rest',
                        img: restApiSvg,
                      },
                      {
                        name: 'PostgreSQL',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg',
                      },
                    ].map((skill) => (
                      <div className="skill-box" key={skill.name}>
                        <p>{skill.name}</p>
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="skill-img"
                        />
                      </div>
                    ))}
                  </div>
                </CardBody>
                <CardFooter />
              </Card>
            </div>

            <div className="skills-spacer" />

            <div className="skills-column right">
              {/* DATABASE */}

              {/* BACKEND */}
              <Card id="card" direction={{ base: 'column' }} variant="outline">
                <CardBody>
                  <h4 style={{ textAlign: 'center', fontStyle: 'italic' }}>
                    Backend
                  </h4>
                  <div className="skills-wrapper">
                    {[
                      {
                        name: 'Node.js',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
                      },
                      {
                        name: 'NestJS',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nestjs-colored.svg',
                      },
                      {
                        name: 'Prisma',
                        img: prismaSvg,
                      },
                      {
                        name: 'graphQL',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg',
                      },
                      {
                        name: 'Redis',
                        img: redisSvg,
                      },
                    ].map((skill) => (
                      <div className="skill-box" key={skill.name}>
                        <p>{skill.name}</p>
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="skill-img"
                        />
                      </div>
                    ))}
                  </div>
                </CardBody>
                <CardFooter />
              </Card>

              {/* TOOLS & DEVOPS */}
              <Card id="card" direction={{ base: 'column' }} variant="outline">
                <CardBody>
                  <h4 style={{ textAlign: 'center', fontStyle: 'italic' }}>
                    Tools & DevOps
                  </h4>
                  <div className="skills-wrapper">
                    {[
                      {
                        name: 'Git',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
                      },
                      {
                        name: 'Docker',
                        img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg',
                      },
                      { name: 'Vitest', img: 'https://vitest.dev/logo.svg' },
                      {
                        name: 'Jest',
                        img: jestSvg,
                      },
                      {
                        name: 'Cypress',
                        img: cypressSvg,
                      },
                      {
                        name: 'WordPress',
                        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png',
                      },
                    ].map((skill) => (
                      <div className="skill-box" key={skill.name}>
                        <p>{skill.name}</p>
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="skill-img"
                        />
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
