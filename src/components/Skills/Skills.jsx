import './Skills.scss';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-content">
          <h3>Compétences</h3>
          <div className="skills-wrapper">
            <div className="skill-box">
              <p>HTML5</p>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                alt=""
                className="skill-img"
              />
            </div>
            <div className="skill-box">
              <p>CSS3</p>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                alt=""
                className="skill-img"
              />
            </div>
            <div className="skill-box">
              <p>JavaScript</p>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
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
              <p>Tailwind</p>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                alt=""
                className="skill-img"
              />
            </div>
            <div className="skill-box">
              <p>Bootstrap</p>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                alt=""
                className="skill-img"
              />
            </div>
            <div className="skill-box">
              <p>React-Bootstrap</p>
              <img
                src="data:image/png;base64,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"
                alt="reactbootstrap"
                className="skill-img"
              />
            </div>
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
              <p>Material UI</p>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/materialui-colored.svg"
                alt=""
                className="skill-img"
              />
            </div>
            <div className="skill-box">
              <p>Bulma</p>
              <img
                src="https://static-00.iconduck.com/assets.00/bulma-icon-352x512-b0faxtog.png"
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
            <div className="skill-box">
              <p>MariaDB</p>
              <img
                src="https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent.png"
                alt=""
                className="skill-img"
              />
            </div>
            <div className="skill-box">
              <p>PHP</p>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
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
              <p>WordPress</p>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png"
                alt=""
                className="skill-img"
              />
            </div>
            <div className="skill-box">
              <p>Vite</p>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg"
                alt=""
                className="skill-img"
              />
            </div>
            <div className="skill-box">
              <p>Vitest</p>
              <img
                src="https://vitest.dev/logo.svg"
                alt=""
                className="skill-img"
              />
            </div>
            <div className="skill-box">
              <p>Git</p>
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
                alt=""
                className="skill-img"
              />
            </div>
            <div className="skill-box">
              <p>npm</p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX////LODfIJiXtwsHIIiHz1tbJKyrjoqHwzs7HHh3svr756+r++fnJLSz56OfflJTZfHvmqqrNQT/mrq7ZeHfFAADy1NTKMTDinJzGDwzvycnIGxrHFhTmqKjKNTTWbW3dioqpp+djAAACAklEQVR4nO3bXXOaQBiA0YiGVJE0qR+oSZP+/1/ZTg0LMyBZtDrQnHO5zL7wXInOencHAAAAAAAAAAAAAAAAAAAAAAB8JdliOi6LrGfhdpOMy2bbs/B+NhmX2b1ChUOnUOHwXVCYz+IU4WZJ3IY8bEgjb9E15PzCfLf9FmP7VCbmh7gNu/Lp0lXUhu4h5xcm08gd38t7Jcu4DYfk3IermZ49pCpcRO7oXXj+w9UsFJ6ksElhg8IoCk/7pHBZqpa6C5fNHd2FLRva1q5VuHjJj16ruZ2Fj/uPDfNVZOEkPW5I1mEpC0N+Xr0wPNw8tvClvBhb+OPteDF/qgrDkOfbFc5iC+cfF9O+hUWtMAxRqFChQoUKFSpUqFChQoVjLXwtjqK/44+tMHtfH71PO4eMt7CNQoV/KTxNocIICm9W2HZSYTiF/+CkQrrKmlZpWXMIa786Cx+7hkxbbhEK12GpdgKmOeSCE0PpvKkc++fpwlo4u9P6XrqJG1J5Ky8WYak6ppU3h9zy1Ffnd4urUaiwD4XXofALFm73aT/VedikZVx4HZkUPefG2vf9R0m2e+hnFz6i81XTQ/nJXKx7zo2+f99/BfW2rB1qbv5nJ7x61H5NHJtaYReFA6ZQ4fAp/A8K9y1f1Js2z5+PGqrHOJE/UwEAAAAAAAAAAAAAAAAAAABc4jc5DV545T6y3AAAAABJRU5ErkJggg=="
                alt=""
                className="skill-img"
              />
            </div>
            <div className="skill-box">
              <p>Yarn</p>
              <img
                src="https://iconape.com/wp-content/png_logo_vector/yarn-2.png"
                alt=""
                className="skill-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
