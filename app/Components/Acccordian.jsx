'use client'
import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      // Collapse the currently expanded section if it's clicked again
      setExpandedIndex(null);
    } else {
      // Expand the clicked section
      setExpandedIndex(index);
    }
  };

  return (
    <div className='py-14 space-y-10' id='faq'>
<div className='text-center space-y-5'>
            <h1 className='text-4xl font-medium text-purple-500'>FAQ</h1>
            <p>Some answers to questions asked frequntly.</p>
        </div>
   
    <div className="w-full px-14 ">
      {items.map((item, index) => (
        <div key={index} className="border rounded my-2">
          <div
            className="p-3 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <div className="font-bold text-purple-500">{item.title}</div>
              <div className="text-xs text-purple-500">
                {expandedIndex === index ? '▲' : '▼'}
              </div>
            </div>
          </div>
          {expandedIndex === index && (
            <div className="p-3 border-t">{item.content}</div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Accordion;
