'use client';
import { useState } from 'react';
import { Product, generateAltText, formatCategoryLabel } from '@/lib/api';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {!imgError ? (
          <img
            src={product.image}
            alt={generateAltText(product.title, product.category)}
            className={styles.image}
            loading={priority ? 'eager' : 'lazy'}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.fallback}>
             <span>🛍️</span>
             <p>{formatCategoryLabel(product.category)}</p>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.category}>{formatCategoryLabel(product.category)}</p>
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.bottom}>
          <div className={styles.rating}>
            <span>⭐ {product.rating.rate}</span>
            <span className={styles.count}>({product.rating.count})</span>
          </div>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </article>
  );
}