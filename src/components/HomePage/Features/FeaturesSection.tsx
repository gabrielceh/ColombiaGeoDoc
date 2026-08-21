import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { FileJson, Map, MapPin, Search } from 'lucide-react';

import styles from './features-section.module.css';

export function FeaturesSection() {
  const { i18n } = useDocusaurusContext();

  const lang = i18n.currentLocale === 'en' ? 'en' : 'es';

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span>{content[lang].sectionLabel}</span>

          <h2>{content[lang].title}</h2>

          <p>{content[lang].description}</p>
        </div>

        <div className={styles.grid}>
          {content[lang].features.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <div className={styles.icon}>
                <feature.icon size={24} strokeWidth={1.8} />
              </div>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const content = {
  en: {
    sectionLabel: 'What can you do?',
    title: 'An API designed for developers',
    description:
      'Query and explore geographic information about Colombia through REST endpoints that are easy to integrate.',
    features: [
      {
        title: 'Departments',
        description: 'Query information about the departments of Colombia.',
        icon: Map,
      },
      {
        title: 'Cities',
        description: 'Access cities and municipalities in each department.',
        icon: MapPin,
      },
      {
        title: 'Search',
        description: 'Find resources by name or DANE code.',
        icon: Search,
      },
      {
        title: 'Pagination',
        description: 'Control results using pagination and sorting.',
        icon: FileJson,
      },
    ],
  },

  es: {
    sectionLabel: '¿Qué puedes hacer?',
    title: 'Una API pensada para desarrolladores',
    description:
      'Consulta y explora información geográfica de Colombia mediante endpoints REST fáciles de integrar.',
    features: [
      {
        title: 'Departamentos',
        description: 'Consulta información de los departamentos de Colombia.',
        icon: Map,
      },
      {
        title: 'Ciudades',
        description: 'Accede a ciudades y municipios de cada departamento.',
        icon: MapPin,
      },
      {
        title: 'Búsqueda',
        description: 'Encuentra recursos mediante nombre o código DANE.',
        icon: Search,
      },
      {
        title: 'Paginación',
        description: 'Controla resultados mediante paginación y ordenamiento.',
        icon: FileJson,
      },
    ],
  },
};
