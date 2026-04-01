'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { formatCategoryLabel } from '@/lib/api';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  categories: string[];
  activeCategory?: string;
  productCount: number;
}

export default function FilterBar({ categories, activeCategory = 'all', productCount }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // We must match the EXACT string in api.ts
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category); 
    }
    
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={styles.filterBar}>
      <div className={styles.tabs}>
        <button 
          className={(activeCategory === 'all' || !activeCategory) ? styles.activeTab : styles.tab}
          onClick={() => handleCategoryClick('all')}
        >
          ALL
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? styles.activeTab : styles.tab}
            onClick={() => handleCategoryClick(cat)}
          >
            {formatCategoryLabel(cat).toUpperCase()}
          </button>
        ))}
      </div>
      <div className={styles.itemCount}>
        <strong>{productCount}</strong> ITEMS
      </div>
    </div>
  );
}