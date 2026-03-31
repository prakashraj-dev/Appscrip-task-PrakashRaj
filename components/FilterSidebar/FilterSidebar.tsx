"use client";
import { useState } from "react";
import styles from "./FilterSidebar.module.css";

interface FilterSidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
}

export default function FilterSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterSidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    category: true,
    price: false,
  });

  const toggle = (key: string) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <aside className={styles.sidebar} aria-label="Product filters">
      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggle("category")}
          aria-expanded={expanded.category}
        >
          <span className={styles.sectionTitle}>IDEAL FOR</span>
          <span>{expanded.category ? "−" : "+"}</span>
        </button>
        {expanded.category && (
          <div className={styles.sectionBody}>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === "" ? styles.active : ""}`}
              onClick={() => onCategoryChange("")}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.active : ""}`}
                onClick={() => onCategoryChange(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <button
          className={styles.sectionHeader}
          onClick={() => toggle("price")}
          aria-expanded={expanded.price}
        >
          <span className={styles.sectionTitle}>PRICE RANGE</span>
          <span>{expanded.price ? "−" : "+"}</span>
        </button>
        {expanded.price && (
          <div className={styles.sectionBody}>
            {["Under $25", "$25 – $50", "$50 – $100", "Over $100"].map((r) => (
              <label key={r} className={styles.checkLabel}>
                <input type="checkbox" className={styles.checkbox} />
                <span>{r}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className={styles.filterSection}>
        <button className={styles.sectionHeader} onClick={() => toggle("rating")} aria-expanded={expanded.rating}>
          <span className={styles.sectionTitle}>RATING</span>
          <span>{expanded.rating ? "−" : "+"}</span>
        </button>
        {expanded.rating && (
          <div className={styles.sectionBody}>
            {[4, 3, 2, 1].map((r) => (
              <label key={r} className={styles.checkLabel}>
                <input type="checkbox" className={styles.checkbox} />
                <span>{"★".repeat(r)}{"☆".repeat(4 - r)} & up</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
