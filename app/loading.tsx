import styles from './loading.module.css';

export default function Loading() {
  return (
    <main className={styles.main}>
      {/* Hero skeleton */}
      <div className={styles.heroSkeleton}>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonSubtitle} />
      </div>

      {/* Filter bar skeleton */}
      <div className={styles.filterSkeleton}>
        <div className={styles.filterInner}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles.filterPill} />
          ))}
        </div>
      </div>

      {/* Grid skeleton */}
      <div className={styles.gridSkeleton}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.cardSkeleton}>
            <div className={styles.imageSkeleton} />
            <div className={styles.cardInfo}>
              <div className={styles.skeletonLine} style={{ width: '40%' }} />
              <div className={styles.skeletonLine} style={{ width: '90%' }} />
              <div className={styles.skeletonLine} style={{ width: '60%' }} />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
