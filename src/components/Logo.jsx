import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'horizontal', light = false, className = '' }) {
  if (variant === 'iconOnly') {
    return (
      <Link to="/" className={`inline-flex items-center gap-2 group ${className}`}>
        <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-forest-800 to-forest-950 overflow-hidden shadow-md ring-2 ring-amber-500/30 group-hover:ring-amber-400 transition-all">
          <img 
            src="/j_prado_logo.jpg" 
            alt="J. Prado Tree Service & Landscape" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/logo-icon.svg";
            }}
          />
        </div>
      </Link>
    );
  }

  if (variant === 'stacked') {
    return (
      <Link to="/" className={`flex flex-col items-center text-center group ${className}`}>
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-forest-900 to-forest-950 p-2 shadow-xl ring-4 ring-amber-500/20 group-hover:scale-105 transition-transform duration-300">
          <img 
            src="/j_prado_logo.jpg" 
            alt="J. Prado Tree Service Logo" 
            className="w-full h-full object-contain rounded-xl"
            onError={(e) => {
              e.currentTarget.src = "/logo-icon.svg";
            }}
          />
        </div>
        <div className="mt-3">
          <span className={`block font-extrabold text-2xl tracking-tight leading-none ${light ? 'text-white' : 'text-forest-950'}`}>
            J. PRADO
          </span>
          <span className="block text-xs font-bold text-amber-600 tracking-[0.22em] uppercase mt-1">
            TREE SERVICE &amp; LANDSCAPE
          </span>
          <span className={`block text-[11px] font-medium tracking-wide mt-1 ${light ? 'text-stone-300' : 'text-stone-500'}`}>
            Fuquay-Varina, NC
          </span>
        </div>
      </Link>
    );
  }

  // Default horizontal layout
  return (
    <Link to="/" className={`inline-flex items-center gap-3.5 group ${className}`}>
      {/* Emblem Badge */}
      <div className="relative flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-forest-800 to-forest-950 overflow-hidden shadow-md ring-2 ring-amber-500/30 group-hover:ring-amber-400 transition-all flex items-center justify-center">
        <img 
          src="/j_prado_logo.jpg" 
          alt="J. Prado Tree Service" 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = "/logo-icon.svg";
          }}
        />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className={`font-extrabold text-lg sm:text-xl tracking-tight leading-none ${light ? 'text-white' : 'text-forest-950'}`}>
            J. PRADO
          </span>
          <span className="hidden xs:inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-700 border border-amber-500/30">
            NC
          </span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-bold text-amber-600 tracking-[0.16em] uppercase mt-1 leading-none">
          TREE SERVICE &amp; LANDSCAPE
        </span>
        <span className={`text-[9.5px] font-medium mt-0.5 leading-none ${light ? 'text-stone-300' : 'text-stone-500'}`}>
          Fuquay-Varina • Holly Springs • Angier
        </span>
      </div>
    </Link>
  );
}
