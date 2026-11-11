import React from 'react';
import { Phone, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function StickyMobileBar() {
  const { lang, t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-2 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-2 gap-2">
        {/* Direct Call Button */}
        <a
          href="tel:+19196719647"
          className="flex items-center justify-center gap-2 py-3 px-2 rounded-xl bg-forest-800 text-white font-extrabold text-sm active:scale-95 transition-transform shadow-md"
        >
          <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="truncate">
            {lang === 'en' ? 'Call (919) 671-9647' : 'Llamar (919) 671-9647'}
          </span>
        </a>

        {/* Free Photo Estimate Button */}
        <Link
          to="/contact"
          className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-amber-500 text-stone-950 font-extrabold text-sm active:scale-95 transition-transform shadow-md"
        >
          <Camera className="w-4 h-4 text-stone-900 shrink-0" />
          <span className="truncate">
            {lang === 'en' ? 'Photo Estimate' : 'Cotizar con Foto'}
          </span>
        </Link>
      </div>
    </div>
  );
}
