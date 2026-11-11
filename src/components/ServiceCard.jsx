import React from 'react';
import { Scissors, Trees, Sparkles, Shovel, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Scissors: Scissors,
  Trees: Trees,
  Sparkles: Sparkles,
  Shovel: Shovel,
};

export default function ServiceCard({ item, featured = false }) {
  const { lang } = useLanguage();
  const IconComponent = iconMap[item.icon] || Trees;

  return (
    <div
      className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
        featured
          ? 'bg-gradient-to-br from-forest-900 to-forest-950 text-white shadow-xl ring-2 ring-forest-500/50'
          : 'bg-white text-stone-900 border border-stone-200/80 shadow-md hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      <div>
        {/* Top Header with Icon */}
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${
              featured
                ? 'bg-emerald-500 text-forest-950'
                : 'bg-forest-50 text-forest-700 ring-1 ring-forest-100'
            }`}
          >
            <IconComponent className="w-7 h-7" />
          </div>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full ${
              featured
                ? 'bg-forest-800 text-emerald-300'
                : 'bg-amber-100 text-amber-900'
            }`}
          >
            {lang === 'en' ? 'Free Estimates' : 'Presupuestos Gratis'}
          </span>
        </div>

        {/* Service Title */}
        <h3
          className={`text-xl font-extrabold tracking-tight mb-3 ${
            featured ? 'text-white' : 'text-stone-900'
          }`}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-5 ${
            featured ? 'text-stone-300' : 'text-stone-600'
          }`}
        >
          {item.description}
        </p>

        {/* Feature Highlights */}
        {item.features && (
          <ul className="space-y-2 mb-6 border-t pt-4 border-stone-100/20">
            {item.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs font-medium">
                <CheckCircle2
                  className={`w-4 h-4 shrink-0 mt-0.5 ${
                    featured ? 'text-emerald-400' : 'text-forest-600'
                  }`}
                />
                <span className={featured ? 'text-stone-200' : 'text-stone-700'}>
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-stone-100/20">
        <Link
          to={`/contact?service=${encodeURIComponent(item.title)}`}
          className={`inline-flex items-center justify-between w-full px-4 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
            featured
              ? 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md'
              : 'bg-forest-50 hover:bg-forest-100 text-forest-800'
          }`}
        >
          <span>{lang === 'en' ? 'Request This Service' : 'Solicitar Este Servicio'}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
