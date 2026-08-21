import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';

import styles from './project.module.css';
import { socialNetworksUrl } from '@site/src/utils/social-networks-url';

type ProjectProps = {
  lang: 'es' | 'en';
};

export function Project({ lang }: ProjectProps): ReactNode {
  const text = content[lang];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>{text.label}</span>

          <h2>{text.title}</h2>

          <p>{text.description}</p>

          <Link
            className={styles.button}
            href={socialNetworksUrl.githubColombiaGeoApi}
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.button}
            <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

const content = {
  es: {
    label: 'Proyecto',
    title: 'ColombiaGeoApi',
    description:
      'Un proyecto personal para ofrecer información geográfica de Colombia mediante una API REST. Lo construí como una forma de aprender, experimentar y poner en práctica diferentes tecnologías y buenas prácticas.',
    button: 'Ver en GitHub',
  },
  en: {
    label: 'Project',
    title: 'ColombiaGeoApi',
    description:
      'A personal project that provides geographic information about Colombia through a REST API. I built it as a way to learn, experiment, and put different technologies and best practices into practice.',
    button: 'View on GitHub',
  },
};