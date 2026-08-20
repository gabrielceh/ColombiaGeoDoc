import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { ChevronRight, Map } from 'lucide-react';
import Link from '@docusaurus/Link';

import styles from './home-page-header.module.css';

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <Map size={16} strokeWidth={2} />
          <span>{siteConfig.title}</span>
        </div>

        <h1 className={styles.title}>
          Datos geográficos de Colombia,
          <br />
          <span>simples y accesibles.</span>
        </h1>

        <p className={styles.subtitle}>
          Una API REST para consultar departamentos, ciudades y municipios de
          Colombia de forma rápida y sencilla.
        </p>

        <div className={styles.buttons}>
          <Link className='button button--primary button--lg' to='/docs/intro'>
            Empezar ahora
            <ChevronRight size={16} strokeWidth={2} />
          </Link>

          <Link
            className='button button--secondary button--lg'
            to='/docs/endpoints'
          >
            Ver endpoints
          </Link>
        </div>
      </div>
    </header>
  );
}
