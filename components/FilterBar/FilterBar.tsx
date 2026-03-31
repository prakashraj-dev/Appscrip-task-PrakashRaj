'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { formatCategoryLabel } from '@/lib/api';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  categories: string[];
  activeCategory?: string;
  activeSort?: string;
  productCount: number;
}

const SORT_OPTIONS = [
  { value: 'recommended', label: 'RECOMMENDED' },
  { value: 'newest',      label: 'NEWEST FIRST' },
  { value: 'popular',     label: 'POPULAR' },
  { value: 'price-asc',   label: 'PRICE: LOW TO HIGH' },
  { value: 'price-desc',  label: 'PRICE: HIGH TO LOW' },
];

export default function FilterBar({ categories, activeCategory, activeSort = 'recommended', productCount }: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const updateParams = useCallback((key: string, value: string | undefined) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== 'recommended') { params.set(key, value); } else { params.delete(key); }
    router.push(`?${params.toString()}`, { scroll: false });
  }, [router, searchParams]);

  const handleCategory = (cat: string) => updateParams('category', cat === activeCategory ? undefined : cat);
  const handleSort = (sort: string) => { updateParams('sort', sort); setSortOpen(false); };

  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === activeSort)?.label ?? 'RECOMMENDED';

  return (
    <div className={styles.filterBar} aria-label="Filter and sort products">
      {/* Category tabs */}
      <div className={styles.categoryRow}>
        <div className={styles.categoryScroll}>
          <button className={`${styles.catBtn} ${!activeCategory ? styles.catBtnActive : ''}`} onClick={() => handleCategory('')} aria-pressed={!activeCategory}>ALL</button>
          {categories.map((cat) => (
            <button key={cat} className={`${styles.catBtn} ${activeCategory === cat ? styles.catBtnActive : ''}`} onClick={() => handleCategory(cat)} aria-pressed={activeCategory === cat}>
              {formatCategoryLabel(cat).toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Controls row */}
      <div className={styles.controlRow}>
        <div className={styles.countLabel}><span>{productCount}</span> ITEMS</div>
        <div className={styles.controls}>
          <button className={`${styles.controlBtn} ${filterOpen ? styles.controlBtnActive : ''}`} onClick={() => setFilterOpen((p) => !p)} aria-expanded={filterOpen}>
            <FilterIcon />{filterOpen ? 'HIDE FILTER' : 'SHOW FILTER'}
          </button>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.sortWrapper}>
            <button className={`${styles.controlBtn} ${sortOpen ? styles.controlBtnActive : ''}`} onClick={() => setSortOpen((p) => !p)} aria-expanded={sortOpen} aria-haspopup="listbox">
              {activeSortLabel}<ChevronIcon rotated={sortOpen} />
            </button>
            {sortOpen && (
              <>
                <div className={styles.sortOverlay} onClick={() => setSortOpen(false)} aria-hidden="true" />
                <ul className={styles.sortDropdown} role="listbox" aria-label="Sort options">
                  {SORT_OPTIONS.map((opt) => (
                    <li key={opt.value} role="option" aria-selected={activeSort === opt.value} className={`${styles.sortOption} ${activeSort === opt.value ? styles.sortOptionActive : ''}`} onClick={() => handleSort(opt.value)}>
                      {opt.label}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Filter panel */}
      {filterOpen && (
        <div id="filter-panel" className={styles.filterPanel} aria-label="Filter options">
          <h2 className={styles.filterHeading}>FILTER BY CATEGORY</h2>
          <div className={styles.filterChips}>
            {categories.map((cat) => (
              <button key={cat} className={`${styles.chip} ${activeCategory === cat ? styles.chipActive : ''}`} onClick={() => handleCategory(cat)} aria-pressed={activeCategory === cat}>
                {formatCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FilterIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="10" y1="18" x2="14" y2="18"/></svg>;
}
function ChevronIcon({ rotated }: { rotated: boolean }) {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: rotated ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}><polyline points="6 9 12 15 18 9"/></svg>;
}
