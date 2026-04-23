
import Image from 'next/image';
import { Moon } from 'lucide-react';



export default function Sidebar() {
  return (
    <aside className="bg-[#373b53] lg:w-20 w-full h-20 lg:h-screen flex lg:flex-col justify-between lg:rounded-r-3xl shrink-0 z-50">
      <Image
        src="/logo.png" 
        alt="Logo"
        height={100}
        width={100}
        loading='eager'
      />
     

      {/* User Actions */}
      <div className="flex lg:flex-col items-center">
        <button className="p-6 lg:p-8 text-[#7e88c3] hover:text-white transition-colors">
          <Moon size={20} fill="currentColor" />
        </button>
        <div className="w-[1px] h-full lg:h-[1px] lg:w-full bg-[#494e6e]" />
        <div className="p-6">
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-purple-400 bg-slate-300" />
        </div>
      </div>
    </aside>
  );
}