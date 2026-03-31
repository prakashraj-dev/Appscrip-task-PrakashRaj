export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export async function fetchProducts(category?: string): Promise<Product[]> {
  const url = category
    ? `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`
    : 'https://fakestoreapi.com/products';

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
  return res.json();
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch('https://fakestoreapi.com/products/categories', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`Failed to fetch categories: ${res.status}`);
  return res.json();
}

export function formatCategoryLabel(category: string): string {
  const map: Record<string, string> = {
    "men's clothing": "Men's Clothing",
    "women's clothing": "Women's Clothing",
    jewelery: 'Jewellery',
    electronics: 'Electronics',
  };
  return map[category] ?? category.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function generateAltText(title: string, category: string): string {
  return `${title} - ${formatCategoryLabel(category)} product image`;
}
