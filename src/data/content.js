export const content = {
  en: {
    nav: {
      brand: "J. Prado Tree Service & Landscape",
      home: "Home",
      services: "Services",
      gallery: "Before & After",
      areas: "Service Areas",
      contact: "Free Estimate",
      callNow: "Call: (919) 671-9647",
      langSwitch: "Español",
    },
    hero: {
      tagline: "Premier Tree Care & Landscaping in Wake & Harnett Counties",
      headline: "Reliable Tree Trimming & Lawn Cleanup in Fuquay-Varina, NC",
      subheadline: "Safe tree removal, precision pruning, and complete yard maintenance for homeowners in Fuquay-Varina, Holly Springs, and Angier. Free on-site and photo estimates.",
      primaryCTA: "Call (919) 671-9647",
      secondaryCTA: "Get a Free Photo Estimate",
      trustBadges: [
        { label: "Free Estimates", sub: "Fast on-site & photo quotes" },
        { label: "Residential & Yard Care", sub: "Complete property maintenance" },
        { label: "Local & Dependable", sub: "Fuquay-Varina, Holly Springs, Angier" }
      ]
    },
    servicesSection: {
      heading: "Our Tree & Landscaping Services",
      intro: "Quality outdoor care tailored to keep your property safe, clean, and looking its best all year round.",
      viewAll: "Explore All Services",
      items: [
        {
          id: "tree-trimming",
          title: "Tree Trimming & Pruning",
          description: "Trimming overgrown branches, raising canopies, and removing dead limbs to protect your home and keep trees healthy.",
          icon: "Scissors",
          features: [
            "Hazardous deadwood removal",
            "Canopy thinning & elevation",
            "Clearance from rooflines & powerlines",
            "Promotes healthy tree longevity"
          ],
          idealFor: "Homeowners with low-hanging branches or overgrown canopies touching gutters."
        },
        {
          id: "tree-removal",
          title: "Tree & Brush Removal",
          description: "Safe removal of unwanted, storm-damaged, or hazardous trees along with complete haul-away of branches and debris.",
          icon: "Trees",
          features: [
            "Controlled sectional dismantling",
            "Storm-damaged limb extraction",
            "Thick overgrown brush clearing",
            "100% complete debris haul-away"
          ],
          idealFor: "Dead, rotting, storm-split trees or clearing room for new projects."
        },
        {
          id: "yard-cleanup",
          title: "Seasonal Lawn & Yard Cleanup",
          description: "Full yard cleanups including leaf removal, overgrown brush clearing, edging, and hauling away green waste.",
          icon: "Sparkles",
          features: [
            "Spring & Autumn thorough cleanup",
            "Heavy leaf vacuuming & removal",
            "Overgrown fence line clearing",
            "Disposal of branches & brush piles"
          ],
          idealFor: "Overgrown properties needing immediate transformation and curbside cleanup."
        },
        {
          id: "yard-maintenance",
          title: "Routine Yard Maintenance",
          description: "Scheduled mowing, bush trimming, mulch installation, and general landscape upkeep for a neat curb appeal.",
          icon: "Shovel",
          features: [
            "Precision bush & hedge sculpting",
            "Fresh pine straw & mulch installation",
            "Crisp flower bed border edging",
            "Routine scheduled yard upkeep"
          ],
          idealFor: "Busy homeowners wanting flawless curb appeal without lifting a finger."
        }
      ]
    },
    gallerySection: {
      heading: "Before & After: Recent Local Projects",
      subheading: "See how we transform overgrown yards and hazardous trees across Wake and Harnett counties.",
      sliderPrompt: "Drag the slider back and forth to inspect our cleanup quality",
      ctaPrompt: "Have a similar project? Text or upload photos for a fast price quote.",
      ctaButton: "Get Your Fast Quote",
      projects: [
        {
          id: 1,
          title: "Backyard Tree Trimming & Canopy Cleanup",
          location: "Fuquay-Varina, NC",
          category: "Tree Trimming",
          description: "Removed heavy overgrown deadwood hanging directly over the rear deck, raised the canopy by 15 feet to let natural sunlight through, and hauled away all debris.",
          beforeImg: "/images/project1-before.jpg",
          afterImg: "/images/project1-after.jpg",
          badge: "Deck Clearance Completed"
        },
        {
          id: 2,
          title: "Overgrown Brush Clearing & Yard Haul-Away",
          location: "Holly Springs, NC",
          category: "Brush Removal",
          description: "Cleared 4,000 sq ft of impenetrable blackberry brambles, fallen logs, and dead saplings to reclaim the customer's property boundary.",
          beforeImg: "/images/project2-before.jpg",
          afterImg: "/images/project2-after.jpg",
          badge: "Full Lot Reclaimed"
        },
        {
          id: 3,
          title: "Storm Limb Removal & Full Lawn Cleanup",
          location: "Angier, NC",
          category: "Storm Cleanup",
          description: "Rapid response after summer thunderstorm split a large oak limb across the front driveway. Safely sawed, chipper-shredded, and swept pristine.",
          beforeImg: "/images/project3-before.jpg",
          afterImg: "/images/project3-after.jpg",
          badge: "Same-Day Response"
        }
      ]
    },
    areasSection: {
      heading: "Proudly Serving Fuquay-Varina & Neighboring Communities",
      subheading: "Local, family-operated service throughout southern Wake County and northern Harnett County.",
      areas: [
        { name: "Fuquay-Varina, NC", zip: "27526", note: "Our Hometown Hub - Rapid on-site response within hours" },
        { name: "Holly Springs, NC", zip: "27540", note: "12 Mile Service Radius - Weekly neighborhood rounds" },
        { name: "Angier, NC", zip: "27501", note: "Full Service - Tree removal, pruning & acreage cleanups" },
        { name: "Surrounding Southern Wake & Northern Harnett", zip: "Extended", note: "Willow Spring, Duncan, Chalybeate Springs & nearby communities" }
      ],
      pillarsHeading: "Why Choose J. Prado Tree Service?",
      pillars: [
        {
          num: "1",
          title: "Honest, Upfront Pricing",
          description: "Clear quotes before any work starts. No hidden surcharges, no surprise travel fees. You know exactly what to expect."
        },
        {
          num: "2",
          title: "Clean Job Sites",
          description: "We haul away all branches, leaves, sawdust, and debris. We rake and leaf-blow the entire area so your property looks immaculate."
        },
        {
          num: "3",
          title: "Direct Communication",
          description: "Speak directly with our crew in English or Spanish. We listen carefully, confirm every detail, and arrive promptly as scheduled."
        }
      ]
    },
    estimateSection: {
      heading: "Request a Free Estimate",
      subheading: "Fill out the quick form below or call (919) 671-9647. Upload photos of your trees or yard for a faster quote.",
      fields: {
        name: "Full Name *",
        namePlaceholder: "e.g. John Miller",
        phone: "Phone Number (For Call or Text) *",
        phonePlaceholder: "(919) 000-0000",
        city: "City / Area *",
        cityPlaceholder: "Select your city / area",
        cities: ["Fuquay-Varina, NC", "Holly Springs, NC", "Angier, NC", "Willow Spring, NC", "Other nearby area"],
        service: "Service Needed",
        servicePlaceholder: "Select a service",
        services: [
          "Tree Trimming & Pruning",
          "Tree & Brush Removal",
          "Seasonal Lawn & Yard Cleanup",
          "Routine Yard Maintenance & Mulch",
          "Emergency Storm Damage Cleanup",
          "Multiple Services / Full Property Assessment"
        ],
        photoLabel: "Upload Project Photos (Optional — Up to 5 photos)",
        photoPrompt: "Drag & drop photos or click to browse",
        photoSub: "Photos of tree height, branch overhang, or yard area help us quote quickly!",
        details: "Brief Description of Work Needed",
        detailsPlaceholder: "Describe tree height, location near house/fence, or scope of cleanup...",
        submitBtn: "Send My Free Estimate Request",
        submitting: "Submitting Request...",
        successTitle: "Estimate Request Received!",
        successMessage: "Thank you! J. Prado Tree Service & Landscape has received your request. We will review your details and call or text you shortly at your provided phone number.",
        callDirectNotice: "Need emergency limb removal right now? Call immediately:"
      }
    },
    footer: {
      businessInfo: "J. Prado Tree Service & Landscape",
      location: "Fuquay-Varina, NC 27526",
      phone: "(919) 671-9647",
      phoneAction: "Tap to Call: (919) 671-9647",
      hoursLabel: "Working Hours",
      hours: "Mon – Sat: 7:00 AM – 6:00 PM | Sun: Closed / Emergency Only",
      quickLinks: "Quick Navigation",
      languages: "Bilingual Service: English & Español",
      copyright: "© 2026 J. Prado Tree Service & Landscape. All Rights Reserved.",
      seoTitle: "J. Prado Tree Service & Landscape | Tree Trimming & Yard Cleanup in Fuquay-Varina, NC"
    }
  },
  es: {
    nav: {
      brand: "J. Prado Tree Service & Landscape",
      home: "Inicio",
      services: "Servicios",
      gallery: "Antes y Después",
      areas: "Áreas de Servicio",
      contact: "Presupuesto Gratis",
      callNow: "Llamar: (919) 671-9647",
      langSwitch: "English",
    },
    hero: {
      tagline: "Servicio Experto de Árboles y Jardinería en Condados de Wake y Harnett",
      headline: "Poda de Árboles y Limpieza de Jardines Confiable en Fuquay-Varina, NC",
      subheadline: "Remoción segura de árboles, poda profesional y mantenimiento completo de jardines para hogares en Fuquay-Varina, Holly Springs y Angier. Presupuestos gratis en persona o por foto.",
      primaryCTA: "Llamar al (919) 671-9647",
      secondaryCTA: "Pedir Presupuesto con Foto",
      trustBadges: [
        { label: "Presupuestos Gratis", sub: "Cotizaciones rápidas por foto o visita" },
        { label: "Cuidado Residencial", sub: "Mantenimiento integral de jardines" },
        { label: "Servicio Local y Confiable", sub: "Fuquay-Varina, Holly Springs, Angier" }
      ]
    },
    servicesSection: {
      heading: "Nuestros Servicios de Árboles y Jardinería",
      intro: "Cuidado exterior de calidad para mantener su propiedad segura, limpia y en excelente estado todo el año.",
      viewAll: "Ver Todos los Servicios",
      items: [
        {
          id: "tree-trimming",
          title: "Poda y Corte de Árboles",
          description: "Recorte de ramas crecidas, elevación de copas y retiro de ramas secas para proteger su hogar y mantener sus árboles sanos.",
          icon: "Scissors",
          features: [
            "Eliminación de ramas secas y peligrosas",
            "Aclareo y elevación de copas",
            "Despeje seguro de techos y cableados",
            "Promueve la salud y vida del árbol"
          ],
          idealFor: "Propietarios con ramas que tocan techos, canales o ventanas."
        },
        {
          id: "tree-removal",
          title: "Remoción de Árboles y Maleza",
          description: "Remoción segura de árboles no deseados, peligrosos o dañados por tormentas, incluyendo el retiro completo de ramas y escombros.",
          icon: "Trees",
          features: [
            "Corte seccional controlado con seguridad",
            "Extracción de ramas partidas por tormentas",
            "Desbroce de maleza densa y troncos",
            "Retiro total y limpieza del terreno"
          ],
          idealFor: "Árboles secos, en riesgo de caer o despeje para ampliaciones."
        },
        {
          id: "yard-cleanup",
          title: "Limpieza Estacional de Jardines",
          description: "Limpieza completa de patios, retiro de hojas, despeje de maleza, bordeado y recolección de desechos vegetales.",
          icon: "Sparkles",
          features: [
            "Limpiezas profundas de primavera y otoño",
            "Aspirado y recolección de hojas secas",
            "Despeje de cercas y áreas descuidadas",
            "Acarreo completo de restos vegetales"
          ],
          idealFor: "Terrenos descuidados que requieren transformación inmediata."
        },
        {
          id: "yard-maintenance",
          title: "Mantenimiento Continuo de Jardines",
          description: "Corte de césped programado, poda de arbustos, colocación de mantillo (mulch) y mantenimiento general del jardín.",
          icon: "Shovel",
          features: [
            "Perfilado y recorte estético de arbustos",
            "Instalación de mulch y paja de pino",
            "Delineado nítido de canteros de flores",
            "Mantenimiento programado sin preocupaciones"
          ],
          idealFor: "Dueños de casa que desean un jardín perfecto todo el año."
        }
      ]
    },
    gallerySection: {
      heading: "Antes y Después: Proyectos Locales Recientes",
      subheading: "Vea cómo transformamos patios descuidados y árboles peligrosos en los condados de Wake y Harnett.",
      sliderPrompt: "Deslice hacia los lados para comparar el antes y después",
      ctaPrompt: "¿Tiene un proyecto similar? Envíe fotos para recibir una cotización rápida.",
      ctaButton: "Solicitar Cotización Rápida",
      projects: [
        {
          id: 1,
          title: "Poda de Árboles y Limpieza de Patio Trasero",
          location: "Fuquay-Varina, NC",
          category: "Poda de Árboles",
          description: "Retiramos ramas secas pesadas sobre el deck trasero, elevamos la copa a más de 4 metros para permitir luz natural y limpiamos todo el patio.",
          beforeImg: "/images/project1-before.jpg",
          afterImg: "/images/project1-after.jpg",
          badge: "Protección de Techo Completada"
        },
        {
          id: 2,
          title: "Despeje de Maleza y Limpieza de Terreno",
          location: "Holly Springs, NC",
          category: "Limpieza de Maleza",
          description: "Limpiamos más de 370 m² de zarzas espinosas, troncos caídos y arbustos invasores para recuperar los límites de la propiedad.",
          beforeImg: "/images/project2-before.jpg",
          afterImg: "/images/project2-after.jpg",
          badge: "Lote Totalmente Recuperado"
        },
        {
          id: 3,
          title: "Retiro de Ramas por Tormenta y Limpieza Total",
          location: "Angier, NC",
          category: "Limpieza de Tormenta",
          description: "Respuesta de emergencia tras tormenta que partió una enorme rama sobre la entrada. Aserrado, triturado y soplado impecable.",
          beforeImg: "/images/project3-before.jpg",
          afterImg: "/images/project3-after.jpg",
          badge: "Atención el Mismo Día"
        }
      ]
    },
    areasSection: {
      heading: "Sirviendo con Orgullo a Fuquay-Varina y Comunidades Vecinas",
      subheading: "Servicio local de confianza operado en el sur del condado de Wake y norte del condado de Harnett.",
      areas: [
        { name: "Fuquay-Varina, NC", zip: "27526", note: "Nuestra Base Principal - Respuesta rápida el mismo día" },
        { name: "Holly Springs, NC", zip: "27540", note: "Radio de 20 km - Rutas semanales programadas" },
        { name: "Angier, NC", zip: "27501", note: "Servicio Completo - Poda, derribo de árboles y parcelas" },
        { name: "Zonas Cercanas del Sur de Wake y Norte de Harnett", zip: "Radio Extendido", note: "Willow Spring, Duncan, Chalybeate Springs y áreas rurales" }
      ],
      pillarsHeading: "¿Por Qué Elegir J. Prado?",
      pillars: [
        {
          num: "1",
          title: "Precios Honestos y Claros",
          description: "Cotizaciones transparentes antes de empezar. Sin tarifas sorpresa ni recargos ocultos. Claridad absoluta desde el inicio."
        },
        {
          num: "2",
          title: "Limpieza Total del Terreno",
          description: "Nos llevamos todas las ramas, hojas, aserrín y escombros. Rastrillamos y soplamos toda la propiedad para dejarla impecable."
        },
        {
          num: "3",
          title: "Comunicación Directa",
          description: "Hable directamente con nuestro equipo en inglés o español. Escuchamos sus necesidades y cumplimos el horario pactado con puntualidad."
        }
      ]
    },
    estimateSection: {
      heading: "Solicite un Presupuesto Gratis",
      subheading: "Complete el siguiente formulario o llame al (919) 671-9647. Suba fotos de sus árboles o jardín para cotizar más rápido.",
      fields: {
        name: "Nombre Completo *",
        namePlaceholder: "Ej: Juan Pérez",
        phone: "Número de Teléfono (Llamada o Texto) *",
        phonePlaceholder: "(919) 000-0000",
        city: "Ciudad / Área *",
        cityPlaceholder: "Seleccione su ciudad",
        cities: ["Fuquay-Varina, NC", "Holly Springs, NC", "Angier, NC", "Willow Spring, NC", "Otra zona cercana"],
        service: "Servicio Necesario",
        servicePlaceholder: "Seleccione un servicio",
        services: [
          "Poda y Corte de Árboles",
          "Remoción de Árboles y Maleza",
          "Limpieza Estacional de Jardines",
          "Mantenimiento de Jardín y Mulch",
          "Emergencia por Daños de Tormenta",
          "Múltiples Servicios / Evaluación Integral"
        ],
        photoLabel: "Subir Fotos del Proyecto (Opcional — Hasta 5 fotos)",
        photoPrompt: "Arrastre sus fotos aquí o haga clic para buscar",
        photoSub: "Fotos de la altura del árbol o ramas sobre el techo nos ayudan a cotizar al instante.",
        details: "Breve Descripción del Trabajo Necesario",
        detailsPlaceholder: "Describa la altura, ramas cerca de cables o casa, o la cantidad de limpieza...",
        submitBtn: "Enviar Solicitud de Presupuesto Gratis",
        submitting: "Enviando Solicitud...",
        successTitle: "¡Solicitud Recibida con Éxito!",
        successMessage: "¡Gracias! J. Prado Tree Service & Landscape recibió su solicitud. Revisaremos la información y nos comunicaremos con usted a la brevedad.",
        callDirectNotice: "¿Tiene una rama a punto de caer? Llame de inmediato:"
      }
    },
    footer: {
      businessInfo: "J. Prado Tree Service & Landscape",
      location: "Fuquay-Varina, NC 27526",
      phone: "(919) 671-9647",
      phoneAction: "Toque para Llamar: (919) 671-9647",
      hoursLabel: "Horario de Atención",
      hours: "Lun – Sáb: 7:00 AM – 6:00 PM | Dom: Cerrado / Sólo Emergencias",
      quickLinks: "Navegación Rápida",
      languages: "Servicio Bilingüe: Inglés y Español",
      copyright: "© 2026 J. Prado Tree Service & Landscape. Todos los derechos reservados.",
      seoTitle: "J. Prado Tree Service & Landscape | Poda de Árboles y Limpieza de Jardines en Fuquay-Varina, NC"
    }
  }
};
