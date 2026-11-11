import React, { useState } from 'react';
import { Sparkles, MapPin, Camera, Phone, CheckCircle, Sliders } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function GalleryPage() {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: lang === 'en' ? 'All Projects' : 'Todos los Proyectos' },
    { id: 'Tree Trimming', label: lang === 'en' ? 'Tree Trimming' : 'Poda de Árboles' },
    { id: 'Brush Removal', label: lang === 'en' ? 'Brush Clearing' : 'Limpieza de Maleza' },
    { id: 'Storm Cleanup', label: lang === 'en' ? 'Storm Cleanup' : 'Tormenta / Emergencia' },
  ];

  // Extended project showcase
  const allProjects = [
    ...t.gallerySection.projects,
    {
      id: 4,
      title: lang === 'en' ? "Dead Pine Hazard Removal" : "Derribo de Pino Seco Peligroso",
      location: "Fuquay-Varina, NC",
      category: "Tree Trimming",
      description: lang === 'en' 
        ? "Safely rigged and dismantled a 60-foot rotting pine tree leaning precariously over neighbor's fence line. Zero damage to surrounding flowerbeds."
        : "Desmontaje seguro de pino seco de 18 metros con riesgo inminente de caer sobre la cerca vecina. Sin daños al entorno.",
      beforeImg: "/images/project4-before.jpg",
      afterImg: "/images/project4-after.jpg",
      badge: lang === 'en' ? "Zero Property Impact" : "Cero Daños"
    },
    {
      id: 5,
      title: lang === 'en' ? "Full Perimeter Lot Clearing" : "Limpieza Perimetral de Parcela",
      location: "Holly Springs, NC",
      category: "Brush Removal",
      description: lang === 'en'
        ? "Reclaimed overgrown woodland boundary behind a new construction subdivision lot. Removed dense briars, wild honeysuckle, and aged stumps."
        : "Recuperación de lindero boscoso invadido por zarzas espinosas, enredaderas y tocones secos tras nueva urbanización.",
      beforeImg: "/images/project5-before.jpg",
      afterImg: "/images/project5-after.jpg",
      badge: lang === 'en' ? "Boundary Restored" : "Límite Recuperado"
    },
    {
      id: 6,
      title: lang === 'en' ? "Heavy Oak Branch Elevation" : "Poda y Elevación de Rama de Roble",
      location: "Angier, NC",
      category: "Storm Cleanup",
      description: lang === 'en'
        ? "Raised the lower oak canopy over garage driveway to allow delivery trucks and RV parking without scraping branches."
        : "Elevación de ramas de roble sobre la entrada vehicular para permitir el paso de camionetas y casa rodante sin rozar.",
      beforeImg: "/images/project6-before.jpg",
      afterImg: "/images/project6-after.jpg",
      badge: lang === 'en' ? "Height Clearance Done" : "Despeje Completado"
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full">
          {lang === 'en' ? 'Visual Project Proof' : 'Evidencia Real de Proyectos'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mt-4">
          {t.gallerySection.heading}
        </h1>
        <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed">
          {t.gallerySection.subheading}
        </p>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-forest-800 text-white shadow-md'
                  : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <BeforeAfterSlider key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-forest-950 to-forest-900 text-white shadow-2xl border-2 border-forest-800 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center sm:text-left">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
              {lang === 'en' ? 'Ready For Your Transformation?' : '¿Listo para Transformar su Jardín?'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t.gallerySection.ctaPrompt}
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-md">
              {lang === 'en'
                ? 'Upload photos directly via our form or text them to (919) 671-9647 for a rapid estimate.'
                : 'Suba fotos directamente por el formulario o envíelas por texto al (919) 671-9647 para una cotización rápida.'}
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm text-center shadow-lg transition-transform active:scale-95"
            >
              {lang === 'en' ? 'Get a Free Photo Estimate' : 'Pedir Presupuesto con Foto'}
            </Link>
            <a
              href="tel:+19196719647"
              className="px-8 py-3.5 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-bold text-sm text-center border border-forest-600 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>(919) 671-9647</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
