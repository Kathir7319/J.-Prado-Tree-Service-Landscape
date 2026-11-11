import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BeforeAfterSlider({ project }) {
  const { lang } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleClick = (e) => {
    handleMove(e.clientX);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200/80 flex flex-col group transition-all duration-300 hover:shadow-xl">
      {/* Interactive Slider Area with CSS clip-path for 100% reliable rendering */}
      <div 
        ref={containerRef}
        className="relative h-72 sm:h-80 w-full overflow-hidden select-none cursor-ew-resize bg-stone-900"
        onMouseDown={(e) => {
          setIsDragging(true);
          handleClick(e);
        }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* AFTER Image (Full background) */}
        <img
          src={project.afterImg}
          alt={`After: ${project.title}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/images/project1-after.jpg";
          }}
        />

        {/* AFTER Badge */}
        <div className="absolute top-4 right-4 z-10 bg-forest-800/90 backdrop-blur-xs text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md pointer-events-none">
          {lang === 'en' ? 'After' : 'Después'}
        </div>

        {/* BEFORE Image (Overlay with CSS clip-path: inset(0 100-pos% 0 0)) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={project.beforeImg}
            alt={`Before: ${project.title}`}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/images/project1-before.jpg";
            }}
          />
        </div>

        {/* BEFORE Badge (Clipped or pinned) */}
        <div 
          className="absolute top-4 left-4 z-10 bg-earth-900/90 backdrop-blur-xs text-amber-300 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md pointer-events-none"
          style={{ opacity: sliderPosition > 12 ? 1 : 0 }}
        >
          {lang === 'en' ? 'Before' : 'Antes'}
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Center Handle Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-forest-900 shadow-xl border-2 border-forest-600 flex items-center justify-center font-bold text-xs">
            ⇄
          </div>
        </div>

        {/* Touch/Drag hint prompt */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-3 py-1 rounded-full pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
          {lang === 'en' ? 'Drag to Compare' : 'Deslice para Comparar'}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-forest-700 bg-forest-50 px-2.5 py-1 rounded-full border border-forest-200">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-stone-500">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              {project.location}
            </span>
          </div>

          <h3 className="text-lg font-extrabold text-stone-900 leading-snug group-hover:text-forest-800 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-stone-600 mt-2 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
            ✓ {project.badge}
          </span>
          <span className="text-xs font-bold text-forest-800 hover:underline">
            {lang === 'en' ? 'Request Similar Work →' : 'Cotizar Trabajo Similar →'}
          </span>
        </div>
      </div>
    </div>
  );
}
