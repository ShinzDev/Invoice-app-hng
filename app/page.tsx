// app/page.tsx
import Sidebar from ".//components/Sidebar";
import InvoiceItem from ".//components/InvoiceItem";
import { INVOICES } from "@/lib/invoice-data";

export default function InvoicesPage() {
  return (
    <div className="min-h-screen bg-[#f8f8fb] flex flex-col lg:flex-row font-sans">
      <Sidebar />
      
      <main className="flex-1 lg:py-16 py-8 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="flex justify-between items-center mb-16">
            <div>
              <h1 className="text-3xl font-bold text-[#0c0e16] tracking-tight">Invoices</h1>
              <p className="text-[#888eb0] text-sm">There are {INVOICES.length} total invoices</p>
            </div>
            
            <div className="flex items-center gap-6 lg:gap-10">
              <button className="font-bold text-[#0c0e16] text-sm flex items-center gap-3">
                Filter by status <span className="text-[#7c5dfa] font-bold text-xl">▾</span>
              </button>
              
              <button className="bg-[#7c5dfa] hover:bg-[#9277ff] text-white p-2 pr-4 rounded-full flex items-center gap-4 font-bold transition-all shadow-md active:scale-95">
                <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                  <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero"/></svg>
                </span>
                New <span className="hidden sm:inline">Invoice</span>
              </button>
            </div>
          </header>

          {/* List */}
          <div className="space-y-4">
            {INVOICES.map((invoice) => (
              <InvoiceItem key={invoice.id} {...invoice} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}