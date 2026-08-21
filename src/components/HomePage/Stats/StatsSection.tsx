import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './stats-section.module.css';

export function StatsSection() {
  const { i18n } = useDocusaurusContext();

  const lang = i18n.currentLocale === 'en' ? 'en' : 'es';

  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {content[lang].stats.map((stat) => (
            <div className={styles.item} key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const content = {
  en: {
    stats: [
      {
        value: '32',
        label: 'Departments',
      },
      {
        value: '1,100+',
        label: 'Municipalities and cities',
      },
      {
        value: 'REST',
        label: 'Architecture',
      },
      {
        value: 'JSON',
        label: 'Format',
      },
    ],
  },

  es: {
    stats: [
      {
        value: '32',
        label: 'Departamentos',
      },
      {
        value: '1.100+',
        label: 'Municipios y ciudades',
      },
      {
        value: 'REST',
        label: 'Arquitectura',
      },
      {
        value: 'JSON',
        label: 'Formato',
      },
    ],
  },
};
