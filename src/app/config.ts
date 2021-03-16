function makeAppConfig() {
  const AppConfig = {
    brand: 'Black Light',
    brandComplete: 'Black Light', 
    logo: 'assets/images/logos/logo.png',
    brandLink: 'https://geducativoedi.com.mx/',
    /**
     * 1.0.0
     */  
    version: '1.0.6',
    layoutBoxed: false,               // true, false
    navCollapsed: false,              // true, false
    navBehind: false,                 // true, false
    fixedHeader: true,                // true, false
    sidebarWidth: 'middle',           // small, middle, large
    theme: 'light',                   // light, gray, dark
    colorOption: '22',                // 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
    AutoCloseMobileNav: true,         // true, false. Automatically close sidenav on route change (Mobile only)
    productWebPage: 'www.blacklight.mx',
    productLink: 'http://www.blacklight.mx',
    idioma: 'es',
    idiomas: ['es', 'en'],
    //urlBaseWS: "http://localhost:5000", //Local 
    urlBaseWS: "http://3.129.9.200:5000", //Pruebas
    //urlBaseWS: "https://geerapi.blacklight.mx", //Produccion
    log: { 
      activo: true,
      nivel: 0 // 0: Ruta basica, 1: Todo
    },
    urlWhatsapp: 'https://wa.me/5215569074459',
    urlYoutube: 'https://www.youtube.com/channel/UCu6zDYWODzDa2qR2UYBXt1Q?view_as=subscriber',
    urlFacebook: 'https://www.facebook.com',
    urlLinkedin: 'https://www.linkedin.com',
    urlInstagram: 'https://www.instagram.com',
    urlTwitter: 'https://twitter.com'
  };
  return AppConfig;
}
export const APPCONFIG = makeAppConfig();

