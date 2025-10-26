import './Footer.scss';

const Footer = () => {
  return (
    <section className="footer">
      <p>Copyright &copy; 2025. All rights reserved.</p>
      <div className="socials">
        <a
          href="http://linkedin.com/in/amael-rosales"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin" />
        </a>
        <a
          href="https://github.com/slimdumbledodge"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
