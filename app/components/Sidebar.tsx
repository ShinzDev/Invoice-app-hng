import Image from 'next/image';
import { Moon } from 'lucide-react'; 
export default function Sidebar() {
  return (
    <section className="flex h-screen w-20 flex-col justify-between bg-[#373b53] py-6">
     
      <div className="relative flex items-center justify-center">
        {/* The purple background container */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-r-3xl bg-[#7c5dfa]">
          {/* Logo Placeholder (using a div for the white icon) */}
          <Image
            src="/logo.png" // Replace with your image path
            alt="Profile"
            height={100}
            width={100}
            className="object-cover"
          />
          
          {/* Lower shaded part of the logo background */}
        </div>
      </div>

      {/* Bottom Section: Theme Toggle & Profile */}
      <div className="flex flex-col items-center">
        {/* Dark Mode Toggle */}
        <button className="mb-6 text-[#7e88c3] hover:text-white transition-colors">
          <Moon size={20} fill="currentColor" />
        </button>

        {/* Divider */}
        <div className="h-px w-full bg-[#494e6e] mb-6" />

        {/* Profile Avatar */}
        <div className="mb-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-transparent hover:border-[#7c5dfa] transition-all">
            {/*<Image
              src="/logo.png" // Replace with your image path
              alt="Profile"
              fill
              className="object-cover"
            />*/}
          </div>
        </div>
      </div>
    </section>
  );
}