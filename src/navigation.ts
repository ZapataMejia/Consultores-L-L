import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Homes',
    //   links: [
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    {
      text: 'Quiénes somos',
      links: [
        // {
        //   text: 'Características',
        //   href: getPermalink('/#features'),
        // },
        {
          text: 'Nuestra experiencia',
          href: getPermalink('/#Worked'),
        },
        {
          text: 'Nuestro proceso',
          href: getPermalink('/#process'),
        },
        // {
        //   text: 'Recursos clave',
        //   href: getPermalink('/#services'),
        // },
        {
          text: 'Todos nuestros servicios',
          href: getPermalink('/#latest-products'),
        },
      ],
    },
      




    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },

        {
  text: 'Todos nuestros servicios',
  href: '/blog',
},

    {
      text: 'Servicios Especializados',
      links: [
        {
          text: '',
          href: getBlogPermalink(),
        },
        {
          text: 'Automatización y Control Industrial',
          href: getPermalink('automatizacion-y-control-industrial'),
        },
        {
          text: 'Ingeniería Mecánica',
          href: getPermalink('ingenieria-mecanica'),
        },
        {
          text: 'Avalúos Urbanos y Rurales',
          href: getPermalink('avaluos-urbanos-y-rurales'),
        },
        {
          text: 'Ingeniería Eléctrica',
          href: getPermalink('ingenieria-electrica'),
        },
        {
          text: 'Ingeniería Civil',
          href: getPermalink('ingenieria-civil'),
        },
        {
          text: 'Consultoría y Gestión de Proyectos',
          href: getPermalink('consultoria-y-gestion-de-proyectos'),
        },
      ],
    },

//     {
//   text: 'FAQs',
//   href: '/#faqs',
// },
    // {
    //   text: 'Contactanos',
    //   href: '#',
    // },
  ],
  
actions: [
  {
    text: 'Contáctanos',
    href: getPermalink('/contact'),
    // target: '_blank',
  },
],
};



export const footerData = {
  links: [
    {
      title: 'Nosotros',
      links: [
        // { text: 'Caracteristicas', href: '/#features' },
        { text: 'Nuestra Experiencia', href: '/#Worked' },
        { text: 'Nuestro Proceso', href: '/#process' },
        // { text: 'Recursos Clave', href: '/#services' },
        // { text: 'Productos y servicios', href: '/#faqs' },
        { text: 'Testimonios', href: '/#stats' },
        { text: 'Solicitar Cotizacion', href: '/#contact' },
      ],
    },
    // {
    //   title: 'Platform',
    //   links: [
    //     { text: 'Developer API', href: '#' },
    //     { text: 'Partners', href: '#' },
    //     { text: 'Atom', href: '#' },
    //     { text: 'Electron', href: '#' },
    //     { text: 'AstroWind Desktop', href: '#' },
    //   ],
    // },
{
  title: 'Servicios',
  links: [
    { text: 'Automatización y Control Industrial', href: '/automatizacion-y-control-industrial' },
    { text: 'Ingeniería Mecánica', href: '/ingenieria-mecanica' },
    { text: 'Avalúos Urbanos y Rurales', href: '/avaluos-urbanos-y-rurales' },
    { text: 'Ingeniería Eléctrica', href: '/ingenieria-electrica' },
    { text: 'Ingeniería Civil', href: '/ingenieria-civil' },
    { text: 'Consultoría y Gestión de Proyectos', href: '/consultoria-y-gestion-de-proyectos' },
  ],
},
    {
      title: 'Empresa',
      links: [
        { text: 'Terminos y Condiciones', href: '/terms' },
        { text: 'Politica de Privacidad', href: '/privacy' },
        { text: 'Perfil Corporativo', href: '/company' },
        { text: 'Historial de Proyectos', href: '/experience' },


        // { text: 'Careers', href: '#' },
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
socialLinks: [
  { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://api.whatsapp.com/send?text=TU_TEXTO_AQUI' },
  { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/consultoreslylingenieria?igsh=bXk0dnduNmxhd20x' },
  { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ZapataMejia' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },

  // Nuevos
  { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:?subject=Revisa%20esto&body=TU_TEXTO_AQUI' },
],

  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/ZapataMejia"> ZapataMejia</a> · All rights reserved.
  `,
};
