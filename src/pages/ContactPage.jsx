import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck, Mail, HelpCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import EstimateForm from '../components/EstimateForm';

export default function ContactPage() {
  const { lang } = useLanguage();

  const faqs = [
    {
      q: lang === 'en' ? 'How fast can I get a photo estimate?' : '¿Qué tan rápido recibo un presupuesto por foto?',
      a: lang === 'en'
        ? 'Usually within 1 to 3 hours during normal working hours! If you upload clear photos showing the tree base, height, and proximity to houses or fences, we can often give you an accurate price range immediately.'
        : '¡Normalmente en 1 a 3 horas durante el horario laboral! Si sube fotos claras de la base del árbol, altura y cercanía a techos o cercas, podemos cotizarle casi de inmediato.'
    },
    {
      q: lang === 'en' ? 'Do you haul away all branches and debris?' : '¿Se llevan todas las ramas y escombros?',
      a: lang === 'en'
        ? 'Yes, 100%! We never leave brush piles on your lawn. We run our wood chipper, load all logs and branches into our haul trucks, and rake/blow the entire yard clean before leaving.'
        : '¡Sí, al 100%! Nunca dejamos montones de ramas en su patio. Trituramos, cargamos ramas y troncos en nuestros camiones y soplamos el área para dejarla impecable.'
    },
    {
      q: lang === 'en' ? 'Are estimates really 100% free with no obligation?' : '¿Los presupuestos son realmente 100% gratis y sin compromiso?',
      a: lang === 'en'
        ? 'Yes, all estimates (both online photo estimates and in-person visits across Fuquay-Varina, Holly Springs, and Angier) are completely free.'
        : 'Sí, todas las cotizaciones (tanto por foto como visitas en persona en Fuquay-Varina, Holly Springs y Angier) son totalmente gratis y sin ningún compromiso.'
    },
    {
      q: lang === 'en' ? 'Do you communicate in Spanish?' : '¿Se comunican en español?',
      a: lang === 'en'
        ? 'Yes! We are proud to be fully bilingual. You can call, text, or fill out the form in English or Spanish, and our crew will assist you smoothly.'
        : '¡Claro que sí! Con orgullo ofrecemos servicio bilingüe completo en español e inglés. Puede llamarnos, enviarnos mensajes de texto o llenar el formulario con total tranquilidad.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1.5 rounded-full">
          {lang === 'en' ? 'Fast & Transparent Pricing' : 'Cotización Rápida y Transparente'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mt-4">
          {lang === 'en' ? 'Request Your Free Estimate' : 'Solicite su Presupuesto Gratis'}
        </h1>
        <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed">
          {lang === 'en'
            ? 'Send us photos of your trees or yard for a fast remote estimate, or call us directly at (919) 671-9647 to schedule an on-site visit.'
            : 'Envíenos fotos de sus árboles o jardín para una cotización rápida por foto, o llámenos directamente al (919) 671-9647 para una visita.'}
        </p>
      </div>

      {/* Main Grid: Form + Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <EstimateForm />
          </div>

          {/* Right Column: Contact Details & Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Call Card */}
            <div className="bg-forest-950 text-white rounded-3xl p-8 shadow-xl border-2 border-forest-800">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
                {lang === 'en' ? 'Prefer Speaking with Us?' : '¿Prefiere Hablar por Teléfono?'}
              </span>
              <h3 className="text-2xl font-black mb-3">
                {lang === 'en' ? 'Give Us a Call Today' : 'Llámenos Hoy Mismo'}
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed mb-6">
                {lang === 'en'
                  ? 'Our friendly bilingual team is available Monday through Saturday. We can answer questions and schedule visits instantly.'
                  : 'Nuestro equipo bilingüe está disponible de lunes a sábado para responder sus consultas y programar visitas al instante.'}
              </p>

              <a
                href="tel:+19196719647"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-base shadow-lg transition-transform active:scale-95 mb-4"
              >
                <Phone className="w-5 h-5 text-stone-950" />
                <span>(919) 671-9647</span>
              </a>

              <div className="space-y-3 pt-4 border-t border-forest-800 text-xs">
                <div className="flex items-center gap-3 text-stone-300">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fuquay-Varina, NC 27526</span>
                </div>
                <div className="flex items-center gap-3 text-stone-300">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-stone-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{lang === 'en' ? 'Bilingual Service: English & Spanish' : 'Atención Bilingüe: Inglés y Español'}</span>
                </div>
              </div>
            </div>

            {/* Photo Tip Card */}
            <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200">
              <h4 className="text-sm font-extrabold text-amber-950 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                {lang === 'en' ? 'Tips for Quickest Photo Estimates' : 'Consejos para Cotizar más Rápido'}
              </h4>
              <ul className="text-xs text-amber-900 space-y-1.5 list-disc pl-4">
                <li>{lang === 'en' ? 'Take one full photo showing the whole tree and roofline' : 'Tome una foto completa que muestre el árbol y el techo'}</li>
                <li>{lang === 'en' ? 'Take a close-up of low-hanging or broken branches' : 'Tome una foto de cerca a las ramas partidas o bajas'}</li>
                <li>{lang === 'en' ? 'Show driveway/gate access for equipment' : 'Muestre el acceso o portón para nuestros camiones'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
            {lang === 'en' ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
              <h4 className="text-sm font-extrabold text-stone-900 mb-2 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
