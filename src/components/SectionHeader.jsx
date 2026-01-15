// src/components/SectionHeader.js
import React from 'react';

const SectionHeader = ({ title, subtitle, centered = true }) => (
  <div id='sectionheader' className={`mb-12 ${centered ? 'text-center' : 'text-right'}`}>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
      {title}
      <span className={`block h-1.5 w-1/2 bg-gradient-to-r from-orange-500 to-orange-300 mt-3 rounded-full ${centered ? 'mx-auto' : 'md:ml-0'}`}></span>
    </h2>
    {subtitle && <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

export default SectionHeader;