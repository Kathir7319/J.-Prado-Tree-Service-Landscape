import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Globe, Menu, X, ShieldCheck, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/services', label: t.nav.services },
    { path: '/gallery', label: t.nav.gallery },
    { path: '/areas', label: t.nav.areas },
    { path: '/contact', label: t.nav.contact },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      {/* Top micro-bar for quick local credibility */}
      <div className="bg-forest-950 text-stone-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'en' ? 'Licensed & Local Tree Care' : 'Cuidado Profesional de Árboles y Jardines'}</span>
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-stone-300">
              {lang === 'en' ? 'Serving Fuquay-Varina, Holly Springs & Angier, NC' : 'Sirviendo Fuquay-Varina, Holly Springs y Angier, NC'}
            </span>
            <span className="text-stone-600">|</span>
            <a 
              href="tel:+19196719647" 
              className="font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" /> (919) 671-9647
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-forest-800 bg-forest-50 font-bold'
                      : 'text-stone-700 hover:text-forest-700 hover:bg-stone-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-200 text-xs font-semibold text-stone-700 hover:text-forest-800 hover:border-forest-600 hover:bg-forest-50 transition-all cursor-pointer shadow-xs"
              title={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-forest-700" />
              <span>{t.nav.langSwitch}</span>
              <span className="text-[10px] font-bold px-1 rounded bg-stone-100 text-stone-500 uppercase">
                {lang === 'en' ? 'ES' : 'EN'}
              </span>
            </button>

            {/* Call Button */}
            <a
              href="tel:+19196719647"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-white font-bold text-sm shadow-md shadow-forest-900/10 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>(919) 671-9647</span>
            </a>

            {/* Quick Estimate CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-extrabold text-sm shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              {lang === 'en' ? 'Free Quote' : 'Cotización'}
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleLang}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-stone-200 text-xs font-bold text-stone-800 bg-stone-50"
            >
              <Globe className="w-3.5 h-3.5 text-forest-700" />
              <span>{lang === 'en' ? 'ES' : 'EN'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-stone-700 hover:text-forest-800 hover:bg-stone-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    isActive
                      ? 'bg-forest-100 text-forest-900'
                      : 'text-stone-700 hover:bg-stone-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-200 space-y-3">
            <a
              href="tel:+19196719647"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-forest-800 text-white font-extrabold text-base shadow-md"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>{t.nav.callNow}</span>
            </a>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center w-full py-3 rounded-xl bg-amber-500 text-stone-950 font-bold text-base shadow-sm"
            >
              {lang === 'en' ? 'Get a Free Photo Estimate' : 'Pedir Presupuesto con Foto'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
