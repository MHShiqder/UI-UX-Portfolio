"use client";

import React from 'react';
import { toast } from 'sonner';

interface SvgCardProps {
  title: string;
  svgContent: string;
}

const SvgCard: React.FC<SvgCardProps> = ({ title, svgContent }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(svgContent);
    toast.success('SVG content copied to clipboard!');
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([svgContent], { type: 'image/svg+xml' });
    element.href = URL.createObjectURL(file);
    element.download = `${title.toLowerCase().replace(/ /g, '-')}.svg`;
    document.body.appendChild(element); // Required for Firefox
    element.click();
    document.body.removeChild(element); // Clean up
    toast.success('SVG downloaded successfully!');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
      <div
        className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-md mb-4 flex items-center justify-center text-gray-500 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      ></div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
        >
          Copy
        </button>
        <button
          onClick={handleDownload}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default SvgCard;