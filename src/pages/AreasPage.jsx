import React from 'react';
import { MapPin, CheckCircle2, Phone, ShieldCheck, Award, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function AreasPage() {
  const { lang, t } = useLanguage();

  const towns = [
    {
      name: "Fuquay-Varina, NC",
      zip: "27526",
      headline: lang === 'en' ? "Our Hometown & Operations Hub" : "Nuestra Base y Sede de Operaciones",
      description: lang === 'en'
        ? "Based right in Fuquay-Varina, we provide the quickest dispatch times for residential tree trimming, brush clearing, and storm emergencies. From mature subdivisions near Downtown to acreage on the outskirts."
        : "Ubicados en Fuquay-Varina, ofrecemos el tiempo de respuesta más veloz para poda, despeje de maleza y emergencias de tormenta. Desde el centro hasta terrenos en las afueras.",
      features: [
        lang === 'en' ? 'Same-day on-site estimates available' : 'Presupuestos el mismo día disponibles',
        lang === 'en' ? 'Familiar with local HOA guidelines & trees' : 'Conocimiento de normativas de HOA y especies locales',
        lang === 'en' ? 'Full debris removal & wood chipping' : 'Retiro total de escombros y trituración'
      ]
    },
    {
      name: "Holly Springs, NC",
      zip: "27540",
      headline: lang === 'en' ? "Serving Holly Springs Neighborhoods" : "Atención Completa en Holly Springs",
      description: lang === 'en'
        ? "Just minutes north along Route 55, our crew regularly services homes in Holly Springs. We specialize in delicate backyard trims around swimming pools, screened porches, and fence perimeters."
        : "A pocos minutos por la Ruta 55, atendemos con frecuencia hogares en Holly Springs. Especialistas en podas delicadas alrededor de piscinas, porches y vallas.",
      features: [
        lang === 'en' ? 'Tight backyard rigging experts' : 'Expertos en maniobras en patios reducidos',
        lang === 'en' ? 'Seasonal leaf cleanup & edging' : 'Limpieza estacional de hojas y delineado',
        lang === 'en' ? 'Prompt arrival and clear bilingual communication' : 'Llegada puntual y comunicación bilingüe fluida'
      ]
    },
    {
      name: "Angier, NC",
      zip: "27501",
      headline: lang === 'en' ? "Northern Harnett County Coverage" : "Cobertura en el Norte de Harnett",
      description: lang === 'en'
        ? "We provide extensive tree removal and heavy brush clearing across Angier and northern Harnett County. Perfect for both residential yards and larger rural parcels requiring tree management."
        : "Brindamos amplio servicio de derribo de árboles y desbroce de maleza pesada en Angier y el norte de Harnett. Ideal para parcelas familiares y lotes campestres.",
      features: [
        lang === 'en' ? 'Acreage and wooded lot clearing' : 'Desmonte de parcelas y terrenos arbolados',
        lang === 'en' ? 'Hazardous oak and pine takedowns' : 'Derribo controlado de robles y pinos viejos',
        lang === 'en' ? 'Clean haul-away with heavy-duty trucks' : 'Acarreo limpio en camiones de carga'
      ]
    },
    {
      name: "Surrounding Communities",
      zip: "Southern Wake & Harnett",
      headline: lang === 'en' ? "Willow Spring, Duncan & Adjacent Areas" : "Willow Spring, Duncan y Alrededores",
      description: lang === 'en'
        ? "We also travel to neighboring southern Wake and northern Harnett neighborhoods including Willow Spring, Chalybeate Springs, Duncan, and Kennebec."
        : "También llegamos a vecindarios vecinos del sur de Wake y norte de Harnett como Willow Spring, Chalybeate Springs, Duncan y Kennebec.",
      features: [
        lang === 'en' ? 'Flexible scheduling across county lines' : 'Horarios flexibles entre condados',
        lang === 'en' ? 'Photo estimates for quick remote pricing' : 'Cotización rápida enviando fotos por texto',
        lang === 'en' ? 'Complete satisfaction cleanup promise' : 'Compromiso de limpieza y satisfacción total'
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-extrabold uppercase tracking-widest text-forest-800 bg-forest-100 px-3.5 py-1.5 rounded-full border border-forest-200">
          {lang === 'en' ? 'Local Service Footprint' : 'Cobertura Local'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mt-4">
          {t.areasSection.heading}
        </h1>
        <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed">
          {t.areasSection.subheading}
        </p>
      </div>

      {/* Towns Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {towns.map((town, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-forest-700" />
                    <h3 className="text-2xl font-black text-stone-900">{town.name}</h3>
                  </div>
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-forest-50 text-forest-800 border border-forest-200">
                    ZIP: {town.zip}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-amber-700 uppercase tracking-wider mb-2">
                  {town.headline}
                </h4>

                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {town.description}
                </p>

                <ul className="space-y-2.5 border-t border-stone-100 pt-4 mb-6">
                  {town.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/contact?city=${encodeURIComponent(town.name)}`}
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-forest-50 hover:bg-forest-100 text-forest-900 font-extrabold text-xs uppercase tracking-wider transition-colors"
              >
                <span>{lang === 'en' ? `Get Estimate in ${town.name}` : `Cotizar en ${town.name}`}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Pillars of Trust Section */}
      <div className="bg-stone-100/90 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              {t.areasSection.pillarsHeading}
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              {lang === 'en'
                ? 'Our reputation in Wake & Harnett counties is built on 3 non-negotiable standards:'
                : 'Nuestra reputación en los condados de Wake y Harnett se basa en 3 pilares irrenunciables:'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.areasSection.pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="bg-white rounded-2xl p-7 shadow-md border border-stone-200 relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-stone-950 font-black text-xl flex items-center justify-center mb-4 shadow-md">
                  {pillar.num}
                </div>
                <h3 className="text-lg font-black text-stone-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 bg-forest-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">
              {lang === 'en' ? 'Check Service Availability' : 'Consulte Disponibilidad en su Zona'}
            </h3>
            <p className="text-xs text-stone-300 mt-1">
              {lang === 'en'
                ? 'Not sure if your neighborhood is covered? Give us a call or send your address.'
                : '¿No está seguro si cubrimos su calle? Llámenos o envíe su dirección para confirmar.'}
            </p>
          </div>

          <a
            href="tel:+19196719647"
            className="shrink-0 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm shadow-md flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-stone-950" />
            <span>(919) 671-9647</span>
          </a>
        </div>
      </div>
    </div>
  );
}
