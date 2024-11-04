export type OperatingHours = {
  id: string;
  coffee_shop_id: string;
  day: string;
  open: string;
  close: string;
  created_at: string;
};

export type Location = {
  id: string;
  coffee_shop_id: string;
  address: string;
  city: string;
  postal_code: string;
  created_at: string;
};

export type CoffeeShop = {
  id: string;
  name: string;
  image: string;
  rating: number;
  number_of_reviews?: number;
  price_range: "low" | "medium" | "high";
  created_at: string;
  locations: Location[];
  operating_hours: OperatingHours[];
  coffee_shop_tags: Array<{
    tags: {
      name: string;
    };
  }>;
};

export interface CoffeeShopCardProps {
  shop: CoffeeShop;
}
