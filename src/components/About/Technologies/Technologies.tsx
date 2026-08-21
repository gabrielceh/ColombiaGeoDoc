import type { ReactNode } from 'react';

import styles from './technologies.module.css';

type TechnologiesProps = {
  lang: 'es' | 'en';
};

const technologies = [
  'C#',
  '.NET',
  'ASP.NET Core',
  'PostgreSQL',
  'Entity Framework Core',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Docker',
];

export function Technologies({ lang }: TechnologiesProps): ReactNode {

  const text = content[lang];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>{text.label}</span>
          <h2>{text.title}</h2>
        </div>

        <div className={styles.technologies}>
          {technologies.map((technology) => (
            <div className={styles.technology} key={technology}>
              {technology}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const content = {
  es: {
    label: 'Tecnologías',
    title: 'Con las que suelo trabajar',
  },
  en: {
    label: 'Technologies',
    title: 'What I usually work with',
  },
};