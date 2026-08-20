import { ReactNode } from 'react';

import styles from './http-method.module.css';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface HttpMethodProps {
  method: HttpMethod;
  children: ReactNode;
}

export default function HttpMethod({
  method,
  children,
}: HttpMethodProps) {
  return (
    <div className={styles.endpoint}>
      <span
        className={`${styles.method} ${styles[method.toLowerCase()]}`}
      >
        {method}
      </span>

      <code>{children}</code>
    </div>
  );
}
