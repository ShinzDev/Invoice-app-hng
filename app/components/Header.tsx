// components/Header.tsx
'use client';

import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

interface HeaderProps {
  count: number;
}

export default function Header({ count }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-[#f8f8fb]">
      {/* Title Section */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#0c0e16] tracking-tight">
          Invoices
        </h1>
        <p className="text-[#888eb0] text-sm mt-1">
          {count === 0 ? (
            "No invoices"
          ) : (
            <>
              <span className="hidden md:inline">There are </span>
              {count} <span className="hidden md:inline">total </span> invoices
            </>
          )}
        </p>
      </div>

      <div className="flex items-center gap-4 md:gap-10">
        {/* Filter Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-3 font-bold text-[#0c0e16] text-sm md:text-base hover:opacity-60 transition-opacity"
          >
            Filter <span className="hidden md:inline">by status</span>
            <ChevronDown 
              className={`text-[#7c5dfa] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              size={18} 
            />
          </button>

          {isOpen && (
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-40 bg-white shadow-2xl rounded-lg p-6 z-30 flex flex-col gap-4">
              {['Draft', 'Pending', 'Paid'].map((status) => (
                <label key={status} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      className="peer appearance-none w-4 h-4 bg-[#dfe3fa] border-transparent rounded-[2px] checked:bg-[#7c5dfa] cursor-pointer transition-colors"
                    />
                    <svg className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none left-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-[#0c0e16] text-sm group-hover:text-[#7c5dfa] transition-colors">
                    {status}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* New Invoice Button */}
        <button className="bg-[#7c5dfa] hover:bg-[#9277ff] text-white p-1.5 md:p-2 pr-3 md:pr-6 rounded-full flex items-center gap-2 md:gap-4 font-bold transition-all shadow-lg active:scale-95">
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
            <Plus className="text-[#7c5dfa]" size={20} strokeWidth={4} />
          </div>
          <span className="text-sm md:text-base">
            New <span className="hidden md:inline">Invoice</span>
          </span>
        </button>
      </div>
    </header>
  );
}