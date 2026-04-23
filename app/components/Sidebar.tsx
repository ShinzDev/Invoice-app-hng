
import Image from 'next/image';
import { Moon } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="bg-[#373b53] lg:h-screen lg:w-24 w-full flex lg:flex-col justify-between lg:rounded-r-[20px] sticky top-0 z-50">
      <Image
        src="/logo.png" 
        alt="Logo"
        height={100}
        width={100}
        loading='eager'
      />

      {/* Bottom Section */}
      <div className="flex lg:flex-col items-center">
        <button className="p-6 lg:p-8 text-[#7e88c3] hover:text-white transition-colors">
          <Moon size={20} fill="currentColor" />
        </button>
        <div className="w-[1px] h-full lg:w-full lg:h-[1px] bg-[#494e6e]" />
        <div className="p-6 lg:p-8">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-transparent hover:border-purple-500 cursor-pointer transition-all">
            <Image 
              src="/logo.png" 
              alt="Avatar" 
              width={32} 
              height={32} 
            />
          </div>
        </div>
      </div>
    </aside>
  );
}