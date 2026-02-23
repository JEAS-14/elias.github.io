export const projects = [
  {
    id: 'ecocollect',
    title: 'EcoCollect',
    category: 'Web App',
    description: 'Plataforma integral de reciclaje y sostenibilidad',
    shortDescription: 'Plataforma de reciclaje con Next.js y Tailwind',
    color: 'emerald',
    icon: '♻️',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'PostgreSQL'],
    image: '/img/Perfil.png',
    images: ['/img/Perfil.png'],
    features: [
      'Geolocalización de puntos de reciclaje',
      'Sistema de rewards y gamificación',
      'Panel de estadísticas en tiempo real',
      'Integración con proveedores',
    ],
    technologies: {
      frontend: ['Next.js 14', 'React 18', 'Tailwind CSS'],
      backend: ['Node.js', 'PostgreSQL'],
      tools: ['Figma', 'Git', 'Vercel'],
    },
    links: {
      github: 'https://github.com',
      live: 'https://ecocollect.vercel.app',
      case_study: '/case-studies/ecocollect',
    },
    metrics: {
      users: '2.5K+',
      performance: '98/100',
      uptime: '99.9%',
    },
    role: 'Full Stack Developer',
    timeline: '3 meses',
    status: 'Activo',
  },
  {
    id: 'tinkuy',
    title: 'Tinkuy',
    category: 'Analytics',
    description: 'Dashboard BI para análisis avanzado de ventas y KPIs',
    shortDescription: 'Dashboard BI para análisis de ventas y KPIs',
    color: 'blue',
    icon: '📊',
    tags: ['Power BI', 'Python', 'SQL', 'Analytics'],
    image: '/img/Perfil.png',
    images: ['/img/Perfil.png'],
    features: [
      'Visualizaciones interactivas en tiempo real',
      'Análisis predictivo con ML',
      'Exportación de reportes automática',
      'Integración con múltiples fuentes de datos',
    ],
    technologies: {
      frontend: ['Power BI', 'Excel'],
      backend: ['Python', 'SQL Server', 'AWS'],
      tools: ['DAX', 'M Language', 'Machine Learning'],
    },
    links: {
      github: 'https://github.com',
      live: 'https://tinkuy.app',
      case_study: '/case-studies/tinkuy',
    },
    metrics: {
      dataProcessed: '10M+ registros',
      reduction: '35% en tiempo de análisis',
      accuracy: '96%',
    },
    role: 'Data Analyst & BI Developer',
    timeline: '4 meses',
    status: 'Activo',
  },
  {
    id: 'wifi',
    title: 'Optimización Redes UPN',
    category: 'Infraestructura',
    description: 'Sistema de optimización de cobertura Wi-Fi con mapeo de calidad',
    shortDescription: 'Optimización de cobertura Wi-Fi y Heatmaps',
    color: 'orange',
    icon: '📡',
    tags: ['Network', 'Python', 'Raspberry Pi', 'IoT'],
    image: '/img/Perfil.png',
    images: ['/img/Perfil.png'],
    features: [
      'Mapeo de cobertura en tiempo real',
      'Detección automática de puntos muertos',
      'Algoritmo de optimización de canales',
      'Dashboard de monitoreo 24/7',
    ],
    technologies: {
      frontend: ['React', 'Leaflet'],
      backend: ['Python', 'Flask', 'InfluxDB'],
      hardware: ['Raspberry Pi', 'Analizadores RF'],
    },
    links: {
      github: 'https://github.com',
      documentation: '/docs/wifi-project',
      case_study: '/case-studies/wifi',
    },
    metrics: {
      coverage: '99.2%',
      speedIncrease: '+45%',
      usersImpacted: '3000+',
    },
    role: 'Network Engineer & Full Stack',
    timeline: '2 meses',
    status: 'Completado',
  },
  {
    id: 'matching',
    title: 'Matching Algorithm',
    category: 'Sistema',
    description: 'Motor de recomendaciones inteligente basado en IA',
    shortDescription: 'Engine de matching con machine learning',
    color: 'purple',
    icon: '🔗',
    tags: ['Machine Learning', 'Python', 'TensorFlow', 'NLP'],
    image: '/img/Perfil.png',
    images: ['/img/Perfil.png'],
    features: [
      'Algoritmos de similitud avanzados',
      'Aprendizaje continuo',
      'Predicción de compatibilidad',
      'API REST escalable',
    ],
    technologies: {
      backend: ['Python', 'TensorFlow', 'Scikit-learn'],
      database: ['PostgreSQL', 'Redis'],
      deployment: ['Docker', 'Kubernetes'],
    },
    links: {
      github: 'https://github.com',
      case_study: '/case-studies/matching',
    },
    metrics: {
      accuracy: '94%',
      latency: '<100ms',
      throughput: '10K requests/min',
    },
    role: 'ML Engineer',
    timeline: '3 meses',
    status: 'Activo',
  },
];

export const getProjectById = (id) => {
  return projects.find(p => p.id === id);
};

export const getProjectsByCategory = (category) => {
  return projects.filter(p => p.category === category);
};
