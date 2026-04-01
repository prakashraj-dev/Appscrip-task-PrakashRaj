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
  // Men's Clothing
  { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack", price: 109.95, description: "Perfect pack for everyday use.", category: "men's clothing", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop", rating: { rate: 3.9, count: 120 } },
  { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts", price: 22.3, description: "Slim-fitting style.", category: "men's clothing", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop", rating: { rate: 4.1, count: 259 } },
  { id: 3, title: "Mens Cotton Jacket", price: 55.99, description: "Great outerwear jackets.", category: "men's clothing", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop", rating: { rate: 4.7, count: 500 } },
  { id: 4, title: "Mens Casual Slim Fit Long Sleeve", price: 15.99, description: "Casual long sleeve.", category: "men's clothing", image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop", rating: { rate: 2.1, count: 430 } },

  // Jewellery
  { id: 5, title: "Women's Legends Naga Bracelet", price: 695, description: "Dragon inspired bracelet.", category: "jewellery", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop", rating: { rate: 4.6, count: 400 } },
  { id: 6, title: "Solid Gold Petite Micropave", price: 168, description: "Satisfaction Guaranteed.", category: "jewellery", image: "https://images.unsplash.com/photo-1598560945807-1cfda9638e40?q=80&w=800&auto=format&fit=crop", rating: { rate: 3.9, count: 70 } },
  { id: 7, title: "White Gold Plated Princess", price: 9.99, description: "Solitaire Diamond Ring.", category: "jewellery", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop", rating: { rate: 3, count: 400 } },
  { id: 8, title: "Pierced Owl Rose Gold Plated", price: 10.99, description: "Double Flared Earrings.", category: "jewellery", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop", rating: { rate: 1.9, count: 100 } },

  // Electronics
  { id: 9, title: "WD 2TB Portable Hard Drive", price: 64, description: "USB 3.0 Compatibility.", category: "electronics", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=800&auto=format&fit=crop", rating: { rate: 3.3, count: 203 } },
  { id: 10, title: "SanDisk SSD PLUS 1TB", price: 109, description: "Fast boot up.", category: "electronics", image: "https://images.unsplash.com/photo-1597872200969-2b65dff8b2be?q=80&w=800&auto=format&fit=crop", rating: { rate: 2.9, count: 470 } },
  { id: 11, title: "Silicon Power 256GB SSD", price: 109, description: "3D NAND flash.", category: "electronics", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop", rating: { rate: 4.8, count: 319 } },
  { id: 12, title: "WD 4TB Gaming Drive PS4", price: 114, description: "Expand PS4 gaming.", category: "electronics", image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=800&auto=format&fit=crop", rating: { rate: 4.8, count: 400 } },
  { id: 13, title: "Acer SB220Q 21.5 Monitor", price: 599, description: "Full HD IPS.", category: "electronics", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop", rating: { rate: 2.9, count: 250 } },
  { id: 14, title: "Samsung 49-Inch Curved Monitor", price: 999.99, description: "Super Ultrawide.", category: "electronics", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop", rating: { rate: 2.2, count: 140 } },

  // Women's Clothing
  { id: 15, title: "Women's 3-in-1 Snowboard Jacket", price: 56.99, description: "Note: US standard size.", category: "women's clothing", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop", rating: { rate: 2.6, count: 235 } },
  { id: 16, title: "Women's Faux Leather Moto Jacket", price: 29.95, description: "100% Polyurethane.", category: "women's clothing", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop", rating: { rate: 2.9, count: 340 } },
  { id: 17, title: "Rain Jacket Women Windbreaker", price: 39.99, description: "Lightweight perfect for trip.", category: "women's clothing", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop", rating: { rate: 3.8, count: 679 } },
  { id: 18, title: "Women's Solid Short Sleeve V-Neck", price: 9.85, description: "95% Rayon 5% Spandex.", category: "women's clothing", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop", rating: { rate: 4.7, count: 130 } },
  { id: 19, title: "Opna Women's Short Sleeve Tunic", price: 7.95, description: "100% Polyester.", category: "women's clothing", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop", rating: { rate: 4.5, count: 146 } },
  { id: 20, title: "DANVOUY Womens T Shirt Casual", price: 12.99, description: "95% Cotton, 5% Spandex.", category: "women's clothing", image: "https://images.unsplash.com/photo-1529139572764-7ff737775040?q=80&w=800&auto=format&fit=crop", rating: { rate: 3.6, count: 145 } },
];

export const MOCK_CATEGORIES = ["electronics", "jewellery", "men's clothing", "women's clothing"];

export async function fetchProducts(category?: string): Promise<Product[]> {
  if (category && category.toLowerCase() !== 'all') {
    return MOCK_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }
  return MOCK_PRODUCTS;
}

export async function fetchCategories(): Promise<string[]> {
  return MOCK_CATEGORIES;
}

export function formatCategoryLabel(category: string): string {
  const map: Record<string, string> = {
    "men's clothing":   "Men's Clothing",
    "women's clothing": "Women's Clothing",
    "jewellery":         "Jewellery",
    "electronics":      "Electronics",
  };
  return map[category] ?? category.replace(/\b\w/g, c => c.toUpperCase());
}

// THE MISSING EXPORT:
export function generateAltText(title: string, category: string): string {
  return `${title} - ${formatCategoryLabel(category)} product image`;
}