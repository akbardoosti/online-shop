// components/SlideOver.tsx
'use client';

import React from 'react';

interface SlideOverProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuSlide: React.FC<SlideOverProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 overflow-hidden z-50 ${isOpen ? 'block transition-opacity' : 'hidden'}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" onClick={onClose}>
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
        </div>
        <div className="fixed inset-y-0 right-0 max-w-full flex">
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div className="flex-1 py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">Slide-Over Content</h2>
                  <button onClick={onClose} className="rounded-md p-1 text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <span className="sr-only">Close panel</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-1">
                  <p className="text-sm text-gray-500">This is the content of the slide-over.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSlide;
