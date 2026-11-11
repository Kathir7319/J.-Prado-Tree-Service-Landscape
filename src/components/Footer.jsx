import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Footer() {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-950 text-stone-300 pt-16 pb-24 sm:pb-16 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-forest-900/80">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Logo light={true} />
            <p className="text-xs text-stone-400 leading-relaxed pt-2">
              {lang === 'en'
                ? 'Safe, professional tree removal, precision pruning, and complete yard cleanup serving Fuquay-Varina, Holly Springs, and Angier, NC.'
                : 'Remoción segura de árboles, poda profesional y limpieza integral de terrenos sirviendo a Fuquay-Varina, Holly Springs y Angier, NC.'}
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900 text-emerald-400 text-xs font-semibold border border-forest-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                {lang === 'en' ? 'Free Photo & On-Site Estimates' : 'Presupuestos Gratis en Persona o Foto'}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors">
                  {t.nav.gallery}
                </Link>
              </li>
              <li>
                <Link to="/areas" className="hover:text-emerald-400 transition-colors">
                  {t.nav.areas}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Hours */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              {lang === 'en' ? 'Direct Contact' : 'Contacto Directo'}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 block text-[11px]">{t.footer.phoneAction}</span>
                  <a
                    href="tel:+19196719647"
                    className="font-extrabold text-white text-sm hover:text-amber-400 transition-colors"
                  >
                    (919) 671-9647
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 block text-[11px]">{lang === 'en' ? 'Service Base' : 'Base de Operaciones'}</span>
                  <span className="font-semibold text-stone-200">Fuquay-Varina, NC 27526</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-400 block text-[11px]">{t.footer.hoursLabel}</span>
                  <span className="font-semibold text-stone-200">{t.footer.hours}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas Pill Badges */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
              {lang === 'en' ? 'Target Service Areas' : 'Áreas de Cobertura'}
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-lg bg-forest-900/90 text-stone-200 border border-forest-800 font-semibold">
                Fuquay-Varina, NC
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-forest-900/90 text-stone-200 border border-forest-800 font-semibold">
                Holly Springs, NC
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-forest-900/90 text-stone-200 border border-forest-800 font-semibold">
                Angier, NC
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-forest-900/90 text-stone-200 border border-forest-800 font-semibold">
                Willow Spring, NC
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-forest-900/90 text-stone-200 border border-forest-800 font-semibold">
                Wake &amp; Harnett Counties
              </span>
            </div>

            <div className="mt-5 p-3.5 rounded-xl bg-forest-900/50 border border-forest-800 text-xs">
              <span className="text-amber-400 font-bold block mb-1">
                {t.footer.languages}
              </span>
              <span className="text-stone-400 text-[11px]">
                {lang === 'en' 
                  ? 'We communicate clearly in both languages to serve all homeowners seamlessly.'
                  : 'Hablamos inglés y español para atenderlo con la mayor claridad y respeto.'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>{t.footer.copyright}</div>

          <div className="flex items-center gap-4">
            <span className="text-stone-400 text-xs">
              {lang === 'en' ? 'Designed for High Performance & Mobile UX' : 'Diseñado para Alto Rendimiento y Móvil'}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-forest-900 hover:bg-forest-800 text-stone-300 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
