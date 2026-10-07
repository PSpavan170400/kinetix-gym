import React, { useState } from 'react';
import { Dumbbell, Activity, Shield } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: 'gym' | 'coach' | 'recovery' | 'boxing' | 'facility';
  containerClassName?: string;
  overlayGradient?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Kinetix Performance',
  className = '',
  containerClassName = '',
  fallbackCategory = 'gym',
  overlayGradient = false,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      ) : (
        <div className="w-full h-full min-h-[160px] bg-gradient-to-br from-[#161616] via-[#101010] to-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#c6ff00] mb-3">
            {fallbackCategory === 'coach' ? (
              <Shield className="w-6 h-6 stroke-[1.5]" />
            ) : fallbackCategory === 'recovery' ? (
              <Activity className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Dumbbell className="w-6 h-6 stroke-[1.5]" />
            )}
          </div>
          <p className="text-xs uppercase tracking-widest text-[#f2f0ea]/70 font-mono font-medium">
            {alt || 'KINETIX PERFORMANCE'}
          </p>
          <span className="text-[10px] text-[#a3a19b]/50 tracking-wider mt-1 uppercase">
            Performance Environment
          </span>
        </div>
      )}

      {/* Optional measured scrim overlay for text contrast */}
      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent pointer-events-none" />
      )}
    </div>
  );
};
