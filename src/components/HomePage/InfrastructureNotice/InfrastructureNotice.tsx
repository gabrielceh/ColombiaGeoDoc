import { ExternalLink, TriangleAlert } from 'lucide-react';
import styles from './infrastructure-notice.module.css';
import Link from '@docusaurus/Link';

export function InfrastructureNotice() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.notice}>
          <div className={styles.icon}>
            <TriangleAlert size={24} strokeWidth={1.8} />
          </div>

          <div className={styles.content}>
            <span className={styles.label}>DISPONIBILIDAD</span>

            <h2>Una nota sobre la infraestructura</h2>

            <p>
              Colombia Geo API utiliza actualmente servicios gratuitos para el
              alojamiento de la aplicación y la base de datos PostgreSQL.
            </p>

            <p>
              Debido a las limitaciones de los planes gratuitos, pueden
              producirse reinicios, tiempos de respuesta elevados o períodos de
              indisponibilidad.
            </p>

            <p>
              Esta infraestructura está destinada principalmente a demostración,
              aprendizaje, pruebas y evaluación. No se recomienda utilizar esta
              instancia para aplicaciones críticas o entornos de producción.
            </p>

            <Link className={styles.link} to='/docs/infrastructure'>
              Ver detalles de infraestructura
              <ExternalLink size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
