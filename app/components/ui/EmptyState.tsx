// components/EmptyState.tsx
import Image from 'next/image';

export default function EmptyState() {
  return (
    <div className="mt-20 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
      <div className="mb-10">
        {/* Replace with your local SVG path */}
        <Image 
          src="/illustration-empty.svg" 
          alt="No invoices found" 
          width={242} 
          height={200} 
          priority
        />
      </div>
      <h2 className="text-2xl font-bold mb-6 text-[#0c0e16]">
        There is nothing here
      </h2>
      <p className="text-[#888eb0] max-w-55 leading-relaxed">
        Create an invoice by clicking the <span className="font-bold">New Invoice</span> button and get started
      </p>
    </div>
  );
}