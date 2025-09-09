"use client";

import React,{useState,useEffect } from 'react';
import axios from 'axios';
import SvgCard from '../../components/Library/SvgCard';
import { Toaster } from 'sonner';
import SvgCategoryList from '../../components/Library/SvgCategoryList';

export default function LibraryPage() {
  const demoSvgs = [
    {
      title: 'Header 1',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M4 6h16M4 18h16"/></svg>',
    },
    {
      title: 'Hero Section 1',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    },
    {
      title: 'Button Component',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
    },
    {
      title: 'Card Component',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
    },
    {
      title: 'Header 2',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12h12M6 6h12M6 18h12"/></svg>',
    },
    {
      title: 'Hero Section 2',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    },
    {
      title: 'Button Primary',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><path d="M12 10v10"/><path d="M16 14h-8"/></svg>',
    },
    {
      title: 'Card with Image',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><path d="M2 12h20"/><path d="M12 2v20"/></svg>',
    },
    {
      title: 'Header with Logo',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    },
    {
      title: 'Hero Section with Call to Action',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="M12 15l5 5-5 5"/><path d="M12 15V9"/></svg>',
    },
    {
      title: 'Button Secondary',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>',
    },
    {
      title: 'Card with Text',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M8 7h8"/><path d="M8 12h8"/><path d="M8 17h8"/></svg>',
    },
    {
      title: 'Simple Form',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
    },
    {
      title: 'Contact Form',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10.92A2 2 0 0 0 4 19h.92L10 22l5.08-3H20a2 2 0 0 0 2-2.08z"/><line x1="12" y1="8" x2="12" y2="8"/><line x1="12" y1="12" x2="12" y2="12"/></svg>',
    },
    {
      title: 'Basic Footer',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="18" x2="16" y2="18"/></svg>',
    },
    {
      title: 'Footer with Social Links',
      svgContent: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><path d="M12 18h.01"/><path d="M16 18h.01"/><path d="M8 18h.01"/><path d="M6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M18 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>',
    },
  ];

  // const categories = ['All', 'Headers', 'Hero Sections', 'Buttons', 'Cards', 'Forms', 'Footers'];
    const [categories, setCategories] = useState<{ id: string; name: string }[]>([{ id: 'all', name: 'All' }]);
  
    useEffect(() => {
      // Define an async function inside useEffect
      const fetchCategories = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:8000/categories/');
          setCategories([{ id: 'all', name: 'All' }, ...response.data]);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching categories:', error);
          setCategories([{ id: 'all', name: 'All' }]);
           // fallback to empty array on error
        }
      };
  
      fetchCategories(); // call the async function
    }, []);  // empty dependency array = run once on mount
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredSvgs = selectedCategory === 'all'
    ? demoSvgs
    : demoSvgs.filter(svg => {
        const categoryName = categories.find(cat => cat.id === selectedCategory)?.name;
        return categoryName ? svg.title.toLowerCase().includes(categoryName.toLowerCase()) : false;
      });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 pt-25">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Column: Components */}
        <div className="lg:w-1/4">
          <SvgCategoryList
            categories={categories}
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>

        {/* Right Column: SVG Grid */}
        <div className="lg:w-3/4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">UI Components Library</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSvgs.map((svg, index) => (
              <SvgCard key={index} title={svg.title} svgContent={svg.svgContent} />
            ))}
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}