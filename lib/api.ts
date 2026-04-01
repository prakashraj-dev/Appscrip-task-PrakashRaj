export interface Product {
  id: number; title: string; price: number; description: string;
  category: string; image: string; rating: { rate: number; count: number };
}

// Reordered list so categories group naturally
export const MOCK_PRODUCTS: Product[] = [
  // Men's (IDs 1-4), Jewellery (IDs 5-8), Electronics (IDs 9-14), Women's (IDs 15-20)
  // Use the full list with Unsplash links I sent you previously here...
];

export const MOCK_CATEGORIES = ["electronics", "jewellery", "men's clothing", "women's clothing"];

export async function fetchProducts(category?: string): Promise<Product[]> {
  if (category && category.toLowerCase() !== 'all') {
    return MOCK_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  return MOCK_PRODUCTS;
}

export async function fetchCategories(): Promise<string[]> { return MOCK_CATEGORIES; }

export function formatCategoryLabel(category: string): string {
  const map: Record<string, string> = {
    "men's clothing": "Men's Clothing",
    "women's clothing": "Women's Clothing",
    "jewellery": "Jewellery",
    "electronics": "Electronics",
  };
  return map[category] || category.toUpperCase();
}

export function generateAltText(title: string, category: string): string {
  return `${title} - ${category}`;
}