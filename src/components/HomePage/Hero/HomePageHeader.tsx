import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { ChevronRight, Map } from 'lucide-react';
import Link from '@docusaurus/Link';

import styles from './home-page-header.module.css';

export function HomepageHeader() {
  const { siteConfig, i18n } = useDocusaurusContext();

  const lang = i18n.currentLocale === 'en' ? 'en' : 'es';
  const docsPrefix = lang === 'en' ? '/en' : '';

  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <Map size={16} strokeWidth={2} />
          <span>{siteConfig.title}</span>
        </div>

        <h1 className={styles.title}>
          {content[lang].title}
          <br />
          <span>{content[lang].highlight}</span>
        </h1>

        <p className={styles.subtitle}>{content[lang].subtitle}</p>

        <div className={styles.buttons}>
          <Link
            className='button button--primary button--lg'
            to={`${docsPrefix}/docs/intro`}
          >
            {content[lang].start}
            <ChevronRight size={16} strokeWidth={2} />
          </Link>

          <Link
            className='button button--secondary button--lg'
            to={`${docsPrefix}/docs/departments`}
          >
            {content[lang].documentation}
          </Link>
        </div>
      </div>
    </header>
  );
}

const content = {
  en: {
    title: 'Geographic data of Colombia,',
    highlight: 'simple and accessible.',
    subtitle:
      'A REST API to query departments, cities, and municipalities of Colombia quickly and easily.',
    start: 'Get started',
    documentation: 'View documentation',
  },
  es: {
    title: 'Datos geográficos de Colombia,',
    highlight: 'simples y accesibles.',
    subtitle:
      'Una API REST para consultar departamentos, ciudades y municipios de Colombia de forma rápida y sencilla.',
    start: 'Empezar ahora',
    documentation: 'Ver documentación',
  },
};
