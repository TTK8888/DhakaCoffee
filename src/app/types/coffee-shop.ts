export type OperatingHours = {
  open: string;
  close: string;
  day: string;
};

export type PriceRange = "low" | "medium" | "high";

export interface CoffeeShop {
  id: string;
  name: string;
  image: string;
  rating: number;
  numberOfReviews?: number;
  location: {
    address: string;
    city: string;
    postalCode: string;
  };
  operatingHours: OperatingHours[];
  tags: string[];
  priceRange: PriceRange;
}

export interface CoffeeShopCardProps {
  shop: CoffeeShop;
}
