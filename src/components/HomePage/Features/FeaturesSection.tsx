import { FileJson, Map, MapPin, Search } from 'lucide-react';
import styles from './features-section.module.css';

export function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className={styles.sectionHeader}>
          <span>¿Qué puedes hacer?</span>

          <h2>Una API pensada para desarrolladores</h2>

          <p>
            Consulta y explora información geográfica de Colombia mediante
            endpoints REST fáciles de integrar.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {
            features.map((feature) => (
              <article className={styles.featureCard} key={feature.title}>
                <div className={styles.featureIcon}>
                  <feature.icon size={24} strokeWidth={1.8} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  );
}

const features = [
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
];