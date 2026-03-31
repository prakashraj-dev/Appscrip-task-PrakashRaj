'use client';

import { useEffect } from 'react';
import styles from './error.module.css';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <main className={styles.errorPage} role="alert" aria-live="assertive">
      <div className={styles.errorContent}>
        <p className={styles.errorCode}>500</p>
        <h1 className={styles.errorTitle}>Something went wrong</h1>
        <p className={styles.errorMessage}>
          We couldn't load the products right now. Please try again.
        </p>
        <button className={styles.retryBtn} onClick={reset}>
          Try Again
        </button>
      </div>
    </main>
  );
}
