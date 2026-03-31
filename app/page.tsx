import { fetchProducts, fetchCategories } from '@/lib/api';
import Header from '@/components/Header/Header';
import FilterBar from '@/components/FilterBar/FilterBar';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

interface PageProps {
  searchParams: { category?: string; sort?: string };
}

export default async function ProductListingPage({ searchParams }: PageProps) {
  const { category, sort } = searchParams;

  const [products, categories] = await Promise.all([
    fetchProducts(category),
    fetchCategories(),
  ]);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sort) {
      case 'price-asc':  return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      case 'rating':     return b.rating.rate - a.rating.rate;
      case 'popular':    return b.rating.count - a.rating.count;
      default:           return 0;
    }
  });

  return (
    <>
      <Header />
      <main className={styles.main} id="main-content">
        <section className={styles.hero} aria-label="Page heading">
          <div className="container">
            <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
            <p className={styles.heroSubtitle}>
              Lorem ipsum dolor sit amet consectetur. Amet est placerat in erat
              pellentesque nec in sed arcu.
            </p>
          </div>
        </section>

        <FilterBar
          categories={categories}
          activeCategory={category}
          activeSort={sort}
          productCount={sortedProducts.length}
        />

        <section className={styles.productsSection} aria-label="Product listing">
          <div className="container">
            <ProductGrid products={sortedProducts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
