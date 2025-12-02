import React from 'react';
import { Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  large?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showText = true, large = false }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative flex items-center justify-center bg-white rounded-full ${large ? 'h-24 w-24 border-4 border-primary shadow-xl' : 'h-8 w-8'}`}>
         {/* Since we don't have the actual PNG asset, we use a nice Lucide icon + styling to simulate a logo */}
         <Globe className={`${large ? 'h-12 w-12 text-primary' : 'h-5 w-5 text-secondary'}`} />
         {large && (
             <div className="absolute -bottom-2 -right-2 bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                 GO
             </div>
         )}
      </div>
      {showText && !large && (
        <span className="text-xl font-extrabold tracking-tight text-white">
            Lexi<span className="text-primary">Go</span>
        </span>
      )}
    </div>
  );
};

export default Logo;