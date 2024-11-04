import { CoffeeShop } from "../types/coffee-shop";

export const mockCoffeeShops: CoffeeShop[] = [
  {
    id: "1",
    name: "North End",
    image: "/images/north_end_borak_mehnur.jpg", // Using placeholder for now
    rating: 4.8,
    numberOfReviews: 128,
    location: {
      address: "123 Science Street",
      city: "Seattle",
      postalCode: "98101",
    },
    operatingHours: [
      { day: "Monday", open: "07:00", close: "20:00" },
      { day: "Tuesday", open: "07:00", close: "20:00" },
      { day: "Wednesday", open: "07:00", close: "20:00" },
      { day: "Thursday", open: "07:00", close: "20:00" },
      { day: "Friday", open: "07:00", close: "22:00" },
      { day: "Saturday", open: "08:00", close: "22:00" },
      { day: "Sunday", open: "08:00", close: "20:00" },
    ],
    tags: ["Specialty Coffee", "Study-friendly", "WiFi"],
    priceRange: "medium",
  },
  {
    id: "2",
    name: "Cozy Corner Café",
    image: "/api/placeholder/400/300",
    rating: 4.5,
    numberOfReviews: 89,
    location: {
      address: "456 Comfort Lane",
      city: "Seattle",
      postalCode: "98102",
    },
    operatingHours: [
      { day: "Monday", open: "08:00", close: "19:00" },
      { day: "Tuesday", open: "08:00", close: "19:00" },
      { day: "Wednesday", open: "08:00", close: "19:00" },
      { day: "Thursday", open: "08:00", close: "19:00" },
      { day: "Friday", open: "08:00", close: "20:00" },
      { day: "Saturday", open: "09:00", close: "20:00" },
      { day: "Sunday", open: "09:00", close: "18:00" },
    ],
    tags: ["Cozy", "Pastries", "Quiet"],
    priceRange: "low",
  },
  {
    id: "3",
    name: "Urban Beans",
    image: "/api/placeholder/400/300",
    rating: 4.9,
    numberOfReviews: 217,
    location: {
      address: "789 Downtown Ave",
      city: "Seattle",
      postalCode: "98104",
    },
    operatingHours: [
      { day: "Monday", open: "06:00", close: "21:00" },
      { day: "Tuesday", open: "06:00", close: "21:00" },
      { day: "Wednesday", open: "06:00", close: "21:00" },
      { day: "Thursday", open: "06:00", close: "21:00" },
      { day: "Friday", open: "06:00", close: "23:00" },
      { day: "Saturday", open: "07:00", close: "23:00" },
      { day: "Sunday", open: "07:00", close: "21:00" },
    ],
    tags: ["Modern", "Breakfast", "Power Outlets"],
    priceRange: "high",
  },
];
