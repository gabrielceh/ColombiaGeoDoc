import styles from './stats-section.module.css';

export function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className='container'>
        <div className={styles.statsGrid}>
          <div>
            <strong>32</strong>
            <span>Departamentos</span>
          </div>

          <div>
            <strong>1.100+</strong>
            <span>Municipios y ciudades</span>
          </div>

          <div>
            <strong>REST</strong>
            <span>Arquitectura</span>
          </div>

          <div>
            <strong>JSON</strong>
            <span>Formato de respuesta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
