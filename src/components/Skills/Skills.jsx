import './Skills.scss';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-content">
          <h3>Skills</h3>

          {/* FRONTEND */}
          <div className="skills-category">
            <h4>Frontend</h4>
            <div className="skills-wrapper">
              {[
                {
                  name: 'HTML5',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
                },
                {
                  name: 'CSS3',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
                },
                {
                  name: 'JavaScript',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
                },
                {
                  name: 'TypeScript',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg',
                },
                {
                  name: 'SCSS',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg',
                },
                {
                  name: 'React',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
                },
                {
                  name: 'Redux',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg',
                },
                {
                  name: 'TailwindCSS',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg',
                },
                {
                  name: 'Material UI',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg',
                },
              ].map((skill) => (
                <div className="skill-box" key={skill.name}>
                  <p>{skill.name}</p>
                  <img src={skill.img} alt={skill.name} className="skill-img" />
                </div>
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="skills-category">
            <h4>Backend</h4>
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
                  name: 'PHP',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg',
                },
                {
                  name: 'Laravel',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/laravel-colored.svg',
                },
              ].map((skill) => (
                <div className="skill-box" key={skill.name}>
                  <p>{skill.name}</p>
                  <img src={skill.img} alt={skill.name} className="skill-img" />
                </div>
              ))}
            </div>
          </div>

          {/* DATABASE */}
          <div className="skills-category">
            <h4>Database</h4>
            <div className="skills-wrapper">
              {[
                {
                  name: 'MySQL',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg',
                },
                {
                  name: 'MariaDB',
                  img: 'https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent.png',
                },
                {
                  name: 'PostgreSQL',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg',
                },
              ].map((skill) => (
                <div className="skill-box" key={skill.name}>
                  <p>{skill.name}</p>
                  <img src={skill.img} alt={skill.name} className="skill-img" />
                </div>
              ))}
            </div>
          </div>

          {/* TOOLS & DEVOPS */}
          <div className="skills-category">
            <h4>Tools & DevOps</h4>
            <div className="skills-wrapper">
              {[
                {
                  name: 'Git',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
                },
                {
                  name: 'GitHub',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg',
                },
                {
                  name: 'npm',
                  img: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/npm-colored.svg',
                },
                {
                  name: 'Yarn',
                  img: 'https://iconape.com/wp-content/png_logo_vector/yarn-2.png',
                },
                { name: 'Vite', img: 'https://vitejs.dev/logo.svg' },
                { name: 'Vitest', img: 'https://vitest.dev/logo.svg' },
                {
                  name: 'WordPress',
                  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png',
                },
              ].map((skill) => (
                <div className="skill-box" key={skill.name}>
                  <p>{skill.name}</p>
                  <img src={skill.img} alt={skill.name} className="skill-img" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
