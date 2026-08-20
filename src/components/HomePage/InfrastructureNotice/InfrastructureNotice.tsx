import { TriangleAlert } from 'lucide-react';
import styles from './infrastructure-notice.module.css';
import Link from '@docusaurus/Link';

export function InfrastructureNotice() {
  return (
    <section className={styles.noticeSection}>
      <div className='container'>
        <div className={styles.notice}>
          <div className={styles.noticeIcon}>
            <TriangleAlert size={24} strokeWidth={1.8} />
          </div>

          <div>
            <h3>Información sobre disponibilidad</h3>

            <p>
              Esta API utiliza actualmente servicios gratuitos para el
              alojamiento de la aplicación y la base de datos. Debido a las
              limitaciones de estos planes, pueden producirse períodos de
              indisponibilidad o tiempos de respuesta elevados.
            </p>

            <p>
              La infraestructura actual está destinada a demostración,
              aprendizaje, pruebas y evaluación. No se recomienda utilizar esta
              instancia para aplicaciones críticas o entornos de producción.
            </p>

            <Link to='/docs/infrastructure'>
              Más información sobre la infraestructura →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
