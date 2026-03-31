'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product, generateAltText, formatCategoryLabel } from '@/lib/api';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [wished, setWished] = useState(false);
  const [imageError, setImageError] = useState(false);

  const altText = generateAltText(product.title, product.category);
  const categoryLabel = formatCategoryLabel(product.category);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.rate,
      reviewCount: product.rating.count,
    },
  };

  return (
    <article
      className={styles.card}
      aria-label={`${product.title}, $${product.price.toFixed(2)}`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Image area */}
      <div className={styles.imageWrapper}>
        {!imageError ? (
          <Image
            src={product.image}
            alt={altText}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={styles.image}
            priority={priority}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={styles.imageFallback} aria-label="Image unavailable">
            <span>No Image</span>
          </div>
        )}

        <button
          className={`${styles.wishlistBtn} ${wished ? styles.wishlistBtnActive : ''}`}
          onClick={() => setWished((p) => !p)}
          aria-label={wished ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
          aria-pressed={wished}
        >
          <HeartIcon filled={wished} />
        </button>
      </div>

      {/* Card info */}
      <div className={styles.info}>
        <p className={styles.category}>{categoryLabel}</p>
        <h2 className={styles.title} title={product.title}>
          {product.title}
        </h2>
        <div className={styles.bottom}>
          <div
            className={styles.rating}
            aria-label={`Rated ${product.rating.rate} out of 5, ${product.rating.count} reviews`}
          >
            <StarIcon />
            <span className={styles.ratingValue}>{product.rating.rate}</span>
            <span className={styles.ratingCount}>({product.rating.count})</span>
          </div>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </article>
  );
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
