import React from 'react';
import '@/asstes/css/banner.css';

const BannerComponent = () => {
  const items = Array.from({ length: 10 }, (_, i) => ({
    originalPrice: '268,50 DH',
    discountedPrice: '143,20 DH',
  }));

  return (
    <div className="relative text-gray-900 dark:text-gray-100">
      {/* Auto Scrolling Banner */}
      <div className="overflow-hidden whitespace-nowrap rounded-lg shadow-lg bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800">
        <div className="inline-flex items-center space-x-8 px-6 py-2 animate-infinite-scroll">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-6 text-sm sm:text-base text-orange-700 dark:text-orange-300"
            >
              <div className="flex flex-row gap-2 items-center">
                <span className="line-through text-orange-500 dark:text-orange-400 text-xs sm:text-sm">
                  {item.originalPrice}
                </span>
                <span className="font-bold text-lg sm:text-xl text-red-600 dark:text-red-400">{item.discountedPrice}</span>
              </div>
            </div>
          ))}
          {/* Duplicate items for seamless infinite scrolling */}
          {items.map((item, i) => (
            <div
              key={`duplicate-${i}`}
              className="flex items-center gap-6 text-sm sm:text-base text-orange-700 dark:text-orange-300"
            >
              <div className="flex flex-row gap-2 items-center">
                <span className="line-through text-orange-500 dark:text-orange-400 text-xs sm:text-sm">
                  {item.originalPrice}
                </span>
                <span className="font-bold text-lg sm:text-xl text-red-600 dark:text-red-400">{item.discountedPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;