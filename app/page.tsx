import { fetchProducts, fetchCategories, Product } from '@/lib/api';
import Header from '@/components/Header/Header';
import FilterBar from '@/components/FilterBar/FilterBar';
import ProductCard from '@/components/ProductCard/ProductCard';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductListingPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const selectedCategory = resolvedParams.category || 'all';

  let products: Product[] = [];
  let categories: string[] = [];

  try {
    const [p, c] = await Promise.all([
      fetchProducts(selectedCategory),
      fetchCategories(),
    ]);
    products = p;
    categories = c;
  } catch (error) {
    console.error("Error loading products:", error);
  }

  return (
    <div className={styles.mainContainer}>
      <Header />
      <main className="container">
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.heroSubtitle}>
            Lorem ipsum dolor sit amet consectetur. Amet est placerat in erat pellentesque nec in sed arcu.
          </p>
        </section>

        <FilterBar 
          categories={categories} 
          activeCategory={selectedCategory} 
          productCount={products.length} 
        />

        <div className={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}