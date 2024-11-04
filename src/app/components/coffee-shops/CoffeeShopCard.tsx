"use client";

import React from "react";
import { CoffeeShopCardProps } from "@/app/types/coffee-shop";

const CoffeeShopCard = ({ shop }: CoffeeShopCardProps): JSX.Element => {
  const location = shop.locations[0];

  const renderPriceRange = (range: string) => {
    switch (range) {
      case "low":
        return <span className="text-gray-600">$</span>;

      case "medium":
        return <span className="text-gray-600">$$</span>;

      case "high":
        return <span className="text-gray-600">$$$</span>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* img section */}
      <div className="relative h-48 w-full">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full">
          {renderPriceRange(shop.price_range)}
        </div>
      </div>
      {/* content section*/}
      <div className="p-4">
        {/* name & rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{shop.name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-gray-700">{shop.rating}</span>
            {shop.number_of_reviews && (
              <span className="ml-1 text-gray-500 text-sm">
                ({shop.number_of_reviews})
              </span>
            )}
          </div>
        </div>
        {/*location*/}
        <p className="text-gray-600 text-sm mb-2">
          {location.address}, {location.city}
        </p>

        {/*tags*/}
        <div className="flex flex-wrap gap-1 mb-3">
          {shop.coffee_shop_tags.map((tag) => (
            <span
              key={tag.tags.name}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {tag.tags.name}
            </span>
          ))}
        </div>

        {/*hours*/}
        <div className="text-sm text-gray-500">
          <div className="flex justify-between">
            <span>Today: </span>
            <span>
              {shop.operating_hours[0].open} - {shop.operating_hours[0].close}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeShopCard;
