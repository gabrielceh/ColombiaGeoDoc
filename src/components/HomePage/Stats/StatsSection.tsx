import styles from './stats-section.module.css';



export function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat) => (
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

const stats = [
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
];
