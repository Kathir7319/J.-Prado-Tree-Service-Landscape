import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Camera, CheckCircle2, ShieldCheck, ArrowRight, MapPin, Sparkles, Star, Award, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import EstimateForm from '../components/EstimateForm';

export default function Home() {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950 text-white pt-12 pb-24 lg:pt-20 lg:pb-32">
        {/* Real forestry background photo with subtle dark blend */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/hero-tree.jpg"
            alt="North Carolina Forest"
            className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-950/80"></div>
        </div>

        {/* Subtle decorative background glow */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-500 blur-3xl"></div>
          <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-amber-500 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Tagline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-800/80 border border-forest-600/50 text-emerald-300 text-xs sm:text-sm font-bold shadow-md">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.hero.tagline}</span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                {t.hero.headline}
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-stone-200/90 max-w-2xl leading-relaxed">
                {t.hero.subheadline}
              </p>

              {/* Call-to-Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+19196719647"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-base shadow-xl shadow-amber-500/20 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-5 h-5 text-stone-950" />
                  <span>{t.hero.primaryCTA}</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-forest-800/90 hover:bg-forest-700 text-white font-bold text-base border border-forest-600/50 shadow-lg hover:shadow-xl transition-all"
                >
                  <Camera className="w-5 h-5 text-emerald-400" />
                  <span>{t.hero.secondaryCTA}</span>
                </Link>
              </div>

              {/* 3 Trust Badges */}
              <div className="pt-6 border-t border-forest-800/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {t.hero.trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs sm:text-sm font-bold text-white leading-tight">
                        {badge.label}
                      </span>
                      <span className="block text-[11px] text-stone-400 mt-0.5">
                        {badge.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card / Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-stone-900 to-forest-950 border-2 border-forest-700/60 shadow-2xl p-6 sm:p-8">
                  {/* Floating Brand Emblem */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-forest-800/80">
                    <div className="w-16 h-16 rounded-2xl bg-forest-900 overflow-hidden ring-2 ring-amber-500/40 shadow-lg shrink-0">
                      <img
                        src="/j_prado_logo.jpg"
                        alt="J. Prado Emblem"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/logo-icon.svg";
                        }}
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                        J. Prado Quality
                      </span>
                      <h3 className="text-xl font-black text-white leading-tight">
                        Fuquay-Varina Tree Care
                      </h3>
                      <p className="text-xs text-stone-300 mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-400" /> Wake &amp; Harnett County Crew
                      </p>
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-3.5 mb-6">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-forest-900/60 border border-forest-800/80">
                      <span className="text-xs font-semibold text-stone-200">
                        {lang === 'en' ? 'Debris Cleanup Standard' : 'Estándar de Limpieza'}
                      </span>
                      <span className="text-xs font-bold text-emerald-400">100% Hauled Away</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-forest-900/60 border border-forest-800/80">
                      <span className="text-xs font-semibold text-stone-200">
                        {lang === 'en' ? 'Photo Estimates' : 'Presupuestos por Foto'}
                      </span>
                      <span className="text-xs font-bold text-amber-400">Same-Day Text</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-forest-900/60 border border-forest-800/80">
                      <span className="text-xs font-semibold text-stone-200">
                        {lang === 'en' ? 'Bilingual Crew' : 'Equipo Bilingüe'}
                      </span>
                      <span className="text-xs font-bold text-emerald-400">English &amp; Español</span>
                    </div>
                  </div>

                  {/* Direct Contact Callout */}
                  <a
                    href="tel:+19196719647"
                    className="block text-center w-full py-3.5 rounded-xl bg-forest-700/80 hover:bg-forest-700 text-white font-extrabold text-sm border border-forest-600 transition-colors"
                  >
                    {lang === 'en' ? 'Direct Dispatch: (919) 671-9647' : 'Atención Directa: (919) 671-9647'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-forest-700 bg-forest-50 px-3.5 py-1.5 rounded-full border border-forest-200">
            {lang === 'en' ? 'What We Do Best' : 'Nuestros Servicios Principales'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-3">
            {t.servicesSection.heading}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 mt-3 leading-relaxed">
            {t.servicesSection.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.servicesSection.items.map((item, index) => (
            <ServiceCard key={item.id} item={item} featured={index === 0} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-bold text-forest-800 hover:text-forest-900 text-sm hover:underline"
          >
            <span>{t.servicesSection.viewAll}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* BEFORE & AFTER SHOWCASE SECTION */}
      <section className="bg-stone-100/80 py-20 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full">
              {lang === 'en' ? 'Real Job Results' : 'Resultados Reales de Trabajo'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-3">
              {t.gallerySection.heading}
            </h2>
            <p className="text-base text-stone-600 mt-2">
              {t.gallerySection.subheading}
            </p>
            <p className="text-xs font-semibold text-stone-500 mt-1 italic">
              {t.gallerySection.sliderPrompt}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.gallerySection.projects.map((proj) => (
              <BeforeAfterSlider key={proj.id} project={proj} />
            ))}
          </div>

          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-forest-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-extrabold">{t.gallerySection.ctaPrompt}</h3>
              <p className="text-xs text-stone-300 mt-1">
                {lang === 'en'
                  ? 'Send clear pictures of your yard or tree limbs for an immediate estimate.'
                  : 'Envíe fotos claras de su jardín o ramas para un presupuesto inmediato.'}
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm shadow-md transition-all"
            >
              {t.gallerySection.ctaButton}
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS & 3 PILLARS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Why Choose 3 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-50 text-forest-800 text-xs font-bold border border-forest-200">
              <Award className="w-4 h-4 text-forest-600" />
              <span>{lang === 'en' ? 'The J. Prado Standard' : 'El Estándar J. Prado'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              {t.areasSection.pillarsHeading}
            </h2>

            <div className="space-y-6 pt-2">
              {t.areasSection.pillars.map((pillar) => (
                <div key={pillar.num} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:border-forest-400 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                    {pillar.num}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-stone-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Local Service Area Block */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-8 bg-forest-950 text-white shadow-2xl border-2 border-forest-800 relative overflow-hidden">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4" />
                <span>{lang === 'en' ? 'Coverage Territory' : 'Territorio de Cobertura'}</span>
              </div>

              <h3 className="text-2xl font-black mb-4">
                {t.areasSection.heading}
              </h3>

              <div className="space-y-3 mb-6">
                {t.areasSection.areas.map((area, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-forest-900/80 border border-forest-800">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-white">{area.name}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-forest-800 text-emerald-300">
                        {area.zip}
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 mt-1">{area.note}</p>
                  </div>
                ))}
              </div>

              <a
                href="tel:+19196719647"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{lang === 'en' ? 'Call for Local Availability' : 'Llamar para Disponibilidad'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ESTIMATE FORM SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <EstimateForm />
      </section>
    </div>
  );
}
