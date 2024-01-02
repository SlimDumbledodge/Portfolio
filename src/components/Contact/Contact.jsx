/* eslint-disable react/no-unescaped-entities */
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h3 id="contact-title">Contact</h3>
          <p id="contact-hook-sentence">
            Une opportunité d'alternance ? Contacter moi !{' '}
            <i className="fa-solid fa-hand-point-down" />
          </p>
          <div className="contact-wrapper">
            <div className="contact-container">
              <span>
                <i className="fa-regular fa-map" />
              </span>
              <div className="contact-box">
                <h3>Lieu</h3>
                <p>Montpellier, France</p>
              </div>
            </div>
            <div className="contact-container">
              <span>
                <i className="fa-regular fa-envelope" />
              </span>
              <div className="contact-box">
                <h3>Mail</h3>
                <p>amael.rosales@gmail.com</p>
              </div>
            </div>
            <a
              href="https://www.dropbox.com/scl/fi/4voysqkgyte79qnw0as1s/CV.pdf?rlkey=w7wri6iywpcynf6yf687fn9uh&dl=0"
              target="_blank"
              rel="noreferrer"
              className="download-cv"
            >
              <i className="fa-solid fa-download download" />
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
