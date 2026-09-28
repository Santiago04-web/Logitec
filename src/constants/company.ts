/**
 * Constantes institucionales y legales de LOGITEC.
 * 
 * IMPORTANTE:
 * Toda la información legal y corporativa proviene estrictamente
 * de los datos verificados del registro empresarial y de los requerimientos.
 * NO modificar ni alterar estos valores.
 */

export const COMPANY_INFO = {
  legalName: 'LOGITEC',
  brandName: 'Logitec',
  nit: '900805654-7',
  city: 'Cali, Valle del Cauca, Colombia',
  address: 'CL 46 NORTE # 7 - 603 CS 22',
  phone: '+57 3044019906',
  phoneRaw: '3044019906',
  email: 'logitec@logitec.store',
  domain: 'https://logitec.store/',
  country: 'Colombia',
  department: 'Valle del Cauca',
  municipality: 'Cali',
  copyright: '© 2026 LOGITEC. Todos los derechos reservados.',
  slogan: 'Tecnología que impulsa tu negocio',
  heroDescription: 'Soluciones y tecnología para empresas que buscan avanzar, optimizar sus procesos y fortalecer su presencia digital.',
  aboutDescription: 'Logitec es una empresa ubicada en Cali, Valle del Cauca, Colombia, con una visión orientada a la tecnología, la innovación y el desarrollo de soluciones para las necesidades actuales de las organizaciones.',
  techDescription: 'La tecnología evoluciona constantemente. En Logitec buscamos mantener una visión orientada a la innovación y a la creación de soluciones que respondan a los nuevos desafíos empresariales.',
  ctaTitle: 'Conversemos sobre tu próximo proyecto',
  ctaDescription: 'Estamos disponibles para conocer tus necesidades y encontrar oportunidades de solución.',
} as const;

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export const VALUES_DATA = [
  {
    id: 'innovacion',
    title: 'Innovación',
    iconName: 'Sparkles',
    description: 'Buscamos continuamente enfoques modernos y efectivos que permitan a las organizaciones responder con agilidad a las dinámicas del entorno.',
  },
  {
    id: 'tecnologia',
    title: 'Tecnología',
    iconName: 'Cpu',
    description: 'Concebimos la tecnología como una herramienta clave para habilitar capacidades, optimizar procesos y fortalecer operaciones.',
  },
  {
    id: 'confianza',
    title: 'Confianza',
    iconName: 'ShieldCheck',
    description: 'Construimos relaciones fundamentadas en la solidez, la transparencia y el cumplimiento estricto de los compromisos adquiridos.',
  },
  {
    id: 'compromiso',
    title: 'Compromiso',
    iconName: 'Target',
    description: 'Acompañamos a las organizaciones con dedicación profesional, seriedad y un firme enfoque en la entrega de valor.',
  },
] as const;

export const SOLUTIONS_DATA = [
  {
    id: 'soluciones-tecnologicas',
    title: 'Soluciones Tecnológicas',
    badge: 'Infraestructura y Procesos',
    shortDesc: 'Exploramos soluciones tecnológicas orientadas a las necesidades de cada organización.',
    extendedDesc: 'Identificamos herramientas y plataformas pertinentes que permitan integrar flujos de trabajo, modernizar la operación y facilitar la toma de decisiones basada en información confiable.',
  },
  {
    id: 'optimizacion',
    title: 'Optimización',
    badge: 'Eficiencia Operacional',
    shortDesc: 'Estrategias orientadas a mejorar la eficiencia, fluidez y rendimiento de los procesos empresariales.',
    extendedDesc: 'Análisis de dinámicas organizacionales para reducir fricciones operativas, agilizar tiempos de respuesta y aprovechar al máximo los recursos disponibles.',
  },
  {
    id: 'innovacion-digital',
    title: 'Innovación Digital',
    badge: 'Transformación y Futuro',
    shortDesc: 'Iniciativas para fortalecer la presencia digital y adoptar nuevas prácticas corporativas.',
    extendedDesc: 'Acompañamiento a organizaciones que buscan dar el paso hacia modelos de gestión más ágiles, conectados y preparados para los desafíos del mercado moderno.',
  },
  {
    id: 'soporte-acompanamiento',
    title: 'Soporte y Acompañamiento',
    badge: 'Respaldo Continuo',
    shortDesc: 'Atención profesional y cercana para respaldar la estabilidad y evolución de tu negocio.',
    extendedDesc: 'Canales de comunicación directos para responder inquietudes, brindar orientación oportuna y garantizar la continuidad en las iniciativas tecnológicas emprendidas.',
  },
] as const;

export const WHY_US_DATA = [
  {
    number: '01',
    title: 'Enfoque profesional',
    description: 'Desarrollamos cada iniciativa con rigurosidad técnica, metodología clara y estándares corporativos de calidad.',
  },
  {
    number: '02',
    title: 'Visión tecnológica',
    description: 'Comprendemos la evolución del entorno digital para anticipar tendencias y adoptar soluciones eficaces y pertinentes.',
  },
  {
    number: '03',
    title: 'Atención cercana',
    description: 'Mantenemos un canal de comunicación directo, transparente y personalizado con cada cliente y aliado.',
  },
  {
    number: '04',
    title: 'Orientación a resultados',
    description: 'Centramos nuestros esfuerzos en generar impacto positivo real en los objetivos estratégicos de cada organización.',
  },
] as const;
