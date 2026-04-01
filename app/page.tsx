import { fetchProducts, fetchCategories, Product } from '@/lib/api';
import Header from '@/components/Header/Header';
import FilterBar from '@/components/FilterBar/FilterBar';
import ProductCard from '@/components/ProductCard/ProductCard';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

// Define the interface for SearchParams
interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ProductListingPage({ searchParams }: PageProps) {
  // Await the searchParams (Required for Next.js 15+)
  const resolvedParams = await searchParams;
  const selectedCategory = resolvedParams.category || 'all';

  // FIX: Explicitly define types so TypeScript doesn't complain
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
    <>
      <Header />
      
      <main className={styles.mainContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
            <p className={styles.heroSubtitle}>
              Lorem ipsum dolor sit amet consectetur. Amet est placerat in erat
              pellentesque nec in sed arcu.
            </p>
          </div>
        </section>

        {/* Filter and Count Bar */}
        <section className={styles.filterSection}>
          <div className="container">
            <FilterBar 
              categories={categories} 
              activeCategory={selectedCategory} 
              productCount={products.length} 
            />
          </div>
        </section>

        {/* Product Grid */}
        <section className={styles.gridSection}>
          <div className="container">
            {products.length > 0 ? (
              <div className={styles.productGrid}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className={styles.noProducts}>
                <p>No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}