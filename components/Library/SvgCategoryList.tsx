"use client";

import React from 'react';

interface SvgCategoryListProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

const SvgCategoryList: React.FC<SvgCategoryListProps> = ({
  categories,
  onSelectCategory,
  selectedCategory,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-8">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Components</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => onSelectCategory(category)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors duration-200 ${selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700'}
              `}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SvgCategoryList;