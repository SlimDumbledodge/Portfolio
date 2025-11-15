/* eslint-disable react/no-unescaped-entities */
import './About.scss';
import { Image } from '@chakra-ui/react';
import programmerImage from '../../assets/programmer.png';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <Image
            src={programmerImage}
            alt="about"
            objectFit="contain"
            id="about-img"
            maxW={{ base: '100%', xl: '400px' }}
            rounded="full"
          />
          <div className="about-text">
            <h3>À propos de moi</h3>

            <p>
              Ingénieur Fullstack polyvalent passionné par le code depuis mon
              adolescence. Je conçois et construis des applications web
              dynamiques et responsives en utilisant une large gamme de langages
              de programmation, de frameworks et de bibliothèques tierces pour
              offrir des expériences utilisateur optimales. Toujours curieux et
              proactif, je me tiens au courant des technologies émergentes pour
              implémenter des solutions innovantes et améliorer l'efficacité des
              projets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
