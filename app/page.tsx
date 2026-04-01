import { fetchProducts, fetchCategories } from '@/lib/api';
import ProductCard from '@/components/ProductCard/ProductCard';
import FilterBar from '@/components/FilterBar/FilterBar';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default async function Page({ searchParams }: { searchParams: { category?: string } }) {
  const selectedCategory = searchParams.category;
  
  const [products, categories] = await Promise.all([
    fetchProducts(selectedCategory),
    fetchCategories(),
  ]);

  return (
    <>
      <Header />
      <main className="container">
        <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
        <FilterBar 
          categories={categories} 
          activeCategory={selectedCategory} 
          productCount={products.length} 
        />
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}