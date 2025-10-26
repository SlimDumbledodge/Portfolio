/* eslint-disable react/no-unescaped-entities */
import './About.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="about"
            id="about-img"
          />
          <div className="about-text">
            <h3>About me</h3>

            <p>
              Versatile Full-Stack Web Developer passionate about coding since
              my teenage years. I design and build dynamic, responsive web
              applications using a broad range of programming languages,
              frameworks, and third-party libraries to deliver optimal user
              experiences. Always curious and proactive, I stay up to date with
              emerging technologies to implement innovative solutions and boost
              project efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
