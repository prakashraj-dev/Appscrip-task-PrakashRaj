import { Metadata } from 'next';
import { fetchProducts, fetchCategories, Product } from '@/lib/api';
import Header from '@/components/Header/Header';
import FilterBar from '@/components/FilterBar/FilterBar';
import ProductCard from '@/components/ProductCard/ProductCard';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

/**
 * SEO Requirement (Task #6):
 * Page Title and Description for search engines.
 */
export const metadata: Metadata = {
  title: 'Discover Our Products | Appscrip Task',
  description: 'Explore our wide range of Men\'s clothing, Jewellery, and Electronics. High-quality products curated for you.',
  openGraph: {
    title: 'Shop Latest Trends | Appscrip',
    description: 'Browse our latest collection of premium products.',
  },
};

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

/**
 * Main Product Listing Page (SSR)
 * Task #3: Server Side Rendering implemented using async component.
 */
export default async function ProductListingPage({ searchParams }: PageProps) {
  // Await searchParams for Next.js 15+ compatibility
  const resolvedParams = await searchParams;
  const selectedCategory = resolvedParams.category || 'all';

  // Initialize data arrays with explicit types for TypeScript (Task #5b)
  let products: Product[] = [];
  let categories: string[] = [];

  try {
    // Parallel fetching for better performance
    const [p, c] = await Promise.all([
      fetchProducts(selectedCategory),
      fetchCategories(),
    ]);
    products = p;
    categories = c;
  } catch (error) {
    console.error("Error loading products during SSR:", error);
  }

  return (
    <div className={styles.mainContainer}>
      <Header />
      
      <main className="container">
        {/* Hero Section - Task #6c: H1 used for SEO */}
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.heroSubtitle}>
            Lorem ipsum dolor sit amet consectetur. Amet est placerat in erat 
            pellentesque nec in sed arcu.
          </p>
        </section>

        {/* Dynamic Navigation/Filter Tabs */}
        <FilterBar 
          categories={categories} 
          activeCategory={selectedCategory} 
          productCount={products.length} 
        />

        {/* Task #4: Product Grid with Responsive CSS Classes */}
        <section className={styles.gridSection}>
          {products.length > 0 ? (
            <div className={styles.productGrid}>
              {products.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  /**
                   * Performance: First 4 products load immediately (priority)
                   * to improve LCP (Largest Contentful Paint).
                   */
                  priority={index < 4} 
                />
              ))}
            </div>
          ) : (
            <div className={styles.noProducts}>
              <p>No products found in this category.</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}