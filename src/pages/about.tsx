import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { AboutHero } from '../components/About/Hero/AboutHero';
import { AboutMe } from '../components/About/AboutMe/AboutMe';
import { Technologies } from '../components/About/Technologies/Technologies';

export default function About(): ReactNode {
  const { i18n } = useDocusaurusContext();

  const lang = i18n.currentLocale === 'en' ? 'en' : 'es';


  const text = content[lang];

  return (
    <Layout title={text.title} description={text.description}>
      <main>
        <AboutHero lang={lang} />
        <AboutMe lang={lang} />
        <Technologies lang={lang} />
      </main>
    </Layout>
  );
}

  const content = {
    es: {
      title: 'Sobre mí',
      description: 'Conoce más sobre Gabriel Cervantes',
      heading: 'Hola, soy Gabriel Cervantes',
      role: 'Full Stack Developer',
      introduction:
        'Soy desarrollador Full Stack apasionado por crear aplicaciones web, APIs y soluciones de software utilizando tecnologías modernas.',
      aboutTitle: 'Sobre mí',
      aboutText:
        'Me interesa construir software limpio, mantenible y seguro, aplicando buenas prácticas de desarrollo, arquitectura y diseño de APIs.',
      technologiesTitle: 'Tecnologías',
      projectTitle: 'ColombiaGeoApi',
      projectText:
        'ColombiaGeoApi es un proyecto personal creado para ofrecer información geográfica de Colombia mediante una API REST, aplicando principios de arquitectura limpia, seguridad y buenas prácticas de desarrollo.',
      findMeTitle: 'Encuéntrame',
    },
    en: {
      title: 'About me',
      description: 'Learn more about Gabriel Cervantes',
      heading: 'Hi, I’m Gabriel Cervantes',
      role: 'Full Stack Developer',
      introduction:
        'I am a Full Stack Developer passionate about building web applications, APIs, and software solutions using modern technologies.',
      aboutTitle: 'About me',
      aboutText:
        'I enjoy building clean, maintainable, and secure software while applying good development practices, architecture, and API design principles.',
      technologiesTitle: 'Technologies',
      projectTitle: 'ColombiaGeoApi',
      projectText:
        'ColombiaGeoApi is a personal project created to provide geographic information about Colombia through a REST API, applying clean architecture, security, and software development best practices.',
      findMeTitle: 'Find me',
    },
  };
