'use client';

import { useState } from "react";
import Sidebar from ".//components/Sidebar";
import InvoiceItem from ".//components/InvoiceItem";
import { INVOICES, InvoiceStatus } from "@/lib/invoice-data";
import { ChevronDown } from "lucide-react";

export default function InvoicesPage() {
  const [filter, setFilter] = useState<InvoiceStatus | 'all'>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter logic
  const filteredInvoices = filter === 'all' 
    ? INVOICES 
    : INVOICES.filter(inv => inv.status === filter);

  return (
    <div className="min-h-screen bg-[#f8f8fb] flex flex-col lg:flex-row font-sans">
      <Sidebar />
      
      <main className="flex-1 lg:py-16 py-8 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div>
              <h1 className="text-3xl font-bold text-[#0c0e16] tracking-tight">Invoices</h1>
              <p className="text-[#888eb0] text-sm">
                {filteredInvoices.length === 0 
                  ? "No invoices" 
                  : `There are ${filteredInvoices.length} total invoices`}
              </p>
            </div>
            
            <div className="flex items-center gap-6 lg:gap-10">
              {/* Custom Dropdown Filter */}
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-3 font-bold text-[#0c0e16] hover:opacity-70 transition-opacity"
                >
                  Filter <span className="hidden md:inline">by status</span>
                  <ChevronDown className={`text-[#7c5dfa] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} size={18} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-40 bg-white shadow-xl rounded-lg p-4 z-20 flex flex-col gap-3">
                    {['all', 'draft', 'pending', 'paid'].map((status) => (
                      <label key={status} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={filter === status}
                          onChange={() => {
                            setFilter(status as any);
                            setIsDropdownOpen(false);
                          }}
                          className="accent-[#7c5dfa] w-4 h-4 rounded cursor-pointer"
                        />
                        <span className="capitalize font-bold text-[#0c0e16] text-sm group-hover:text-[#7c5dfa]">
                          {status}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              
              {/* New Invoice Button */}
              <button className="bg-[#7c5dfa] hover:bg-[#9277ff] text-white p-2 pr-4 rounded-full flex items-center gap-4 font-bold transition-all shadow-md active:scale-95">
                <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                  <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero"/></svg>
                </span>
                New <span className="hidden sm:inline">Invoice</span>
              </button>
            </div>
          </header>

          {/* List Section */}
          <div className="space-y-4">
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((invoice) => (
                <InvoiceItem key={invoice.id} {...invoice} />
              ))
            ) : (
              <div className="mt-20 flex flex-col items-center text-center">
                <div className="mb-8">☁️</div>
                <h2 className="text-xl font-bold mb-2">There is nothing here</h2>
                <p className="text-[#888eb0] max-w-50">Create an invoice by clicking the New Invoice button.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}