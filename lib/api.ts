export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export const MOCK_PRODUCTS: Product[] = [
  // MEN'S CLOTHING
  { id: 1, title: "Fjallraven Backpack", price: 109.95, description: "Backpack", category: "men's clothing", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800", rating: { rate: 3.9, count: 120 } },
  { id: 2, title: "Mens Casual T-Shirt", price: 22.3, description: "T-shirt", category: "men's clothing", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800", rating: { rate: 4.1, count: 259 } },
  { id: 3, title: "Mens Cotton Jacket", price: 55.99, description: "Jacket", category: "men's clothing", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800", rating: { rate: 4.7, count: 500 } },
  { id: 4, title: "Mens Slim Fit Long Sleeve", price: 15.99, description: "Shirt", category: "men's clothing", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800", rating: { rate: 2.1, count: 430 } },
  
  // JEWELLERY
  { id: 5, title: "Naga Dragon Bracelet", price: 695, description: "Bracelet", category: "jewellery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800", rating: { rate: 4.6, count: 400 } },
  { id: 6, title: "Solid Gold Petite Ring", price: 168, description: "Ring", category: "jewellery", image: "https://images.unsplash.com/photo-1598560945807-1cfda9638e40?q=80&w=800", rating: { rate: 3.9, count: 70 } },
  { id: 7, title: "White Gold Princess Ring", price: 9.99, description: "Ring", category: "jewellery", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800", rating: { rate: 3, count: 400 } },
  { id: 8, title: "Rose Gold Earrings", price: 10.99, description: "Earrings", category: "jewellery", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800", rating: { rate: 1.9, count: 100 } },

  // ELECTRONICS
  { id: 9, title: "WD 2TB Hard Drive", price: 64, description: "Storage", category: "electronics", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=800", rating: { rate: 3.3, count: 203 } },
  { id: 10, title: "SanDisk SSD 1TB", price: 109, description: "Storage", category: "electronics", image: "https://images.unsplash.com/photo-1597872200969-2b65dff8b2be?q=80&w=800", rating: { rate: 2.9, count: 470 } },
  { id: 13, title: "Acer 21.5 Monitor", price: 599, description: "Monitor", category: "electronics", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800", rating: { rate: 2.9, count: 250 } },
  { id: 14, title: "Samsung 49-Inch Monitor", price: 999.99, description: "Monitor", category: "electronics", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800", rating: { rate: 2.2, count: 140 } },

  // WOMEN'S CLOTHING
  { id: 18, title: "Women's Boat Neck T-shirt", price: 9.85, description: "T-shirt", category: "women's clothing", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800", rating: { rate: 4.7, count: 130 } },
  { id: 19, title: "Opna Women's Tunic", price: 7.95, description: "Tunic", category: "women's clothing", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800", rating: { rate: 4.5, count: 146 } },
  { id: 20, title: "Casual Cotton T Shirt", price: 12.99, description: "T-shirt", category: "women's clothing", image: "https://images.unsplash.com/photo-1529139572764-7ff737775040?q=80&w=800", rating: { rate: 3.6, count: 145 } },
];

export const MOCK_CATEGORIES = ["electronics", "jewellery", "men's clothing", "women's clothing"];

export async function fetchProducts(category?: string): Promise<Product[]> {
  if (!category || category === 'all') return MOCK_PRODUCTS;
  return MOCK_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export async function fetchCategories(): Promise<string[]> {
  return MOCK_CATEGORIES;
}

export function formatCategoryLabel(category: string): string {
  const map: Record<string, string> = {
    "men's clothing": "Men's Clothing",
    "women's clothing": "Women's Clothing",
    "jewellery": "Jewellery",
    "electronics": "Electronics",
  };
  return map[category] || category;
}

export function generateAltText(title: string, category: string): string {
  return `${title} - ${category} product image`;
}