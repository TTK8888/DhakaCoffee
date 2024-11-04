import { supabase } from "./supabase";
import { CoffeeShop } from "../types/coffee-shop";

export async function getAllCoffeeShops() {
  const { data: coffeeShops, error } = await supabase.from("coffee_shops")
    .select(`
      *,
      locations (*),
      operating_hours (*),
      coffee_shop_tags (
        tags (
          name
        )
      )
    `);

  if (error) {
    console.error("Error fetching coffee shops:", error);
    return [];
  }

  // Add this to see the exact data structure
  console.log(
    "Detailed coffee shops data:",
    JSON.stringify(coffeeShops, null, 2)
  );

  return coffeeShops as CoffeeShop[];
}
