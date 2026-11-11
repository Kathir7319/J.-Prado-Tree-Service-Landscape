import React from 'react';
import { Scissors, Trees, Sparkles, Shovel, CheckCircle, Phone, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ServicesPage() {
  const { lang, t } = useLanguage();

  const servicesDetailed = [
    {
      id: "tree-trimming",
      image: "/images/service-trimming.jpg",
      title: lang === 'en' ? 'Tree Trimming & Pruning' : 'Poda y Corte de Árboles',
      subtitle: lang === 'en' ? 'Crown thinning, deadwood removal & safety clearance' : 'Aclareo de copa, retiro de ramas secas y seguridad',
      description: lang === 'en' 
        ? 'Overgrown tree limbs pose severe risks to your roofing, siding, power lines, and neighboring properties during North Carolina summer storms and winter freezes. Our trimming service targets hazardous branches while improving tree health and sunlight penetration.'
        : 'Las ramas crecidas representan un grave peligro para techos, revestimientos, cables eléctricos y propiedades vecinas durante tormentas. Nuestro servicio de poda elimina ramas peligrosas, mejora la salud del árbol y aumenta la entrada de luz solar a su césped.',
      icon: Scissors,
      benefits: [
        lang === 'en' ? 'Prevents branch breakage during hurricane and storm seasons' : 'Previene roturas de ramas durante huracanes y tormentas',
        lang === 'en' ? 'Eliminates rubbing branches causing roof gutter damage' : 'Elimina ramas que rozan canales pluviales y techos',
        lang === 'en' ? 'Elevates lower canopies for vehicle and pedestrian clearance' : 'Eleva la copa para despejar el paso de vehículos y personas',
        lang === 'en' ? 'Allows healthy sunlight to nourish underneath grass & garden beds' : 'Permite que la luz nutra el pasto y jardines inferiores'
      ],
      idealFor: lang === 'en' ? 'Homeowners in Fuquay-Varina & Holly Springs with mature oak or pine canopies encroaching on houses.' : 'Hogares en Fuquay-Varina y Holly Springs con robles o pinos altos cerca de la vivienda.'
    },
    {
      id: "tree-removal",
      image: "/images/service-removal.jpg",
      title: lang === 'en' ? 'Tree & Brush Removal' : 'Remoción de Árboles y Maleza',
      subtitle: lang === 'en' ? 'Controlled dismantling, hazardous tree takedowns & brush clearing' : 'Derribo controlado, retiro de árboles peligrosos y limpieza',
      description: lang === 'en'
        ? 'Dead, diseased, hollowed, or leaning trees require careful rigging and controlled sectional takedowns to protect your home, driveway, and fences. We handle everything from single hazardous trees to full perimeter brush clearing with total haul-away.'
        : 'Los árboles secos, enfermos, huecos o inclinados requieren cortes controlados y equipo especializado para proteger su casa, cercas y entrada. Gestionamos desde árboles individuales de alto riesgo hasta desmonte perimetral completo con acarreo total.',
      icon: Trees,
      benefits: [
        lang === 'en' ? 'Safe sectional roping down near tight structures and fences' : 'Desmontaje controlado en secciones cerca de casas y cercas',
        lang === 'en' ? 'Thorough clearing of invasive brambles, vines, and saplings' : 'Desmonte completo de maleza invasora, enredaderas y matorrales',
        lang === 'en' ? 'Heavy chipper processing and complete log removal' : 'Trituración in situ y retiro total de troncos y restos',
        lang === 'en' ? 'Prepares raw lots or backyards for construction or family use' : 'Prepara el terreno para ampliaciones, piscinas o disfrute familiar'
      ],
      idealFor: lang === 'en' ? 'Lightning-struck trees, rotting trunks, or overgrown fence lines needing reclamation.' : 'Árboles dañados por rayos, troncos con pudrición o linderos invadidos por maleza.'
    },
    {
      id: "yard-cleanup",
      image: "/images/service-cleanup.jpg",
      title: lang === 'en' ? 'Seasonal Lawn & Yard Cleanup' : 'Limpieza Estacional de Jardines',
      subtitle: lang === 'en' ? 'Leaf removal, storm debris clearing & property revitalizations' : 'Retiro de hojas, restos de tormentas y embellecimiento total',
      description: lang === 'en'
        ? 'Thick leaf blankets suffocate grass roots and breed mold throughout Wake and Harnett county yards. Our seasonal cleanup restores neatness with high-powered blowers, raking, brush piling, edging, and responsible hauling.'
        : 'Las capas gruesas de hojas asfixian las raíces del césped y acumulan humedad perjudicial. Nuestra limpieza estacional revitaliza su propiedad con sopladores de alta potencia, rastrillado minucioso, perfilado y retiro completo de desechos.',
      icon: Sparkles,
      benefits: [
        lang === 'en' ? 'Heavy leaf collection from lawn surfaces, flower beds & corners' : 'Recolección masiva de hojas secas en jardines y canteros',
        lang === 'en' ? 'Fallen branch and twig collection after heavy wind events' : 'Recolección de ramas y palos caídos tras fuertes vientos',
        lang === 'en' ? 'Curb appeal restoration before selling or family gatherings' : 'Recuperación de la estética exterior antes de reuniones o venta',
        lang === 'en' ? 'Clean curb and driveway borders blown spotless' : 'Bordes de banquetas y entradas soplados y limpios al 100%'
      ],
      idealFor: lang === 'en' ? 'Spring prep, autumn leaf accumulation, or rental property turnover cleanouts.' : 'Preparación primaveral, acumulaciones de otoño o propiedades en arriendo.'
    },
    {
      id: "yard-maintenance",
      image: "/images/service-maintenance.jpg",
      title: lang === 'en' ? 'Routine Yard Maintenance' : 'Mantenimiento Continuo de Jardines',
      subtitle: lang === 'en' ? 'Scheduled mowing, hedge shaping, mulch & pine straw' : 'Corte de césped, perfilado de setos, mulch y paja de pino',
      description: lang === 'en'
        ? 'Consistent property upkeep preserves your home value and keeps curb appeal high week after week. We provide tailored maintenance schedules including crisp edge definition, hedge trimming, and fresh organic mulch installations.'
        : 'El mantenimiento constante protege el valor de su vivienda y conserva su belleza exterior semana tras semana. Ofrecemos planes a medida con delineado nítido de bordes, corte de arbustos e instalación de mulch o paja de pino.',
      icon: Shovel,
      benefits: [
        lang === 'en' ? 'Sharp geometric trimming of ornamental hedges and shrubs' : 'Recorte estético y geométrico de arbustos y setos ornamentales',
        lang === 'en' ? 'Premium brown, black, or triple-shred mulch installation' : 'Instalación de mulch de alta calidad y paja de pino fresca',
        lang === 'en' ? 'Clean weed prevention and moisture retention for flower beds' : 'Control preventivo de maleza y retención de humedad en raíces',
        lang === 'en' ? 'Dependable scheduling with straightforward monthly or per-service billing' : 'Puntualidad garantizada con cobro transparente por servicio'
      ],
      idealFor: lang === 'en' ? 'Homeowners who want their lawn looking showroom-ready without sacrificing weekends.' : 'Familias que desean su jardín impecable sin perder sus fines de semana.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <span className="text-xs font-extrabold uppercase tracking-widest text-forest-800 bg-forest-100 px-3.5 py-1.5 rounded-full border border-forest-200">
          {lang === 'en' ? 'Comprehensive Outdoor Care' : 'Cuidado Exterior Completo'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mt-4">
          {lang === 'en' ? 'Our Professional Services' : 'Nuestros Servicios Profesionales'}
        </h1>
        <p className="text-base sm:text-lg text-stone-600 mt-4 leading-relaxed">
          {lang === 'en'
            ? 'Serving homeowners in Fuquay-Varina, Holly Springs, Angier, and surrounding communities with dedicated tree trimming, hazardous removals, and detailed yard care.'
            : 'Atendiendo hogares en Fuquay-Varina, Holly Springs, Angier y comunidades vecinas con poda especializada, derribo seguro y mantenimiento de jardines.'}
        </p>
      </div>

      {/* Detailed Service Blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {servicesDetailed.map((svc, index) => {
          const Icon = svc.icon;
          const isEven = index % 2 === 1;

          return (
            <div
              key={svc.id}
              id={svc.id}
              className={`rounded-3xl p-8 sm:p-12 border border-stone-200 bg-white shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-widest block">
                      {svc.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                      {svc.title}
                    </h2>
                  </div>
                </div>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed pt-2">
                  {svc.description}
                </p>

                <div className="pt-4 border-t border-stone-100">
                  <h4 className="text-xs font-extrabold text-stone-900 uppercase tracking-wider mb-3">
                    {lang === 'en' ? 'Key Service Advantages:' : 'Ventajas Principales del Servicio:'}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {svc.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-semibold text-stone-700">
                        <CheckCircle className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3">
                  <p className="text-xs text-stone-500 italic bg-stone-50 p-3 rounded-xl border border-stone-200">
                    <strong className="text-stone-800 not-italic">
                      {lang === 'en' ? 'Ideal for: ' : 'Ideal para: '}
                    </strong>
                    {svc.idealFor}
                  </p>
                </div>
              </div>

              {/* Right Callout Box with Visual Service Photo */}
              <div className="lg:col-span-5 bg-gradient-to-br from-forest-950 to-forest-900 text-white rounded-2xl overflow-hidden flex flex-col justify-between h-full shadow-lg border border-forest-800">
                <div className="relative h-44 w-full overflow-hidden bg-forest-900">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{lang === 'en' ? 'J. Prado Standard' : 'Estándar J. Prado'}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      {lang === 'en' ? 'Get an Upfront Quote' : 'Reciba su Cotización Clara'}
                    </h3>

                    <p className="text-xs text-stone-300 leading-relaxed mb-6">
                      {lang === 'en'
                        ? 'No surprises or hidden fees. We inspect tree height, access points, and limb overhang to provide a transparent price before starting.'
                        : 'Sin sorpresas ni cargos ocultos. Evaluamos la altura, acceso y ramas para darle un precio exacto y transparente antes de comenzar.'}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Link
                      to={`/contact?service=${encodeURIComponent(svc.title)}`}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm shadow-md transition-colors"
                    >
                      <span>{lang === 'en' ? 'Request Free Photo Quote' : 'Cotizar con Foto'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <a
                      href="tel:+19196719647"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-forest-800 hover:bg-forest-700 text-white font-bold text-xs border border-forest-600 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{lang === 'en' ? 'Call (919) 671-9647' : 'Llamar al (919) 671-9647'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Emergency Notice Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-10 bg-amber-500 text-stone-950 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-stone-950 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black">
                {lang === 'en' ? 'Storm Damage or Fallen Limb Emergency?' : '¿Emergencia por Rama Caída o Tormenta?'}
              </h3>
              <p className="text-sm font-semibold text-stone-900 mt-1 max-w-xl">
                {lang === 'en'
                  ? 'If a cracked limb is threatening your roof, driveway, or power line, call us immediately for priority emergency assessment.'
                  : 'Si una rama partida pone en riesgo su techo, entrada o cables, llámenos de inmediato para atención de emergencia prioritaria.'}
              </p>
            </div>
          </div>

          <a
            href="tel:+19196719647"
            className="shrink-0 px-8 py-4 rounded-2xl bg-stone-950 hover:bg-stone-900 text-white font-black text-base shadow-xl flex items-center gap-2"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>(919) 671-9647</span>
          </a>
        </div>
      </div>
    </div>
  );
}
