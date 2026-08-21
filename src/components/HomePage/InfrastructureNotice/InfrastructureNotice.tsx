import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { ExternalLink, TriangleAlert } from 'lucide-react';
import Link from '@docusaurus/Link';

import styles from './infrastructure-notice.module.css';

export function InfrastructureNotice() {
  const { i18n } = useDocusaurusContext();

  const lang = i18n.currentLocale === 'en' ? 'en' : 'es';
  const docsPrefix = lang === 'en' ? '/en' : '';

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.notice}>
          <div className={styles.icon}>
            <TriangleAlert size={24} strokeWidth={1.8} />
          </div>

          <div className={styles.content}>
            <span className={styles.label}>{content[lang].label}</span>

            <h2>{content[lang].title}</h2>

            <p>{content[lang].description}</p>

            <p>{content[lang].limitations}</p>

            <p>{content[lang].warning}</p>

            <Link
              className={styles.link}
              to={`${docsPrefix}/docs/infrastructure`}
            >
              {content[lang].link}
              <ExternalLink size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const content = {
  en: {
    label: 'AVAILABILITY',
    title: 'A note about the infrastructure',
    description:
      'Colombia Geo API currently uses free services to host the application and PostgreSQL database.',
    limitations:
      'Due to the limitations of free plans, restarts, increased response times, or periods of unavailability may occur.',
    warning:
      'This infrastructure is primarily intended for demonstration, learning, testing, and evaluation. This instance is not recommended for critical applications or production environments.',
    link: 'View infrastructure details',
  },

  es: {
    label: 'DISPONIBILIDAD',
    title: 'Una nota sobre la infraestructura',
    description:
      'Colombia Geo API utiliza actualmente servicios gratuitos para el alojamiento de la aplicación y la base de datos PostgreSQL.',
    limitations:
      'Debido a las limitaciones de los planes gratuitos, pueden producirse reinicios, tiempos de respuesta elevados o períodos de indisponibilidad.',
    warning:
      'Esta infraestructura está destinada principalmente a demostración, aprendizaje, pruebas y evaluación. No se recomienda utilizar esta instancia para aplicaciones críticas o entornos de producción.',
    link: 'Ver detalles de infraestructura',
  },
};
