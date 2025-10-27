/* eslint-disable react/no-unescaped-entities */
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h3 id="contact-title">Contact</h3>
          <p id="contact-hook-sentence">
            Looking for a talented developer? Let's get in touch!{' '}
            <i className="fa-solid fa-hand-point-down" />
          </p>
          <div className="contact-wrapper">
            <div className="contact-container">
              <span>
                <i className="fa-regular fa-map" />
              </span>
              <div className="contact-box">
                <h3>Location</h3>
                <p>
                  Montpellier, France (Open to opportunities in Switzerland 🇨🇭)
                </p>
              </div>
            </div>

            <div className="contact-container">
              <span>
                <i className="fa-regular fa-envelope" />
              </span>
              <div className="contact-box">
                <h3>Email</h3>
                <p>amael.rosales@gmail.com</p>
              </div>
            </div>

            <div className="contact-container">
              <span>
                <i className="fa-solid fa-phone" />
              </span>
              <div className="contact-box">
                <h3>Phone</h3>
                <p>+33 7 68 33 31 57</p>
              </div>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1R5N0tr_nKKNcRTdkTLkhAw7viCBMdmhv/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="download-cv"
          >
            <i className="fa-solid fa-file download" />
            Check Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
