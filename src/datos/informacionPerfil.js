export const perfil = {
    nombre: 'Maximiliano',
    apellido: 'Rodriguez',
    iniciales: 'MR',
    edad: 19,
    cargo: 'Desarrollador FullStack',
    tituloAcademico: 'Analista Programador',
    especialidad: 'APIs con Spring Boot 3',
    idiomas: {
        espanol: 'Espanol - Nativo',
        ingles: 'Ingles - Intermedio'
    },
    institucion: 'Duoc UC',
    descripcion:
        'Analista Programador especializado en el diseño de APIs robustas con Spring Boot 3, seguridad JWT y experiencias web con React.',
    avatar: '/avatar.png',        // luego pondrás tu imagen en /public
    ubicacion: 'Santiago - Chile',
};

export const redes = {
    linkedin: 'https://www.linkedin.com/in/tu-usuario',
    github: 'https://github.com/tu-usuario',
};

export const principiosDesarrollo = [
    {
        titulo: 'Claridad técnica',
        detalle: 'Decisiones simples, explícitas y documentadas.',
    },
    {
        titulo: 'Calidad verificable',
        detalle: 'Testing, cobertura y análisis continuo.',
    },
];


export const experiencia = [
    {
        id: 1,
        empresa: 'Proyectos académicos y personales',
        cargo: 'Desarrollador FullStack',
        fechaInicio: '2024',
        fechaFin: 'Actualidad',
        periodo: '2024 — Actualidad',
        icono: 'experiencia',
        destacado: true,
        encabezado: 'Experiencia aplicada',
        descripcion:
            'Diseño y desarrollo de soluciones de software con separación de responsabilidades, persistencia relacional y seguridad basada en tokens.',
        logros: [
            'Implementación de APIs REST con Spring Boot 3, JPA, Hibernate y DTOs.',
            'Construcción de interfaces responsivas con React, Vite y JavaScript ES6+.',
            'Pruebas unitarias con JUnit y Mockito, cobertura con JaCoCo y análisis con SonarQube.',
        ],
        tecnologias: ['Spring Boot 3', 'React', 'Scrum'],
    },
    {
        id: 2,
        empresa: 'Práctica técnica continua',
        cargo: 'Automatización, seguridad y calidad',
        fechaInicio: '2024',
        fechaFin: 'Actualidad',
        periodo: '2024 — Actualidad',
        icono: 'herramienta',
        destacado: false,
        encabezado: 'Práctica técnica continua',
        descripcion:
            'Integración de herramientas para asegurar entregas confiables durante todo el ciclo de desarrollo.',
        logros: [
            'Control de versiones y flujos colaborativos con Git y GitHub.',
            'Evaluación de vulnerabilidades con Snyk y automatización mediante GitHub Actions.',
        ],
        tecnologias: ['Git', 'GitHub Actions', 'Snyk'],
    },
];

export const educacion = [
    {
        id: 1,
        institucion: 'Duoc UC',
        marca: 'DUOC',
        titulo: 'Analista Programador',
        periodo: 'En curso',
        estado: 'En curso',
        descripcion:
            'Formación orientada al análisis, construcción, pruebas y mantención de soluciones de software.',
    },
];

export const proyectos = [
    {
        id: 1,
        titulo: 'Nube Médica',
        categoria: 'Backend',
        categoriaVisual: 'blue',
        encabezado: 'HealthTech · API REST clínica',
        descripcion:
            'API RESTful robusta enfocada en la gestión clínica de profesionales de la salud independientes que atienden de manera online. Centraliza la administración de pacientes, citas y atención médica online y seguridad avanzada.',
        tecnologias: ['Spring Boot 3', 'Java', 'JWT Security', 'Spring Data JPA', 'MySQL', 'REST API'],
        arquitectura:
            'API REST exclusiva, sin interfaz visual web: capa de servicios desacoplada, DTOs, control de acceso por roles y persistencia transaccional con Spring Data JPA.',
        resultado:
            'Servicios clínicos centralizados y autenticación segura por tokens para perfiles profesionales.',
        repositorio: 'https://github.com/CristianHernandezF/gomez_hernandez_rodriguez_010D',
    },
    {
        id: 2,
        titulo: 'TrauMed',
        categoria: 'Desktop',
        categoriaVisual: 'green',
        encabezado: 'MedTech · Inventario desktop',
        descripcion:
            'Aplicación de escritorio desarrollada para la gestión integral de inventario y trazabilidad de insumos médicos en tiendas y clínicas veterinarias. Controla stock de insumos críticos, entradas/salidas y alertas de vencimiento.',
        tecnologias: ['Java', 'Java Swing (GUI)', 'MySQL', 'Desktop App'],
        arquitectura:
            'Aplicación de escritorio en Java Swing con acceso a datos MySQL, control de stock, registro de movimientos de entrada/salida y alertas de vencimiento.',
        resultado:
            'Control verificable del ciclo de inventario con mayor visibilidad operativa en tiendas y clínicas.',
        repositorio: 'https://github.com/maxrodriguezg',
    },
];

