import { Product } from '@/lib/api';
import ProductCard from '@/components/ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className={styles.empty} role="status" aria-live="polite">
        <p className={styles.emptyText}>No products found.</p>
        <p className={styles.emptyHint}>Try a different category or reset your filters.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid} aria-label={`${products.length} products`} role="list">
      {products.map((product, index) => (
        <div key={product.id} className={styles.gridItem} role="listitem">
          <ProductCard product={product} priority={index < 4} />
        </div>
      ))}
    </div>
  );
}
