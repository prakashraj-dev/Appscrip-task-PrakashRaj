'use client';
import { useState } from 'react';
import { Product, generateAltText, formatCategoryLabel } from '@/lib/api';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  priority?: boolean; // New prop to help with SEO/Performance
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);

  // SEO Requirement: Use the helper function for descriptive alt text
  const altText = generateAltText(product.title, product.category);
  const formattedCategory = formatCategoryLabel(product.category);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {!imgError ? (
          <img
            src={product.image}
            alt={altText}
            className={styles.image}
            /* Performance Optimization: 
               Priority images (top row) load fast. 
               Others load 'lazy' to reduce initial DOM load.
            */
            loading={priority ? 'eager' : 'lazy'}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={styles.fallback}>
             {/* Dynamic Icon Fallback */}
             <span className={styles.fallbackIcon}>🛍️</span>
             <p className={styles.fallbackLabel}>{formattedCategory}</p>
          </div>
        )}
      </div>

      <div className={styles.info}>
        <p className={styles.category}>{formattedCategory}</p>
        <h2 className={styles.title}>{product.title}</h2>
        
        <div className={styles.bottom}>
          <div className={styles.rating}>
            <span className={styles.star}>⭐</span>
            <span className={styles.rate}>{product.rating.rate.toFixed(1)}</span>
            <span className={styles.count}>({product.rating.count})</span>
          </div>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </article>
  );
}