"use client";

import React from 'react';
import { toast } from 'sonner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faDownload } from '@fortawesome/free-solid-svg-icons';

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
    <div className="relative group bg-white/10 dark:bg-gray-800/10 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 overflow-hidden backdrop-filter backdrop-blur-sm">
      <div
        className="w-full h-32 bg-gray-200/20 dark:bg-gray-700/20 rounded-md mb-4 flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:scale-105 transition-transform duration-300"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      ></div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 text-center">{title}</h3>
      <div className="absolute bottom-0 left-0 right-0 bg-white/20 dark:bg-gray-900/20 p-2 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handleCopy}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 text-2xl"
          aria-label="Copy SVG"
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
        <button
          onClick={handleDownload}
          className="text-gray-700 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200 text-2xl"
          aria-label="Download SVG"
        >
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </div>
    </div>
  );
};

export default SvgCard;