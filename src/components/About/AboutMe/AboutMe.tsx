import type { ReactNode } from 'react';

import styles from './about-me.module.css';

type AboutMeProps = {
  lang: 'es' | 'en';
};

export function AboutMe({ lang }: AboutMeProps): ReactNode {

  const text = content[lang];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>{text.label}</div>

        <div className={styles.content}>
          <h2>{text.title}</h2>

          <div className={styles.paragraphs}>
            {text.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const content = {
  es: {
    label: 'Sobre mí',
    title: 'Solo un poco',
    paragraphs: [
      'Soy desarrollador Full Stack y me gusta crear aplicaciones web y APIs. Disfruto aprender nuevas tecnologías y seguir mejorando con cada proyecto.',
      'ColombiaGeoApi es uno de esos proyectos personales que me permiten aprender, experimentar y compartir lo que voy construyendo.',
    ],
  },
  en: {
    label: 'About me',
    title: 'A little bit about me',
    paragraphs: [
      'I am a Full Stack Developer who enjoys building web applications and APIs. I like learning new technologies and improving with every project.',
      'ColombiaGeoApi is one of those personal projects that allows me to learn, experiment, and share what I build.',
    ],
  },
};