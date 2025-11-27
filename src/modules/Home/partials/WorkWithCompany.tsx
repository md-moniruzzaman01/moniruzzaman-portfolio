// ClientTicker.tsx - FIX: Ensuring visibility against a black background

import React from "react";

// Define the structure for a partner item
interface Partner {
  name: string;
  displayText: string;
}

interface ClientTickerProps {
  partners: Partner[];
}

const ClientTicker: React.FC<ClientTickerProps> = ({ partners }) => {
  return (
    // Re-adding bg-black for safety and consistency with your Hero Section
    <section className=" text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      {/* Container to match your Hero Section's max width */}
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title: Still bold, but centered for symmetry */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-widest uppercase mb-12 text-center">
          Trusted <span className="text-indigo-400">by</span>
        </h2>

        {/* Client Row: Flex layout with centered items */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-12 md:gap-y-8 border-t border-b border-gray-700 py-6 md:py-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center h-12 md:h-16 
                         transition-all duration-300 ease-in-out cursor-pointer"
            >
              {/* Text Fallback - FIX: Use a lighter gray for visibility, then pop to white on hover */}
              <span
                className="text-2xl md:text-3xl font-black uppercase 
                           text-gray-400 group-hover:text-white transition-colors duration-300"
              >
                {partner.displayText}
              </span>

              {/* Indigo Accent Underline on Hover */}
              {/* <span className="absolute bottom-[-10px] left-0 right-0 h-[3px] bg-indigo-400 
                               w-0 group-hover:w-full transition-all duration-500 ease-out">
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTicker;
