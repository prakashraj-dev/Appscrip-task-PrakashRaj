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
  { id: 1,  title: "Fjallraven - Foldsack No. 1 Backpack",                                    price: 109.95, description: "Your perfect pack for everyday use.", category: "men's clothing",   image: "https://picsum.photos/seed/bag1/400/400",     rating: { rate: 3.9, count: 120 } },
  { id: 2,  title: "Mens Casual Premium Slim Fit T-Shirts",                                    price: 22.3,   description: "Slim-fitting style, contrast raglan long sleeve.", category: "men's clothing",   image: "https://picsum.photos/seed/shirt2/400/400",  rating: { rate: 4.1, count: 259 } },
  { id: 3,  title: "Mens Cotton Jacket",                                                       price: 55.99,  description: "Great outerwear jackets for Spring/Autumn/Winter.", category: "men's clothing",   image: "https://picsum.photos/seed/jacket3/400/400", rating: { rate: 4.7, count: 500 } },
  { id: 4,  title: "Mens Casual Slim Fit Long Sleeve",                                         price: 15.99,  description: "The color could be slightly different on screen.", category: "men's clothing",   image: "https://picsum.photos/seed/slim4/400/400",   rating: { rate: 2.1, count: 430 } },
  { id: 5,  title: "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet",            price: 695,    description: "From our Legends Collection, inspired by the mythical water dragon.", category: "jewelery",         image: "https://picsum.photos/seed/brac5/400/400",   rating: { rate: 4.6, count: 400 } },
  { id: 6,  title: "Solid Gold Petite Micropave",                                              price: 168,    description: "Satisfaction Guaranteed. Return or exchange within 30 days.", category: "jewelery",         image: "https://picsum.photos/seed/gold6/400/400",   rating: { rate: 3.9, count: 70  } },
  { id: 7,  title: "White Gold Plated Princess",                                               price: 9.99,   description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring.", category: "jewelery",         image: "https://picsum.photos/seed/ring7/400/400",   rating: { rate: 3,   count: 400 } },
  { id: 8,  title: "Pierced Owl Rose Gold Plated Stainless Steel Double",                      price: 10.99,  description: "Rose Gold Plated Double Flared Tunnel Plug Earrings.", category: "jewelery",         image: "https://picsum.photos/seed/earr8/400/400",   rating: { rate: 1.9, count: 100 } },
  { id: 9,  title: "WD 2TB Elements Portable External Hard Drive",                             price: 64,     description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers.", category: "electronics",      image: "https://picsum.photos/seed/wd9/400/400",     rating: { rate: 3.3, count: 203 } },
  { id: 10, title: "SanDisk SSD PLUS 1TB Internal SSD",                                        price: 109,    description: "Easy upgrade for faster boot up, shutdown, launching apps.", category: "electronics",      image: "https://picsum.photos/seed/ssd10/400/400",   rating: { rate: 2.9, count: 470 } },
  { id: 11, title: "Silicon Power 256GB SSD",                                                  price: 109,    description: "3D NAND flash for high transfer speeds.", category: "electronics",      image: "https://picsum.photos/seed/sp11/400/400",    rating: { rate: 4.8, count: 319 } },
  { id: 12, title: "WD 4TB Gaming Drive Works with Playstation 4",                             price: 114,    description: "Expand your PS4 gaming experience.", category: "electronics",      image: "https://picsum.photos/seed/wdg12/400/400",   rating: { rate: 4.8, count: 400 } },
  { id: 13, title: "Acer SB220Q 21.5 inches Full HD IPS Monitor",                             price: 599,    description: "21.5 inches Full HD widescreen IPS display.", category: "electronics",      image: "https://picsum.photos/seed/acer13/400/400",  rating: { rate: 2.9, count: 250 } },
  { id: 14, title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",                        price: 999.99, description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR.", category: "electronics",      image: "https://picsum.photos/seed/sam14/400/400",   rating: { rate: 2.2, count: 140 } },
  { id: 15, title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket",                             price: 56.99,  description: "Note: The Jackets is US standard size.", category: "women's clothing", image: "https://picsum.photos/seed/snow15/400/400",  rating: { rate: 2.6, count: 235 } },
  { id: 16, title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",   price: 29.95,  description: "100% POLYURETHANE shell, 100% POLYESTER lining.", category: "women's clothing", image: "https://picsum.photos/seed/moto16/400/400",  rating: { rate: 2.9, count: 340 } },
  { id: 17, title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",                 price: 39.99,  description: "Lightweight perfect for trip or casual wear.", category: "women's clothing", image: "https://picsum.photos/seed/rain17/400/400",  rating: { rate: 3.8, count: 679 } },
  { id: 18, title: "MBJ Women's Solid Short Sleeve Boat Neck V",                              price: 9.85,   description: "95% RAYON 5% SPANDEX, Made in USA or Imported.", category: "women's clothing", image: "https://picsum.photos/seed/mbj18/400/400",   rating: { rate: 4.7, count: 130 } },
  { id: 19, title: "Opna Women's Short Sleeve Moisture Tunic",                                 price: 7.95,   description: "100% Polyester, Machine wash.", category: "women's clothing", image: "https://picsum.photos/seed/opna19/400/400",  rating: { rate: 4.5, count: 146 } },
  { id: 20, title: "DANVOUY Womens T Shirt Casual Cotton Short",                               price: 12.99,  description: "95% COTTON, 5% SPANDEX, Made in USA or Imported.", category: "women's clothing", image: "https://picsum.photos/seed/dan20/400/400",   rating: { rate: 3.6, count: 145 } },
];

export const MOCK_CATEGORIES = ["electronics", "jewelery", "men's clothing", "women's clothing"];

export async function fetchProducts(category?: string): Promise<Product[]> {
  if (category) return MOCK_PRODUCTS.filter(p => p.category === category);
  return MOCK_PRODUCTS;
}

export async function fetchCategories(): Promise<string[]> {
  return MOCK_CATEGORIES;
}

export function formatCategoryLabel(category: string): string {
  const map: Record<string, string> = {
    "men's clothing":   "Men's Clothing",
    "women's clothing": "Women's Clothing",
    "jewelery":         "Jewellery",
    "electronics":      "Electronics",
  };
  return map[category] ?? category.replace(/\b\w/g, c => c.toUpperCase());
}

export function generateAltText(title: string, category: string): string {
  return `${title} - ${formatCategoryLabel(category)} product image`;
}