export const filtrosProyectos = ['Todos', 'Backend', 'Desktop', 'Spring Boot', 'Java', 'MySQL'];

export const habilidades = [
    {
        id: 'backend',
        icono: 'backend',
        titulo: 'Backend',
        descripcion: 'Arquitecturas robustas y servicios orientados a dominio.',
        habilidades: [
            { nombre: 'Java', nivel: 'Avanzado' },
            { nombre: 'Spring Boot 3', nivel: 'Avanzado' },
            { nombre: 'Spring Data JPA', nivel: 'Avanzado' },
            { nombre: 'Hibernate', nivel: 'Aplicado' },
            { nombre: 'RESTful APIs', nivel: 'Avanzado' },
            { nombre: 'DTOs', nivel: 'Aplicado' },
            { nombre: 'JWT Security', nivel: 'Aplicado' },
            { nombre: 'MySQL', nivel: 'Aplicado' },
        ],
    },
    {
        id: 'frontend',
        icono: 'frontend',
        titulo: 'Frontend',
        descripcion: 'Interfaces modernas, accesibles y responsivas.',
        habilidades: [
            { nombre: 'React', nivel: 'Aplicado' },
            { nombre: 'Vite', nivel: 'Aplicado' },
            { nombre: 'JavaScript ES6+', nivel: 'Aplicado' },
            { nombre: 'HTML5', nivel: 'Avanzado' },
            { nombre: 'CSS3', nivel: 'Aplicado' },
        ],
    },
    {
        id: 'herramientas',
        icono: 'herramientas',
        titulo: 'Tools, Testing & Seguridad',
        descripcion: 'Calidad continua, automatización y protección de aplicaciones.',
        habilidades: [
            { nombre: 'Git', nivel: 'Avanzado' },
            { nombre: 'GitHub Actions', nivel: 'Aplicado' },
            { nombre: 'Docker', nivel: 'Aplicado' },
            { nombre: 'Virtualización', nivel: 'Aplicado' },
            { nombre: 'Postman', nivel: 'Avanzado' },
            { nombre: 'Mockito', nivel: 'Aplicado' },
            { nombre: 'JUnit', nivel: 'Aplicado' },
            { nombre: 'JaCoCo', nivel: 'Aplicado' },
            { nombre: 'Snyk', nivel: 'Aplicado' },
            { nombre: 'SonarQube', nivel: 'Aplicado' },
        ],
    },
];

export const flujoIngenieria = ['Análisis', 'Diseño', 'Desarrollo', 'Testing', 'Entrega'];

export const encabezadosSecciones = {
    perfil: {
        antetitulo: 'Perfil profesional',
        titulo: 'Software con foco en resultados.',
        descripcion:
            'Desarrollo soluciones FullStack seguras, mantenibles y orientadas a resolver desafíos operativos reales.',
    },
    proyectos: {
        antetitulo: 'Portafolio técnico',
        titulo: 'Desarrollos y Proyectos',
        descripcion:
            'Productos construidos con decisiones de arquitectura claras, seguridad por diseño y una experiencia de uso consistente.',
    },
    experiencia: {
        antetitulo: 'Trayectoria',
        titulo: 'Historial de Experiencia',
        descripcion:
            'Práctica técnica, trabajo colaborativo y evolución continua aplicada a proyectos de software.',
    },
    educacion: {
        antetitulo: 'Formación',
        titulo: 'Formación Académica',
        descripcion:
            'Base académica orientada al desarrollo de software, arquitectura, calidad y metodologías de producto.',
    },
    habilidades: {
        antetitulo: 'Capacidades',
        titulo: 'Stack Técnico',
        descripcion:
            'Tecnologías y prácticas organizadas según su aplicación en el ciclo completo de desarrollo.',
    },
    contacto: {
        antetitulo: 'Comunicación',
        titulo: 'Conversemos sobre su próximo proyecto.',
        descripcion:
            'Disponible para oportunidades, colaboraciones y desafíos de desarrollo FullStack.',
    },
    apariencia: {
        antetitulo: 'Preferencias',
        titulo: 'Configuración de Apariencia',
        descripcion: 'Personalice la densidad visual y el contraste de esta experiencia.',
    },
};