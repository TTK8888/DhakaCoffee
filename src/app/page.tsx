import Image from "next/image";
import { getAllCoffeeShops } from "./lib/queries";
import CoffeeShopCard from "./components/coffee-shops/CoffeeShopCard";
import { CoffeeShop } from "./types/coffee-shop";

export default async function Home() {
  const coffeeShops = await getAllCoffeeShops();

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* hero section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover the perfect coffee spot.
          </h1>
          <p className="text-xl text-gray-600">
            Explore the best coffee shops in Dhaka
          </p>
        </div>

        {/* coffee shops grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffeeShops.map((shop: CoffeeShop) => (
            <CoffeeShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </div>
    </main>
  );
}
