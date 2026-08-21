import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import AvatarImageUrl from '@site/static/img/avatar.jpg';


import styles from './about-hero.module.css';
import { socialNetworksUrl } from '@site/src/utils/social-networks-url';

type AboutHeroProps = {
  lang: 'es' | 'en';
};

export function AboutHero({ lang }: AboutHeroProps): ReactNode {
  const content = {
    es: {
      badge: 'Desarrollador de software',
      title: 'Hola, soy Gabriel Cervantes',
      role: 'Full Stack Developer',
      description:
        'Me apasiona construir aplicaciones web y APIs modernas, con especial interés en arquitectura, buenas prácticas de desarrollo y seguridad.',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      website: 'Mi web',
    },
    en: {
      badge: 'Software Developer',
      title: 'Hi, I’m Gabriel Cervantes',
      role: 'Full Stack Developer',
      description:
        'I enjoy building modern web applications and APIs, with a strong interest in architecture, software development best practices, and security.',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      website: 'My website',
    },
  };

  const text = content[lang];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <img src={AvatarImageUrl} alt="Gabriel Cervantes" />
        </div>

        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          {text.badge}
        </div>

        <h1 className={styles.title}>
          {text.title}
        </h1>

        <p className={styles.role}>
          {text.role}
        </p>

        {/* <p className={styles.subtitle}>
          {text.description}
        </p> */}

        <div className={styles.buttons}>
          <Link
            className={styles.primaryButton}
            href={socialNetworksUrl.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.linkedin}
            <span>↗</span>
          </Link>

          <Link
            className={styles.secondaryButton}
            href={socialNetworksUrl.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.github}
            <span>↗</span>
          </Link>

          <Link
            className={styles.secondaryButton}
            href={socialNetworksUrl.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.website}
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}