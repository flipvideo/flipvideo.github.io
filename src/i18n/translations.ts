export type Locale = 'en' | 'es' | 'pt' | 'de' | 'fr' | 'ja' | 'zh' | 'ru';

export interface SupportedLanguage {
  code: Locale;
  label: string;
  path_prefix: string;
  ogLocale: string;
}

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
  { code: 'en', label: 'English', path_prefix: '/', ogLocale: 'en_US' },
  { code: 'es', label: 'Español', path_prefix: '/es/', ogLocale: 'es_ES' },
  { code: 'pt', label: 'Português', path_prefix: '/pt/', ogLocale: 'pt_BR' },
  { code: 'de', label: 'Deutsch', path_prefix: '/de/', ogLocale: 'de_DE' },
  { code: 'fr', label: 'Français', path_prefix: '/fr/', ogLocale: 'fr_FR' },
  { code: 'ja', label: '日本語', path_prefix: '/ja/', ogLocale: 'ja_JP' },
  { code: 'zh', label: '简体中文', path_prefix: '/zh/', ogLocale: 'zh_CN' },
  { code: 'ru', label: 'Русский', path_prefix: '/ru/', ogLocale: 'ru_RU' },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  title: string;
  description: string;
}

export interface UseCaseItem {
  title: string;
  description: string;
  badge: string;
}

export interface TranslationDictionary {
  locale: Locale;
  langName: string;
  nav: {
    home: string;
    howToUse: string;
    hireMe: string;
    languageSelectorAria: string;
    themeToggleAria: string;
    installPwa: string;
    installPwaAria: string;
    supportDeveloper: string;
    supportDeveloperAria: string;
    githubAria: string;
    breadcrumbAria: string;
  };
  pwaModal: {
    title: string;
    subtitle: string;
    iosStep1: string;
    iosStep2: string;
    desktopHint: string;
    close: string;
  };
  home: {
    title: string;
    metaDescription: string;
    h1: string;
    heroSubtitle: string;
    flipper: {
      dropzoneTitle: string;
      dropzoneSubtitle: string;
      browseButton: string;
      loadSampleButton: string;
      supportedFormats: string;
      privacyBadge: string;
      flipHorizontal: string;
      flipVertical: string;
      rotate90: string;
      rotate180: string;
      reset: string;
      downloadFlipped: string;
      changeVideo: string;
      exportingStatus: string;
      exportCompleteStatus: string;
      exportErrorStatus: string;
      activeTransformsLabel: string;
      noTransformsActive: string;
      badgeMirroredH: string;
      badgeFlippedV: string;
      badgeRotated: string;
      originalResolution: string;
      audioPreserved: string;
      cancelExport: string;
    };
    featuresSection: {
      heading: string;
      subheading: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    faqSection: {
      heading: string;
      subheading: string;
      items: FAQItem[];
    };
  };
  howToUse: {
    title: string;
    metaDescription: string;
    h1: string;
    subtitle: string;
    stepsHeading: string;
    steps: HowToStep[];
    useCasesHeading: string;
    useCasesSubheading: string;
    useCases: UseCaseItem[];
    formatsHeading: string;
    formatsText: string;
    ctaButton: string;
  };
  hireMe: {
    title: string;
    metaDescription: string;
    h1: string;
    roleBadge: string;
    introParagraph: string;
    philosophyParagraph: string;
    skillsHeading: string;
    skills: {
      title: string;
      description: string;
    }[];
    contactHeading: string;
    contactSubheading: string;
    emailLabel: string;
    copyEmailButton: string;
    emailCopiedButton: string;
    sendEmailButton: string;
    supportCoffeeButton: string;
  };
  footer: {
    tagline: string;
    privacyNote: string;
    copyright: string;
  };
}

export const translations: Record<Locale, TranslationDictionary> = {
  en: {
    locale: 'en',
    langName: 'English',
    nav: {
      home: 'Home',
      howToUse: 'How to Use',
      hireMe: 'Hire Me',
      languageSelectorAria: 'Select language',
      themeToggleAria: 'Toggle Light or Dark theme',
      installPwa: 'Add to Home Screen',
      installPwaAria: 'Add FlipVideo to Home Screen for offline use',
      supportDeveloper: 'Support the Developer',
      supportDeveloperAria: 'Support the Developer on Gumroad',
      githubAria: 'View source code on GitHub',
      breadcrumbAria: 'Breadcrumb',
    },
    pwaModal: {
      title: 'Install FlipVideo for Offline Use',
      subtitle: 'Add FlipVideo to your home screen or desktop to mirror and flip videos anytime, even without an internet connection.',
      iosStep1: '1. Tap the Share button in Safari or your mobile browser bar.',
      iosStep2: '2. Scroll down and tap "Add to Home Screen".',
      desktopHint: 'On desktop browsers (Chrome, Edge, Brave), click the install icon in the address bar.',
      close: 'Got it',
    },
    home: {
      title: 'Flip Video Online - Free Video Mirror Tool (No Upload)',
      metaDescription: 'Flip or mirror videos horizontally and vertically right in your browser. 100% free, private MP4 and WebM video flipper with zero uploads or watermarks.',
      h1: 'Flip Video Online — Mirror Horizontally or Vertically',
      heroSubtitle: 'Mirror, flip, or rotate MP4, MOV, and WebM videos directly in your browser. 100% free, no uploads, and no watermarks.',
      flipper: {
        dropzoneTitle: 'Drop your video here or click to select',
        dropzoneSubtitle: 'Instant local preview • MP4, MOV, WebM • No file size upload wait',
        browseButton: 'Select Video File',
        loadSampleButton: 'Try Sample Video',
        supportedFormats: 'Supports MP4, MOV, WebM (H.264, VP8, VP9)',
        privacyBadge: '100% Private — Processed locally on your device',
        flipHorizontal: 'Flip Horizontal (Mirror)',
        flipVertical: 'Flip Vertical (Upside Down)',
        rotate90: 'Rotate 90°',
        rotate180: 'Rotate 180°',
        reset: 'Reset',
        downloadFlipped: 'Download Flipped Video',
        changeVideo: 'Load Another Video',
        exportingStatus: 'Rendering flipped video locally in your browser...',
        exportCompleteStatus: 'Export complete! Your flipped video has been downloaded.',
        exportErrorStatus: 'An error occurred during video export. Please try another file.',
        activeTransformsLabel: 'Active Orientation:',
        noTransformsActive: 'Original Orientation',
        badgeMirroredH: 'Mirrored Horizontally',
        badgeFlippedV: 'Flipped Vertically',
        badgeRotated: 'Rotated',
        originalResolution: 'Resolution',
        audioPreserved: 'Original Audio Intact',
        cancelExport: 'Cancel',
      },
      featuresSection: {
        heading: 'Why Flip and Mirror Videos with FlipVideo?',
        subheading: 'Engineered for creators, educators, and everyday users who want instant video orientation fixes without sacrificing privacy or quality.',
        items: [
          {
            title: 'Zero Server Uploads (100% Private)',
            description: 'Your video files never leave your computer or phone. Every horizontal mirror, vertical flip, and rotation happens inside your browser using hardware-accelerated canvas rendering.',
          },
          {
            title: 'Fix Backwards Selfie Videos Instantly',
            description: 'Unmirror front-camera recordings from iPhone, Android, or webcams so text on shirts, signs, and whiteboards reads naturally from left to right.',
          },
          {
            title: 'No Watermarks & Audio Preserved',
            description: 'Export clean, full-resolution video clips with your original audio track synchronized and intact—completely free with zero branding overlays.',
          },
        ],
      },
      faqSection: {
        heading: 'Frequently Asked Questions',
        subheading: 'Everything you need to know about flipping, mirroring, and rotating videos in your browser.',
        items: [
          {
            question: 'How do I fix a backwards selfie or front-camera video?',
            answer: 'Drop your video into FlipVideo above and click "Flip Horizontal (Mirror)". This reverses the left-to-right axis of your front-camera recording so backwards text, logos, and hand gestures appear in their natural orientation. Click "Download Flipped Video" to save the corrected file.',
          },
          {
            question: 'What is the difference between flipping (mirroring) and rotating a video?',
            answer: 'Flipping reflects a video across an axis like a mirror—Flip Horizontal swaps left and right, while Flip Vertical swaps top and bottom. Rotating turns the entire video frame clockwise by 90° or 180° without creating a mirror reflection. If a video was recorded upside down without mirroring, use Rotate 180°; if it looks mirrored like a selfie, use Flip Horizontal.',
          },
          {
            question: 'Are my videos uploaded to a server when I flip them?',
            answer: 'No. FlipVideo runs 100% locally inside your web browser using HTML5 Video, hardware-accelerated Canvas 2D transforms, Web Audio API, and MediaRecorder/WebCodecs. Your video data is never transmitted over the internet or stored on any cloud server.',
          },
          {
            question: 'Does flipping a video reduce quality or add a watermark?',
            answer: 'FlipVideo never adds watermarks, logos, or time limits. The export engine renders at your source video’s native resolution with a high-bitrate video stream and preserves the original audio track so your downloaded clip stays crisp and clear.',
          },
        ],
      },
    },
    howToUse: {
      title: 'How to Flip and Mirror Videos Online Free - FlipVideo',
      metaDescription: 'Step-by-step guide to fix backwards selfie videos, flip upside-down recordings, and mirror MP4, MOV, or WebM files privately in your browser.',
      h1: 'How to Flip and Mirror Any Video Online Without Uploading',
      subtitle: 'Learn how to unmirror front-camera selfies, fix upside-down clips, mirror dance tutorials, and rotate video orientation in seconds.',
      stepsHeading: '3 Simple Steps to Flip Your Video',
      steps: [
        {
          title: '1. Select or Drag & Drop Your Video',
          description: 'Open the FlipVideo workspace on the home page and drop an MP4, MOV, or WebM file into the box—or click "Select Video File" to browse from your device. Your video loads instantly with zero upload delay.',
        },
        {
          title: '2. Choose Horizontal Mirror, Vertical Flip, or Rotation',
          description: 'Click "Flip Horizontal (Mirror)" to swap left and right, "Flip Vertical (Upside Down)" to invert top and bottom, or "Rotate 90° / 180°" to change frame orientation. Preview the smooth GPU transition in real time.',
        },
        {
          title: '3. Export & Download Locally',
          description: 'Click "Download Flipped Video". FlipVideo renders the transformed frames and synchronizes your original audio directly in your browser, saving a clean, watermark-free video to your device.',
        },
      ],
      useCasesHeading: 'Common Video Flipping & Orientation Use Cases',
      useCasesSubheading: 'Choose the exact transform for your recording scenario:',
      useCases: [
        {
          badge: 'Flip Horizontal (Mirror)',
          title: 'Unmirroring Backwards Selfie & Webcam Videos',
          description: 'Smartphone front cameras and laptop webcams often save videos mirrored so they match what you saw on screen while recording. That makes street signs, book covers, and t-shirt lettering appear backwards. Applying a horizontal flip restores true-to-life left-to-right readability.',
        },
        {
          badge: 'Flip Vertical / Rotate 180°',
          title: 'Fixing Upside-Down Action Cam & Phone Recordings',
          description: 'When a mounted GoPro, dashcam, or smartphone gyro locks in the wrong direction, footage plays upside down. Use Rotate 180° to turn the frame right-side up while keeping left/right text readable, or use Flip Vertical if you need a top-to-bottom reflection.',
        },
        {
          badge: 'Left-to-Right Mirroring',
          title: 'Mirroring Choreography, Fitness & Instrument Tutorials',
          description: 'Dancers, guitarists, and fitness learners can mirror instructional videos horizontally so they can follow the instructor’s movements as if looking into a studio mirror.',
        },
        {
          badge: 'Rotate 90° / 180°',
          title: 'Correcting Sideways Portrait vs. Landscape Orientation',
          description: 'If a vertical reel or short was saved sideways as a landscape clip, click Rotate 90° until the video stands upright with its proper aspect ratio.',
        },
      ],
      formatsHeading: 'Supported Formats & Offline Capability',
      formatsText: 'FlipVideo natively processes MP4 (H.264/AAC), MOV (QuickTime), and WebM (VP8/VP9/Opus) across desktop and mobile browsers. You can also click "Add to Home Screen" in the top bar to install FlipVideo as an offline Progressive Web App (PWA).',
      ctaButton: 'Open Video Flipper Workspace',
    },
    hireMe: {
      title: 'Hire Kishara Dilshan - Web & WASM Developer | FlipVideo',
      metaDescription: 'Need an ultra-fast Astro, React, or Next.js web app or client-side WebAssembly tool? Hire Kishara Dilshan for custom SEO-ready IT solutions.',
      h1: 'Available for Freelance Projects',
      roleBadge: 'Kishara Dilshan • Full-Stack Web & Client-Side Media/WASM Developer',
      introParagraph: 'Hi, I am Kishara Dilshan—the creator and developer behind FlipVideo. I design and build ultra-fast, privacy-first web applications, browser-based media processing tools, and technical SEO architectures that rank cleanly and convert.',
      philosophyParagraph: 'Whether you need a zero-server WebAssembly / WebCodecs utility, a high-converting SaaS frontend in Astro, React, or Next.js, or an internationalized web platform engineered for Core Web Vitals, I deliver production-ready code with meticulous attention to performance.',
      skillsHeading: 'What I Can Build for You',
      skills: [
        {
          title: 'Client-Side Video, Audio & WebAssembly Tools',
          description: 'Browser-native editors, FFmpeg.wasm pipelines, Canvas/WebGL transformers, WebCodecs exporters, and offline-capable Progressive Web Apps.',
        },
        {
          title: 'High-Performance Astro, React & Next.js Apps',
          description: 'Islands architecture websites, interactive dashboards, and full-stack TypeScript applications optimized for instant load times and zero CLS.',
        },
        {
          title: 'Technical SEO & Multi-Language Architecture',
          description: 'Complete semantic HTML5, JSON-LD structured data, multi-locale hreflang routing, automated XML sitemaps, and Core Web Vitals optimization.',
        },
      ],
      contactHeading: 'Let’s Discuss Your Project',
      contactSubheading: 'Reach out directly via email. Copy my address below with one click or open your mail client:',
      emailLabel: 'Direct Email',
      copyEmailButton: 'Copy Email',
      emailCopiedButton: 'Copied to Clipboard!',
      sendEmailButton: 'Send an Email',
      supportCoffeeButton: 'Buy Me a Coffee on Gumroad',
    },
    footer: {
      tagline: '100% Client-Side Video Flipper & Mirror Tool. No uploads, no watermarks, free forever.',
      privacyNote: 'All video processing runs locally inside your browser.',
      copyright: '© 2026 FlipVideo by Kishara Dilshan. Released under the MIT License.',
    },
  },
  es: {
    locale: 'es',
    langName: 'Español',
    nav: {
      home: 'Inicio',
      howToUse: 'Cómo Usar',
      hireMe: 'Contrátame',
      languageSelectorAria: 'Seleccionar idioma',
      themeToggleAria: 'Cambiar tema claro u oscuro',
      installPwa: 'Añadir a Inicio',
      installPwaAria: 'Instalar FlipVideo en la pantalla de inicio para uso sin conexión',
      supportDeveloper: 'Apoyar al Desarrollador',
      supportDeveloperAria: 'Apoyar al desarrollador en Gumroad',
      githubAria: 'View source code on GitHub',
      breadcrumbAria: 'Ruta de navegación',
    },
    pwaModal: {
      title: 'Instalar FlipVideo para Uso Sin Conexión',
      subtitle: 'Añade FlipVideo a tu pantalla de inicio o escritorio para voltear y reflejar videos sin conexión a internet.',
      iosStep1: '1. Toca el botón Compartir en Safari o en tu navegador móvil.',
      iosStep2: '2. Desplázate y selecciona "Añadir a pantalla de inicio".',
      desktopHint: 'En escritorio (Chrome, Edge, Brave), haz clic en el icono de instalación en la barra de direcciones.',
      close: 'Entendido',
    },
    home: {
      title: 'Voltear Video Online Gratis - Efecto Espejo Sin Subir',
      metaDescription: 'Voltea o refleja videos horizontal y verticalmente en tu navegador. Herramienta 100% gratis y privada para MP4, MOV y WebM sin marcas de agua.',
      h1: 'Voltear Video Online — Espejo Horizontal o Vertical',
      heroSubtitle: 'Refleja, voltea o gira videos MP4, MOV y WebM directamente en tu navegador. 100% gratis, sin subidas y sin marcas de agua.',
      flipper: {
        dropzoneTitle: 'Arrastra tu video aquí o haz clic para seleccionar',
        dropzoneSubtitle: 'Vista previa local instantánea • MP4, MOV, WebM • Sin esperas de subida',
        browseButton: 'Seleccionar Video',
        loadSampleButton: 'Probar Video Demo',
        supportedFormats: 'Compatible con MP4, MOV, WebM (H.264, VP8, VP9)',
        privacyBadge: '100% Privado — Procesado localmente en tu dispositivo',
        flipHorizontal: 'Voltear Horizontal (Espejo)',
        flipVertical: 'Voltear Vertical (Al Revés)',
        rotate90: 'Girar 90°',
        rotate180: 'Girar 180°',
        reset: 'Restablecer',
        downloadFlipped: 'Descargar Video Volteado',
        changeVideo: 'Cargar Otro Video',
        exportingStatus: 'Renderizando video volteado localmente en tu navegador...',
        exportCompleteStatus: '¡Exportación completada! Tu video se ha descargado.',
        exportErrorStatus: 'Ocurrió un error al exportar el video. Intenta con otro archivo.',
        activeTransformsLabel: 'Orientación Activa:',
        noTransformsActive: 'Orientación Original',
        badgeMirroredH: 'Espejo Horizontal',
        badgeFlippedV: 'Volteo Vertical',
        badgeRotated: 'Girado',
        originalResolution: 'Resolución',
        audioPreserved: 'Audio Original Intacto',
        cancelExport: 'Cancelar',
      },
      featuresSection: {
        heading: '¿Por Qué Voltear y Reflejar Videos con FlipVideo?',
        subheading: 'Diseñado para creadores y usuarios que buscan corregir la orientación de sus videos al instante con total privacidad.',
        items: [
          {
            title: 'Cero Subidas al Servidor (100% Privado)',
            description: 'Tus archivos nunca salen de tu dispositivo. Todo el efecto espejo horizontal, volteo vertical y rotación se ejecuta en tu navegador.',
          },
          {
            title: 'Corrige Videos Selfie Invertidos',
            description: 'Quita el efecto espejo de la cámara frontal para que textos, carteles y logotipos se lean correctamente de izquierda a derecha.',
          },
          {
            title: 'Sin Marcas de Agua y con Audio',
            description: 'Exporta clips en su resolución nativa conservando la pista de audio original sincronizada y sin marcas de agua.',
          },
        ],
      },
      faqSection: {
        heading: 'Preguntas Frecuentes',
        subheading: 'Todo lo que necesitas saber sobre cómo voltear, reflejar y girar videos en tu navegador.',
        items: [
          {
            question: '¿Cómo corrijo un video selfie invertido de la cámara frontal?',
            answer: 'Carga tu video en FlipVideo y pulsa "Voltear Horizontal (Espejo)". Esto invierte el eje izquierdo-derecho para que el texto y los gestos se vean en su orientación real. Luego pulsa "Descargar Video Volteado".',
          },
          {
            question: '¿Cuál es la diferencia entre voltear (espejo) y girar un video?',
            answer: 'Voltear refleja el video como un espejo (Horizontal cambia izquierda por derecha; Vertical cambia arriba por abajo). Girar rota el cuadro 90° o 180° en sentido horario sin crear un reflejo espejo.',
          },
          {
            question: '¿Mis videos se suben a un servidor cuando los volteo?',
            answer: 'No. FlipVideo funciona 100% localmente dentro de tu navegador web mediante HTML5 Video, Canvas 2D y Web Audio API. Tus videos jamás se envían a internet.',
          },
          {
            question: '¿Voltear un video reduce la calidad o añade marca de agua?',
            answer: 'FlipVideo nunca añade marcas de agua ni límites. El motor exporta a la resolución nativa de tu video con alta tasa de bits y conserva el audio original.',
          },
        ],
      },
    },
    howToUse: {
      title: 'Cómo Voltear y Reflejar Videos Online Gratis | FlipVideo',
      metaDescription: 'Guía paso a paso para corregir videos selfie invertidos, girar grabaciones al revés y reflejar archivos MP4, MOV o WebM gratis en tu navegador.',
      h1: 'Cómo Voltear y Reflejar Cualquier Video Online Sin Subirlo',
      subtitle: 'Aprende a corregir selfies con efecto espejo, enderezar videos grabados al revés y rotar archivos MP4, MOV o WebM en segundos.',
      stepsHeading: '3 Pasos Sencillos para Voltear tu Video',
      steps: [
        {
          title: '1. Selecciona o Arrastra tu Video',
          description: 'Abre FlipVideo y arrastra un archivo MP4, MOV o WebM al recuadro. El video se carga al instante desde tu dispositivo sin subidas.',
        },
        {
          title: '2. Elige Espejo Horizontal, Volteo Vertical o Rotación',
          description: 'Haz clic en "Voltear Horizontal (Espejo)", "Voltear Vertical (Al Revés)" o "Girar 90° / 180°" y comprueba la vista previa fluida en tiempo real.',
        },
        {
          title: '3. Exporta y Descarga Localmente',
          description: 'Pulsa "Descargar Video Volteado" para procesar el video con su audio intacto directamente en tu navegador y guardarlo sin marcas de agua.',
        },
      ],
      useCasesHeading: 'Casos de Uso Frecuentes',
      useCasesSubheading: 'Elige la transformación exacta para tu grabación:',
      useCases: [
        {
          badge: 'Voltear Horizontal',
          title: 'Corregir Selfies y Grabaciones de Webcam Invertidas',
          description: 'Las cámaras frontales suelen guardar el video reflejado, haciendo que las letras se vean al revés. El volteo horizontal restaura la lectura natural.',
        },
        {
          badge: 'Voltear Vertical / Girar 180°',
          title: 'Arreglar Videos Grabados Cabeza Abajo',
          description: 'Si grabaste con el teléfono o cámara de acción al revés, usa Girar 180° para enderezar la imagen o Voltear Vertical para reflejar el eje vertical.',
        },
        {
          badge: 'Espejo Izquierda a Derecha',
          title: 'Tutoriales de Baile, Coreografías yDeporte',
          description: 'Refleja videos de entrenamiento horizontalmente para imitar los movimientos del instructor como frente a un espejo.',
        },
        {
          badge: 'Girar 90° / 180°',
          title: 'Cambiar Orientación Vertical y Horizontal',
          description: 'Corrige clips verticales guardados de lado rotando 90° hasta obtener la proporción correcta.',
        },
      ],
      formatsHeading: 'Formatos Compatibles y Modo Sin Conexión',
      formatsText: 'FlipVideo procesa archivos MP4, MOV y WebM en ordenadores y móviles. Además, puedes pulsar "Añadir a Inicio" para instalar la aplicación PWA y usarla sin internet.',
      ctaButton: 'Ir a la Herramienta para Voltear Videos',
    },
    hireMe: {
      title: 'Contratar a Kishara Dilshan - Desarrollador Web y WASM',
      metaDescription: '¿Buscas una aplicación web ultrarrápida en Astro, React o Next.js con WebAssembly? Contrata a Kishara Dilshan para soluciones web a medida.',
      h1: 'Disponible para Proyectos Freelance',
      roleBadge: 'Kishara Dilshan • Desarrollador Full-Stack Web y Multimedia/WASM',
      introParagraph: 'Hola, soy Kishara Dilshan, creador de FlipVideo. Desarrollo aplicaciones web ultrarrápidas, herramientas multimedia que se ejecutan en el navegador y arquitecturas de SEO técnico listas para posicionar.',
      philosophyParagraph: 'Si necesitas una utilidad WebAssembly / WebCodecs sin servidor, una interfaz SaaS en Astro, React o Next.js, o una plataforma multilingüe optimizada para Core Web Vitals, puedo ayudarte.',
      skillsHeading: 'Soluciones que Puedo Construir',
      skills: [
        {
          title: 'Herramientas de Video, Audio y WebAssembly',
          description: 'Editores nativos en el navegador, pipelines con Canvas/WebGL, WebCodecs y aplicaciones PWA offline.',
        },
        {
          title: 'Aplicaciones Astro, React y Next.js',
          description: 'Sitios con arquitectura de islas y aplicaciones TypeScript de carga instantánea y cero CLS.',
        },
        {
          title: 'SEO Técnico y Arquitectura Multilingüe',
          description: 'HTML5 semántico, datos estructurados JSON-LD, rutas hreflang, sitemaps XML y optimización Core Web Vitals.',
        },
      ],
      contactHeading: 'Hablemos de tu Proyecto',
      contactSubheading: 'Contáctame directamente por correo electrónico. Copia mi dirección con un clic:',
      emailLabel: 'Correo Directo',
      copyEmailButton: 'Copiar Correo',
      emailCopiedButton: '¡Correo Copiado!',
      sendEmailButton: 'Enviar Correo',
      supportCoffeeButton: 'Invítame un Café en Gumroad',
    },
    footer: {
      tagline: 'Herramienta 100% local para voltear y reflejar videos. Sin subidas ni marcas de agua.',
      privacyNote: 'Todo el procesamiento de video se realiza localmente en tu navegador.',
      copyright: '© 2026 FlipVideo por Kishara Dilshan. Publicado bajo Licencia MIT.',
    },
  },
  pt: {
    locale: 'pt',
    langName: 'Português',
    nav: {
      home: 'Início',
      howToUse: 'Como Usar',
      hireMe: 'Contrate-me',
      languageSelectorAria: 'Selecionar idioma',
      themeToggleAria: 'Alternar tema claro ou escuro',
      installPwa: 'Adicionar à Tela',
      installPwaAria: 'Adicionar FlipVideo à tela inicial para uso offline',
      supportDeveloper: 'Apoiar o Criador',
      supportDeveloperAria: 'Apoiar o desenvolvedor no Gumroad',
      githubAria: 'View source code on GitHub',
      breadcrumbAria: 'Navegação estrutural',
    },
    pwaModal: {
      title: 'Instalar FlipVideo para Uso Offline',
      subtitle: 'Adicione o FlipVideo à tela inicial para espelhar e inverter vídeos mesmo sem internet.',
      iosStep1: '1. Toque no botão Compartilhar no Safari ou navegador móvel.',
      iosStep2: '2. Role para baixo e toque em "Adicionar à Tela de Início".',
      desktopHint: 'No computador (Chrome, Edge, Brave), clique no ícone de instalação na barra de endereços.',
      close: 'Entendi',
    },
    home: {
      title: 'Inverter Vídeo Online Grátis - Espelhar Sem Upload Web',
      metaDescription: "Inverta ou espelhe vídeos horizontal e verticalmente no navegador. Ferramenta 100% gratuita e privada para MP4, MOV e WebM sem marca d'água.",
      h1: 'Inverter Vídeo Online — Espelhar Horizontal ou Vertical',
      heroSubtitle: "Espelhe, inverta ou gire vídeos MP4, MOV e WebM diretamente no seu navegador. 100% grátis, sem uploads e sem marca d'água.",
      flipper: {
        dropzoneTitle: 'Arraste seu vídeo aqui ou clique para selecionar',
        dropzoneSubtitle: 'Prévia local instantânea • MP4, MOV, WebM • Zero espera de upload',
        browseButton: 'Selecionar Arquivo de Vídeo',
        loadSampleButton: 'Testar Vídeo Demo',
        supportedFormats: 'Suporta MP4, MOV, WebM (H.264, VP8, VP9)',
        privacyBadge: '100% Privado — Processado localmente no seu dispositivo',
        flipHorizontal: 'Inverter Horizontal (Espelhar)',
        flipVertical: 'Inverter Vertical (Ponta-Cabeça)',
        rotate90: 'Girar 90°',
        rotate180: 'Girar 180°',
        reset: 'Redefinir',
        downloadFlipped: 'Baixar Vídeo Invertido',
        changeVideo: 'Carregar Outro Vídeo',
        exportingStatus: 'Renderizando vídeo invertido localmente no navegador...',
        exportCompleteStatus: 'Exportação concluída! Seu vídeo foi baixado.',
        exportErrorStatus: 'Ocorreu um erro ao exportar o vídeo. Tente outro arquivo.',
        activeTransformsLabel: 'Orientação Ativa:',
        noTransformsActive: 'Orientação Original',
        badgeMirroredH: 'Espelhado Horizontal',
        badgeFlippedV: 'Invertido Vertical',
        badgeRotated: 'Girado',
        originalResolution: 'Resolução',
        audioPreserved: 'Áudio Original Intacto',
        cancelExport: 'Cancelar',
      },
      featuresSection: {
        heading: 'Por Que Espelhar e Inverter Vídeos com o FlipVideo?',
        subheading: 'Criado para quem precisa corrigir a orientação de vídeos instantaneamente sem abrir mão da privacidade.',
        items: [
          {
            title: 'Zero Upload para Servidores (100% Privado)',
            description: 'Seus vídeos nunca saem do seu aparelho. O espelhamento horizontal, inversão vertical e rotação acontecem dentro do navegador.',
          },
          {
            title: 'Corrija Vídeos de Selfie Invertidos',
            description: 'Desfaça o efeito espelho da câmera frontal para que textos em camisetas e placas fiquem legíveis da esquerda para a direita.',
          },
          {
            title: "Sem Marca d'Água e com Áudio Original",
            description: "Exporte vídeos nítidos com a faixa de áudio original sincronizada e sem nenhuma marca d'água.",
          },
        ],
      },
      faqSection: {
        heading: 'Perguntas Frequentes',
        subheading: 'Tire suas dúvidas sobre como inverter, espelhar e girar vídeos no navegador.',
        items: [
          {
            question: 'Como corrigir um vídeo de selfie invertido da câmera frontal?',
            answer: 'Carregue seu vídeo no FlipVideo acima e clique em "Inverter Horizontal (Espelhar)". Isso corrige o eixo esquerda-direita para que textos e logotipos apareçam na direção normal. Depois clique em "Baixar Vídeo Invertido".',
          },
          {
            question: 'Qual a diferença entre inverter (espelhar) e girar um vídeo?',
            answer: 'Inverter cria um reflexo em espelho (Horizontal troca esquerda e direita; Vertical troca topo e base). Girar roda o quadro em 90° ou 180° no sentido horário sem espelhar a imagem.',
          },
          {
            question: 'Meus vídeos são enviados para algum servidor?',
            answer: 'Não. O FlipVideo executa 100% localmente no seu navegador usando HTML5 Video, Canvas 2D e Web Audio API. Seus arquivos nunca são enviados pela internet.',
          },
          {
            question: "Inverter o vídeo reduz a qualidade ou adiciona marca d'água?",
            answer: "O FlipVideo nunca adiciona marca d'água. A exportação mantém a resolução original do seu vídeo com alta taxa de bits e preserva o áudio original.",
          },
        ],
      },
    },
    howToUse: {
      title: 'Como Inverter e Espelhar Vídeos Online Grátis | FlipVideo',
      metaDescription: 'Guia passo a passo para corrigir vídeos de selfie invertidos, virar gravações de cabeça para baixo e espelhar MP4, MOV ou WebM no navegador.',
      h1: 'Como Inverter e Espelhar Qualquer Vídeo Online Sem Upload',
      subtitle: 'Aprenda a tirar o efeito espelho de selfies, desvirar gravações de ponta-cabeça e girar vídeos MP4, MOV e WebM em segundos.',
      stepsHeading: '3 Passos Simples para Inverter seu Vídeo',
      steps: [
        {
          title: '1. Selecione ou Arraste seu Vídeo',
          description: 'Abra o FlipVideo na página inicial e solte um arquivo MP4, MOV ou WebM. O carregamento é imediato e 100% local.',
        },
        {
          title: '2. Escolha Espelhar Horizontal, Vertical ou Girar',
          description: 'Clique em "Inverter Horizontal (Espelhar)", "Inverter Vertical" ou "Girar 90° / 180°" e veja a transição suave em tempo real.',
        },
        {
          title: '3. Exporte e Baixe no Dispositivo',
          description: "Clique em \"Baixar Vídeo Invertido\" para salvar o arquivo processado com áudio original e sem marca d'água.",
        },
      ],
      useCasesHeading: 'Principais Casos de Uso',
      useCasesSubheading: 'Escolha a transformação ideal para sua necessidade:',
      useCases: [
        {
          badge: 'Inverter Horizontal',
          title: 'Desespilhar Selfies e Vídeos de Webcam',
          description: 'Câmeras frontais costumam salvar vídeos espelhados, deixando textos ao contrário. A inversão horizontal corrige a leitura imediatamente.',
        },
        {
          badge: 'Inverter Vertical / Girar 180°',
          title: 'Corrigir Gravações de Cabeça para Baixo',
          description: 'Se a câmera gravou invertida, use Girar 180° para deixar o vídeo em pé ou Inverter Vertical para refletir o eixo superior/inferior.',
        },
        {
          badge: 'Espelhamento Esquerda-Direita',
          title: 'Coreografias de Dança e Aulas Práticas',
          description: 'Espelhe tutoriais de dança ou instrumentos para acompanhar os movimentos do professor como em um espelho.',
        },
        {
          badge: 'Girar 90° / 180°',
          title: 'Ajustar Vídeo Retrato vs. Paisagem',
          description: 'Corrija vídeos gravados de lado girando 90° até ficarem na orientação vertical ou horizontal correta.',
        },
      ],
      formatsHeading: 'Formatos Suportados e Uso Offline',
      formatsText: 'Compatível com MP4, MOV e WebM no celular e computador. Clique em "Adicionar à Tela" para instalar o PWA e usar offline.',
      ctaButton: 'Abrir Ferramenta de Inverter Vídeo',
    },
    hireMe: {
      title: 'Contratar Kishara Dilshan - Desenvolvedor Web & WASM',
      metaDescription: 'Precisa de uma aplicação web ultrarrápida em Astro, React ou Next.js com WebAssembly? Contrate Kishara Dilshan para soluções web sob medida.',
      h1: 'Disponível para Projetos Freelance',
      roleBadge: 'Kishara Dilshan • Desenvolvedor Full-Stack Web & Mídia/WASM',
      introParagraph: 'Olá, sou Kishara Dilshan, criador do FlipVideo. Desenvolvo aplicações web ultrarrápidas, ferramentas de mídia que rodam 100% no navegador e arquiteturas de SEO técnico de alta performance.',
      philosophyParagraph: 'Se você precisa de uma ferramenta WebAssembly / WebCodecs client-side, uma aplicação SaaS em Astro, React ou Next.js ou um site multilíngue otimizado para Core Web Vitals, estou pronto para ajudar.',
      skillsHeading: 'O Que Posso Desenvolver para Você',
      skills: [
        {
          title: 'Ferramentas de Vídeo, Áudio e WebAssembly',
          description: 'Editores no navegador, processamento via Canvas/WebGL, WebCodecs e Progressive Web Apps offline.',
        },
        {
          title: 'Aplicações Astro, React e Next.js',
          description: 'Sites com arquitetura de ilhas e aplicações TypeScript otimizadas para carregamento instantâneo.',
        },
        {
          title: 'SEO Técnico e Arquitetura Internacional (i18n)',
          description: 'HTML5 semântico, JSON-LD, rotas hreflang, sitemaps XML planos e pontuação máxima em Core Web Vitals.',
        },
      ],
      contactHeading: 'Vamos Conversar sobre seu Projeto',
      contactSubheading: 'Entre em contato diretamente por e-mail. Copie meu endereço com um clique:',
      emailLabel: 'E-mail Direto',
      copyEmailButton: 'Copiar E-mail',
      emailCopiedButton: 'E-mail Copiado!',
      sendEmailButton: 'Enviar E-mail',
      supportCoffeeButton: 'Pague-me um Café no Gumroad',
    },
    footer: {
      tagline: "Ferramenta 100% local para inverter e espelhar vídeos. Sem uploads e sem marca d'água.",
      privacyNote: 'Todo o processamento de vídeo ocorre localmente no seu navegador.',
      copyright: '© 2026 FlipVideo por Kishara Dilshan. Licenciado sob MIT.',
    },
  },
  de: {
    locale: 'de',
    langName: 'Deutsch',
    nav: {
      home: 'Startseite',
      howToUse: 'Anleitung',
      hireMe: 'Projektanfrage',
      languageSelectorAria: 'Sprache auswählen',
      themeToggleAria: 'Helles oder dunkles Design umschalten',
      installPwa: 'App Installieren',
      installPwaAria: 'FlipVideo für die Offline-Nutzung zum Startbildschirm hinzufügen',
      supportDeveloper: 'Entwickler Unterstützen',
      supportDeveloperAria: 'Unterstützen Sie den Entwickler auf Gumroad',
      githubAria: 'View source code on GitHub',
      breadcrumbAria: 'Brotkrümelnavigation',
    },
    pwaModal: {
      title: 'FlipVideo für Offline-Nutzung installieren',
      subtitle: 'Fügen Sie FlipVideo zu Ihrem Startbildschirm hinzu, um Videos jederzeit auch ohne Internetverbindung zu spiegeln.',
      iosStep1: '1. Tippen Sie in Safari auf das Teilen-Symbol.',
      iosStep2: '2. Wählen Sie „Zum Home-Bildschirm“ aus.',
      desktopHint: 'Klicken Sie am Desktop (Chrome, Edge, Brave) auf das Installationssymbol in der Adressleiste.',
      close: 'Verstanden',
    },
    home: {
      title: 'Video Online Spiegeln - Kostenloses Tool (Ohne Upload)',
      metaDescription: 'Spiegeln oder drehen Sie Videos horizontal und vertikal direkt im Browser. 100% kostenloser MP4-, MOV- und WebM-Flipper ohne Server-Upload.',
      h1: 'Video Online Spiegeln — Horizontal oder Vertikal Drehen',
      heroSubtitle: 'Spiegeln, wenden oder drehen Sie MP4-, MOV- und WebM-Videos direkt in Ihrem Browser. 100% kostenlos, ohne Upload und ohne Wasserzeichen.',
      flipper: {
        dropzoneTitle: 'Video hier ablegen oder klicken zum Auswählen',
        dropzoneSubtitle: 'Sofortige lokale Vorschau • MP4, MOV, WebM • Keine Upload-Wartezeit',
        browseButton: 'Videodatei Auswählen',
        loadSampleButton: 'Beispielvideo Testen',
        supportedFormats: 'Unterstützt MP4, MOV, WebM (H.264, VP8, VP9)',
        privacyBadge: '100% Privat — Lokale Verarbeitung auf Ihrem Gerät',
        flipHorizontal: 'Horizontal Spiegeln',
        flipVertical: 'Vertikal Spiegeln (Kopfstehen)',
        rotate90: 'Um 90° Drehen',
        rotate180: 'Um 180° Drehen',
        reset: 'Zurücksetzen',
        downloadFlipped: 'Gespiegeltes Video Herunterladen',
        changeVideo: 'Anderes Video Laden',
        exportingStatus: 'Gespiegeltes Video wird lokal im Browser gerendert...',
        exportCompleteStatus: 'Export abgeschlossen! Ihr Video wurde heruntergeladen.',
        exportErrorStatus: 'Beim Video-Export ist ein Fehler aufgetreten. Bitte andere Datei testen.',
        activeTransformsLabel: 'Aktive Ausrichtung:',
        noTransformsActive: 'Originalausrichtung',
        badgeMirroredH: 'Horizontal Gespiegelt',
        badgeFlippedV: 'Vertikal Gespiegelt',
        badgeRotated: 'Gedreht',
        originalResolution: 'Auflösung',
        audioPreserved: 'Originalton Erhalten',
        cancelExport: 'Abbrechen',
      },
      featuresSection: {
        heading: 'Warum Videos mit FlipVideo spiegeln und drehen?',
        subheading: 'Entwickelt für schnelle, verlustfreie Korrekturen der Videoausrichtung bei maximalem Datenschutz.',
        items: [
          {
            title: 'Kein Server-Upload (100% Datenschutz)',
            description: 'Ihre Videodateien verlassen niemals Ihr Gerät. Jede Spiegelung und Drehung erfolgt direkt im Browser über Hardware-beschleunigtes Canvas.',
          },
          {
            title: 'Spiegelverkehrte Selfie-Videos Korrigieren',
            description: 'Entspiegeln Sie Frontkamera-Aufnahmen, damit Schriften auf Kleidung, Schildern und Tafeln wieder richtig lesbar sind.',
          },
          {
            title: 'Ohne Wasserzeichen & Mit Originalton',
            description: 'Exportieren Sie Videos in voller Auflösung inklusive synchroner Audiospur – komplett kostenlos und ohne Wasserzeichen.',
          },
        ],
      },
      faqSection: {
        heading: 'Häufig gestellte Fragen (FAQ)',
        subheading: 'Alles Wichtige zum Spiegeln, Wenden und Drehen von Videos im Browser.',
        items: [
          {
            question: 'Wie korrigiere ich ein spiegelverkehrtes Selfie- oder Frontkamera-Video?',
            answer: 'Laden Sie Ihr Video oben in FlipVideo und klicken Sie auf „Horizontal Spiegeln“. Dadurch werden Links und Rechts vertauscht, sodass spiegelverkehrte Schrift wieder normal lesbar ist. Klicken Sie anschließend auf „Gespiegeltes Video Herunterladen“.',
          },
          {
            question: 'Was ist der Unterschied zwischen Video spiegeln und Video drehen?',
            answer: 'Beim Spiegeln wird das Bild an einer Achse reflektiert (Horizontal tauscht Links/Rechts, Vertikal tauscht Oben/Unten). Beim Drehen wird das gesamte Bild im Uhrzeigersinn um 90° oder 180° rotiert, ohne ein Spiegelbild zu erzeugen.',
          },
          {
            question: 'Werden meine Videos beim Spiegeln auf einen Server hochgeladen?',
            answer: 'Nein. FlipVideo arbeitet zu 100 % lokal in Ihrem Webbrowser mittels HTML5 Video, Canvas 2D und Web Audio API. Ihre Videos werden niemals ins Internet übertragen.',
          },
          {
            question: 'Verliert das Video an Qualität oder wird ein Wasserzeichen eingefügt?',
            answer: 'FlipVideo fügt keinerlei Wasserzeichen hinzu. Der Export erfolgt in der nativen Auflösung Ihres Quellvideos mit hoher Bitrate und erhält die Original-Audiospur.',
          },
        ],
      },
    },
    howToUse: {
      title: 'Videos Online Spiegeln und Drehen Kostenlos - FlipVideo',
      metaDescription: 'Schritt-für-Schritt-Anleitung, um spiegelverkehrte Selfie-Videos zu korrigieren und MP4-, MOV- oder WebM-Dateien privat im Browser zu drehen.',
      h1: 'Wie Sie Jedes Video Online Ohne Upload Spiegeln und Drehen',
      subtitle: 'So entspiegeln Sie Frontkamera-Selfies, richten auf dem Kopf stehende Aufnahmen aus und drehen MP4-, MOV- und WebM-Clips in Sekunden.',
      stepsHeading: 'In 3 Schritten zum Gespiegelten Video',
      steps: [
        {
          title: '1. Video Auswählen oder per Drag & Drop Ablegen',
          description: 'Ziehen Sie eine MP4-, MOV- oder WebM-Datei direkt in das Arbeitsfeld auf der Startseite. Das Video wird sofort lokal geladen.',
        },
        {
          title: '2. Horizontale/Vertikale Spiegelung oder Drehung Wählen',
          description: 'Klicken Sie auf „Horizontal Spiegeln“, „Vertikal Spiegeln“ oder „Um 90° / 180° Drehen“ und prüfen Sie das Ergebnis sofort in der Live-Vorschau.',
        },
        {
          title: '3. Lokal Exportieren & Herunterladen',
          description: 'Klicken Sie auf „Gespiegeltes Video Herunterladen“. Ihr Browser speichert die fertige Datei mit Ton und ohne Wasserzeichen direkt auf Ihrem Gerät.',
        },
      ],
      useCasesHeading: 'Typische Anwendungsfälle',
      useCasesSubheading: 'Die passende Funktion für jede Aufnahme:',
      useCases: [
        {
          badge: 'Horizontal Spiegeln',
          title: 'Frontkamera-Selfies & Webcam-Clips Entspiegeln',
          description: 'Viele Smartphones speichern Selfie-Videos spiegelverkehrt. Mit einer horizontalen Spiegelung wird Text im Bild wieder normal lesbar.',
        },
        {
          badge: 'Vertikal Spiegeln / 180° Drehen',
          title: 'Auf dem Kopf Stehende Videos Richtig Ausrichten',
          description: 'Wurde eine Aufnahme über Kopf gefilmt, bringt eine 180°-Drehung das Bild wieder in die richtige Lage.',
        },
        {
          badge: 'Links-Rechts-Spiegelung',
          title: 'Tanz-Choreografien & Fitness-Tutorials Spiegeln',
          description: 'Spiegeln Sie Trainingsvideos horizontal, um Bewegungen wie vor einem echten Spiegel mitzumachen.',
        },
        {
          badge: 'Um 90° / 180° Drehen',
          title: 'Hochformat- und Querformat-Videos Korrigieren',
          description: 'Drehen Sie seitlich liegende Videos um 90°, bis das Seitenverhältnis korrekt ausgerichtet ist.',
        },
      ],
      formatsHeading: 'Unterstützte Formate & Offline-PWA',
      formatsText: 'FlipVideo verarbeitet MP4, MOV und WebM auf Desktop und Smartphone. Über „App Installieren“ können Sie das Tool auch komplett offline nutzen.',
      ctaButton: 'Zum Video-Flipper Werkzeug',
    },
    hireMe: {
      title: 'Kishara Dilshan Beauftragen - Web & WASM Entwickler',
      metaDescription: 'Benötigen Sie eine schnelle Astro-, React- oder Next.js-Web-App oder ein WebAssembly-Tool? Beauftragen Sie Kishara Dilshan für IT-Lösungen.',
      h1: 'Verfügbar für Freelance-Projekte',
      roleBadge: 'Kishara Dilshan • Full-Stack Web- & Client-Side Media/WASM-Entwickler',
      introParagraph: 'Hallo, ich bin Kishara Dilshan – der Entwickler hinter FlipVideo. Ich konzipiere und entwickle extrem schnelle, datenschutzfreundliche Webanwendungen, Browser-Medientools und technisch ausgereifte SEO-Architekturen.',
      philosophyParagraph: 'Ob Sie ein clientseitiges WebAssembly-/WebCodecs-Werkzeug, eine moderne Astro-, React- oder Next.js-Anwendung oder eine mehrsprachige Plattform mit perfekten Core Web Vitals benötigen – ich liefere sauberen Produktionscode.',
      skillsHeading: 'Meine Schwerpunkte',
      skills: [
        {
          title: 'Client-Side Video-, Audio- & WebAssembly-Tools',
          description: 'Browserbasierte Editoren, Canvas/WebGL-Pipelines, WebCodecs-Export und offline-fähige Progressive Web Apps.',
        },
        {
          title: 'Astro-, React- & Next.js-Webanwendungen',
          description: 'Islands-Architekturen und Full-Stack-TypeScript-Applikationen für minimale Ladezeiten.',
        },
        {
          title: 'Technisches SEO & Mehrsprachige Systeme',
          description: 'Semantisches HTML5, JSON-LD Schema, hreflang-Routing, XML-Sitemaps und Core Web Vitals Optimierung.',
        },
      ],
      contactHeading: 'Kontaktieren Sie Mich',
      contactSubheading: 'Schreiben Sie mir direkt per E-Mail. Kopieren Sie meine Adresse mit einem Klick:',
      emailLabel: 'Direkte E-Mail',
      copyEmailButton: 'E-Mail Kopieren',
      emailCopiedButton: 'Kopiert!',
      sendEmailButton: 'E-Mail Senden',
      supportCoffeeButton: 'Spendieren Sie mir einen Kaffee auf Gumroad',
    },
    footer: {
      tagline: '100% lokales Video-Spiegel- & Dreh-Werkzeug im Browser. Ohne Upload, ohne Wasserzeichen.',
      privacyNote: 'Die gesamte Videoverarbeitung erfolgt lokal auf Ihrem Gerät.',
      copyright: '© 2026 FlipVideo von Kishara Dilshan. Veröffentlicht unter der MIT-Lizenz.',
    },
  },
  fr: {
    locale: 'fr',
    langName: 'Français',
    nav: {
      home: 'Accueil',
      howToUse: 'Guide',
      hireMe: 'Me Recruter',
      languageSelectorAria: 'Choisir la langue',
      themeToggleAria: 'Basculer le thème clair ou sombre',
      installPwa: "Installer l'App",
      installPwaAria: "Ajouter FlipVideo à l'écran d'accueil pour un usage hors ligne",
      supportDeveloper: 'Soutenir le Créateur',
      supportDeveloperAria: 'Soutenir le développeur sur Gumroad',
      githubAria: 'View source code on GitHub',
      breadcrumbAria: "Fil d'Ariane",
    },
    pwaModal: {
      title: 'Installer FlipVideo Hors Ligne',
      subtitle: "Ajoutez FlipVideo à votre écran d'accueil ou bureau pour inverser vos vidéos même sans connexion internet.",
      iosStep1: '1. Appuyez sur le bouton Partager dans Safari.',
      iosStep2: "2. Faites défiler et appuyez sur « Sur l'écran d'accueil ».",
      desktopHint: "Sur ordinateur (Chrome, Edge, Brave), cliquez sur l'icône d'installation dans la barre d'adresse.",
      close: 'Compris',
    },
    home: {
      title: 'Inverser Vidéo en Ligne - Outil Miroir Gratuit Sans Upload',
      metaDescription: 'Inversez ou retournez vos vidéos horizontalement et verticalement dans le navigateur. Outil 100% gratuit pour MP4, MOV et WebM sans filigrane.',
      h1: 'Inverser une Vidéo en Ligne — Miroir Horizontal ou Vertical',
      heroSubtitle: 'Mettez en miroir, retournez ou pivotez vos vidéos MP4, MOV et WebM directement dans votre navigateur. 100% gratuit, sans envoi serveur et sans filigrane.',
      flipper: {
        dropzoneTitle: 'Déposez votre vidéo ici ou cliquez pour choisir',
        dropzoneSubtitle: 'Aperçu local instantané • MP4, MOV, WebM • Aucun temps de téléversement',
        browseButton: 'Choisir un Fichier Vidéo',
        loadSampleButton: 'Essayer une Vidéo Démo',
        supportedFormats: 'Compatible MP4, MOV, WebM (H.264, VP8, VP9)',
        privacyBadge: '100% Privé — Traité localement sur votre appareil',
        flipHorizontal: 'Miroir Horizontal (Gauche/Droite)',
        flipVertical: 'Miroir Vertical (Haut/Bas)',
        rotate90: 'Pivoter 90°',
        rotate180: 'Pivoter 180°',
        reset: 'Réinitialiser',
        downloadFlipped: 'Télécharger la Vidéo Inversée',
        changeVideo: 'Charger une Autre Vidéo',
        exportingStatus: 'Rendu de la vidéo inversée localement dans le navigateur...',
        exportCompleteStatus: 'Exportation terminée ! Votre vidéo a été téléchargée.',
        exportErrorStatus: "Une erreur s'est produite lors de l'exportation. Essayez un autre fichier.",
        activeTransformsLabel: 'Orientation Active :',
        noTransformsActive: "Orientation d'Origine",
        badgeMirroredH: 'Miroir Horizontal',
        badgeFlippedV: 'Retourné Verticalement',
        badgeRotated: 'Pivoté',
        originalResolution: 'Résolution',
        audioPreserved: 'Audio Original Conservé',
        cancelExport: 'Annuler',
      },
      featuresSection: {
        heading: 'Pourquoi Inverser et Retourner vos Vidéos avec FlipVideo ?',
        subheading: "Conçu pour corriger l'orientation de vos vidéos instantanément tout en garantissant une confidentialité absolue.",
        items: [
          {
            title: 'Zéro Envoi sur Serveur (100% Privé)',
            description: "Vos vidéos ne quittent jamais votre appareil. L'effet miroir horizontal, le retournement vertical et la rotation s'exécutent dans votre navigateur.",
          },
          {
            title: 'Corrigez les Vidéos Selfie Inversées',
            description: "Annulez l'effet miroir de la caméra frontale pour que les textes et logos s'affichent dans le bon sens de lecture.",
          },
          {
            title: 'Sans Filigrane & Audio Préservé',
            description: "Exportez vos clips en pleine résolution avec la piste audio d'origine synchronisée et sans aucun filigrane.",
          },
        ],
      },
      faqSection: {
        heading: 'Questions Fréquentes',
        subheading: "Tout savoir sur l'inversion, la mise en miroir et la rotation de vidéos dans le navigateur.",
        items: [
          {
            question: 'Comment corriger une vidéo selfie inversée prise avec la caméra frontale ?',
            answer: 'Déposez votre vidéo dans FlipVideo ci-dessus et cliquez sur « Miroir Horizontal (Gauche/Droite) ». Cela rétablit le sens naturel des écritures et des gestes. Cliquez ensuite sur « Télécharger la Vidéo Inversée ».',
          },
          {
            question: 'Quelle est la différence entre inverser (miroir) et pivoter une vidéo ?',
            answer: "Inverser crée une réflexion miroir sur un axe (Horizontal échange gauche et droite ; Vertical échange haut et bas). Pivoter tourne le cadre de 90° ou 180° dans le sens horaire sans créer d'effet miroir.",
          },
          {
            question: 'Mes vidéos sont-elles envoyées sur un serveur ?',
            answer: 'Non. FlipVideo fonctionne à 100 % localement dans votre navigateur grâce à HTML5 Video, Canvas 2D et Web Audio API. Vos fichiers ne transitent jamais sur internet.',
          },
          {
            question: "L'inversion réduit-elle la qualité ou ajoute-t-elle un filigrane ?",
            answer: "FlipVideo n'ajoute jamais de filigrane. L'exportation conserve la résolution native avec un débit binaire élevé ainsi que la piste audio originale.",
          },
        ],
      },
    },
    howToUse: {
      title: 'Comment Inverser et Retourner une Vidéo en Ligne Gratuit',
      metaDescription: "Guide étape par étape pour corriger les vidéos selfie inversées, retourner un clip à l'envers et mettre en miroir MP4, MOV ou WebM en privé.",
      h1: 'Comment Mettre en Miroir et Retourner une Vidéo Sans Upload',
      subtitle: "Apprenez à corriger les selfies inversés, redresser les vidéos filmées à l'envers et faire pivoter vos fichiers MP4, MOV et WebM.",
      stepsHeading: '3 Étapes Simples pour Inverser Votre Vidéo',
      steps: [
        {
          title: '1. Sélectionnez ou Glissez-Déposez Votre Vidéo',
          description: "Ouvrez FlipVideo sur la page d'accueil et déposez un fichier MP4, MOV ou WebM. Le chargement est immédiat et 100 % local.",
        },
        {
          title: '2. Choisissez Miroir Horizontal, Vertical ou Rotation',
          description: 'Cliquez sur « Miroir Horizontal », « Miroir Vertical » ou « Pivoter 90° / 180° » et visualisez la transition fluide en direct.',
        },
        {
          title: '3. Exportez et Téléchargez Localement',
          description: 'Cliquez sur « Télécharger la Vidéo Inversée » pour enregistrer votre vidéo avec son audio intact et sans filigrane.',
        },
      ],
      useCasesHeading: "Cas d'Utilisation Courants",
      useCasesSubheading: 'Choisissez la transformation adaptée à votre vidéo :',
      useCases: [
        {
          badge: 'Miroir Horizontal',
          title: 'Remettre à l’Endroit les Selfies et Webcams',
          description: "Les caméras frontales enregistrent souvent en miroir, rendant le texte illisible. Le miroir horizontal rétablit l'orientation réelle.",
        },
        {
          badge: 'Miroir Vertical / Pivoter 180°',
          title: 'Redresser une Vidéo Filmée à l’Envers',
          description: "Si votre caméra était montée à l'envers, utilisez Pivoter 180° pour remettre l'image à l'endroit ou Miroir Vertical pour inverser le haut et le bas.",
        },
        {
          badge: 'Miroir Gauche-Droite',
          title: 'Tutoriels de Danse, Chorégraphie et Sport',
          description: 'Mettez en miroir les vidéos de danse pour reproduire facilement les mouvements comme face à un miroir.',
        },
        {
          badge: 'Pivoter 90° / 180°',
          title: 'Corriger le Format Portrait ou Paysage',
          description: "Faites pivoter de 90° une vidéo enregistrée sur le côté pour retrouver le bon format d'affichage.",
        },
      ],
      formatsHeading: 'Formats Pris en Charge et Mode Hors Ligne',
      formatsText: 'Compatible avec MP4, MOV et WebM sur ordinateur et mobile. Cliquez sur « Installer l’App » pour utiliser FlipVideo hors connexion.',
      ctaButton: "Ouvrir l'Outil d'Inversion Vidéo",
    },
    hireMe: {
      title: 'Engager Kishara Dilshan - Développeur Web & WASM | Pro',
      metaDescription: "Besoin d'une application web ultra-rapide Astro, React ou Next.js ou d'un outil WebAssembly client ? Engagez Kishara Dilshan pour vos projets.",
      h1: 'Disponible pour des Missions Freelance',
      roleBadge: 'Kishara Dilshan • Développeur Full-Stack Web & Médias/WASM Client-Side',
      introParagraph: "Bonjour, je suis Kishara Dilshan, le créateur de FlipVideo. Je conçois des applications web ultra-rapides, des outils multimédias exécutés dans le navigateur et des architectures SEO techniques performantes.",
      philosophyParagraph: "Que vous ayez besoin d'un outil WebAssembly / WebCodecs sans serveur, d'une application Astro, React ou Next.js ou d'un site multilingue optimisé pour les Core Web Vitals, je livre un code fiable et soigné.",
      skillsHeading: 'Ce Que Je Peux Développer pour Vous',
      skills: [
        {
          title: 'Outils Vidéo, Audio & WebAssembly Côté Client',
          description: 'Éditeurs dans le navigateur, pipelines Canvas/WebGL, WebCodecs et Progressive Web Apps hors ligne.',
        },
        {
          title: 'Applications Astro, React & Next.js',
          description: 'Architecture en îlots et applications TypeScript optimisées pour un chargement instantané.',
        },
        {
          title: 'SEO Technique & Architecture Multilingue',
          description: 'HTML5 sémantique, données structurées JSON-LD, routage hreflang, sitemaps XML et Core Web Vitals.',
        },
      ],
      contactHeading: 'Discutons de Votre Projet',
      contactSubheading: 'Contactez-moi directement par e-mail. Copiez mon adresse en un clic :',
      emailLabel: 'E-mail Direct',
      copyEmailButton: "Copier l'E-mail",
      emailCopiedButton: 'Adresse Copiée !',
      sendEmailButton: 'Envoyer un E-mail',
      supportCoffeeButton: "M'offrir un Café sur Gumroad",
    },
    footer: {
      tagline: 'Outil 100% local pour inverser et mettre en miroir vos vidéos. Sans upload ni filigrane.',
      privacyNote: 'Tout le traitement vidéo est effectué localement dans votre navigateur.',
      copyright: '© 2026 FlipVideo par Kishara Dilshan. Publié sous licence MIT.',
    },
  },
  ja: {
    locale: 'ja',
    langName: '日本語',
    nav: {
      home: 'ホーム',
      howToUse: '使い方',
      hireMe: '開発依頼',
      languageSelectorAria: '言語を選択',
      themeToggleAria: 'ライトモードとダークモードを切り替え',
      installPwa: 'ホーム画面に追加',
      installPwaAria: 'オフライン利用のためにFlipVideoをホーム画面に追加',
      supportDeveloper: '開発者を支援',
      supportDeveloperAria: 'Gumroadで開発者を支援する',
      githubAria: 'View source code on GitHub',
      breadcrumbAria: 'パンくずリスト',
    },
    pwaModal: {
      title: 'FlipVideoをオフライン用にインストール',
      subtitle: 'ホーム画面やデスクトップに追加すると、インターネット接続なしでもいつでも動画を反転・回転できます。',
      iosStep1: '1. Safariの共有ボタンをタップします。',
      iosStep2: '2. 「ホーム画面に追加」を選択します。',
      desktopHint: 'PCブラウザ（Chrome、Edge、Brave）ではアドレスバー右側のインストールアイコンをクリックしてください。',
      close: '閉じる',
    },
    home: {
      title: '動画をオンラインで左右反転・上下反転 - 無料ミラーリングツール FlipVideo (アップロード不要)',
      metaDescription: 'ブラウザ上で動画を左右反転（ミラー）や上下反転・回転できる完全無料のオンラインツールです。MP4、MOV、WebMに対応し、サーバーへのアップロード不要・透かしなしで安全かつ高速に動画を反転処理してそのまま保存できます。スマートフォンやPCのフロントカメラ自撮り動画の向き修正にも最適です。',
      h1: '動画をオンラインで反転 — 左右ミラー・上下反転ツール',
      heroSubtitle: 'MP4・MOV・WebM動画をブラウザ上で直接ミラー反転・上下反転・回転。100%無料、サーバーへのアップロードなし、透かし（ウォーターマーク）なし。',
      flipper: {
        dropzoneTitle: 'ここに動画をドロップ、またはクリックして選択',
        dropzoneSubtitle: '即座にローカルプレビュー • MP4, MOV, WebM • アップロード待ち時間ゼロ',
        browseButton: '動画ファイルを選択',
        loadSampleButton: 'サンプル動画で試す',
        supportedFormats: '対応形式: MP4, MOV, WebM (H.264, VP8, VP9)',
        privacyBadge: '100% プライバシー保護 — お使いの端末内のみで処理されます',
        flipHorizontal: '左右反転（ミラー）',
        flipVertical: '上下反転',
        rotate90: '90° 回転',
        rotate180: '180° 回転',
        reset: 'リセット',
        downloadFlipped: '反転した動画をダウンロード',
        changeVideo: '別の動画を読み込む',
        exportingStatus: 'ブラウザ内で反転動画をレンダリングしています...',
        exportCompleteStatus: '書き出しが完了しました！動画がダウンロードされました。',
        exportErrorStatus: '書き出し中にエラーが発生しました。別のファイルでお試しください。',
        activeTransformsLabel: '現在の変換:',
        noTransformsActive: '元の向き（変換なし）',
        badgeMirroredH: '左右反転中',
        badgeFlippedV: '上下反転中',
        badgeRotated: '回転',
        originalResolution: '解像度',
        audioPreserved: '元の音声を維持',
        cancelExport: 'キャンセル',
      },
      featuresSection: {
        heading: 'FlipVideoが選ばれる理由',
        subheading: 'プライバシーと画質を犠牲にすることなく、動画の向きや鏡像を瞬時に修正できるよう設計されています。',
        items: [
          {
            title: 'サーバーアップロード不要（100%安全）',
            description: '動画ファイルが外部サーバーに送信されることは一切ありません。左右反転・上下反転・回転のすべてがお使いのブラウザ内で完結します。',
          },
          {
            title: '自撮り動画の左右逆（鏡文字）を即座に修正',
            description: 'スマホのインカメラやWebカメラで撮影した鏡像動画を左右反転し、服のロゴや看板の文字を正しい向きに戻します。',
          },
          {
            title: '透かしなし＆元の音声をそのまま保持',
            description: 'ウォーターマークは一切入りません。元の解像度と音声トラックを保ったままクリーンな動画ファイルを書き出せます。',
          },
        ],
      },
      faqSection: {
        heading: 'よくある質問（FAQ）',
        subheading: 'ブラウザでの動画反転・ミラーリング・回転に関する疑問にお答えします。',
        items: [
          {
            question: 'インカメラで撮影した左右逆の自撮り動画を直すには？',
            answer: '上のボックスに動画を入れて「左右反転（ミラー）」をクリックしてください。左右の軸が反転し、鏡文字になっていたテキストや背景が本来の向きに戻ります。その後「反転した動画をダウンロード」を押して保存してください。',
          },
          {
            question: '動画の「反転（ミラー）」と「回転」の違いは何ですか？',
            answer: '反転は鏡のように軸を基準に折り返します（左右反転は左と右、上下反転は上と下を入れ替えます）。一方、回転は鏡像を作らずにフレーム全体を時計回りに90°または180°回します。逆さまに撮影した動画は「180° 回転」、自撮りの鏡像修正には「左右反転」を使用します。',
          },
          {
            question: '動画はサーバーにアップロードされますか？',
            answer: 'いいえ。FlipVideoはHTML5 Video、Canvas 2D、Web Audio APIを使用して100%ブラウザ内で動作します。動画データがインターネット経由で送信されることはありません。',
          },
          {
            question: '画質が落ちたり透かし（ロゴ）が入ったりしますか？',
            answer: '透かしや時間制限は一切ありません。元の解像度・高ビットレートでレンダリングされ、音声トラックもそのまま維持されます。',
          },
        ],
      },
    },
    howToUse: {
      title: '動画をオンラインで無料反転・ミラーリングする方法と使い方ガイド | FlipVideo (アップロード不要)',
      metaDescription: 'インカメラで撮影した左右逆の自撮り動画の修正や、上下逆さまに録画された動画の反転、MP4・MOV・WebMファイルの90度・180度回転をサーバーへアップロードせずにブラウザ内で安全に行う手順をステップバイステップで分かりやすく解説します。透かしなし・画質劣化最小限で今すぐ無料で利用できます。',
      h1: 'アップロード不要で動画をオンライン反転・ミラーリングする方法',
      subtitle: '自撮り動画の鏡文字修正、上下逆さま動画の補正、ダンス練習用のミラー動画作成を数秒で行う手順。',
      stepsHeading: '動画を反転する3つの簡単ステップ',
      steps: [
        {
          title: '1. 動画ファイルを選択またはドラッグ＆ドロップ',
          description: 'トップページのFlipVideoワークスペースにMP4、MOV、WebMファイルをドロップします。アップロード待ち時間なしで即座に読み込まれます。',
        },
        {
          title: '2. 左右反転・上下反転・回転を選択',
          description: '「左右反転（ミラー）」「上下反転」「90° / 180° 回転」ボタンをクリックし、滑らかなリアルタイムプレビューで向きを確認します。',
        },
        {
          title: '3. ローカルで書き出してダウンロード',
          description: '「反転した動画をダウンロード」をクリックすると、ブラウザ内で音声付きのまま高速処理され、透かしなしで端末に保存されます。',
        },
      ],
      useCasesHeading: '主な活用シーン',
      useCasesSubheading: '目的に合わせて最適な変換を選択できます：',
      useCases: [
        {
          badge: '左右反転（ミラー）',
          title: '自撮り・Webカメラ動画の鏡文字を修正',
          description: 'フロントカメラで録画して文字やロゴが左右逆に写ってしまった動画を、本来の正しい向きに戻します。',
        },
        {
          badge: '上下反転 / 180° 回転',
          title: '上下逆さまに録画された動画の補正',
          description: 'アクションカメラやスマホが逆さまの状態で録画された場合、180°回転または上下反転で正しい向きに直せます。',
        },
        {
          badge: '左右ミラーリング',
          title: 'ダンス振り付け・筋トレ・楽器レッスン動画の鏡像化',
          description: 'お手本動画を左右反転させることで、鏡を見ながら練習するのと同じ向きで動きを真似できます。',
        },
        {
          badge: '90° / 180° 回転',
          title: '縦動画・横動画の向き修正',
          description: '横向きに保存されてしまった縦動画を90°回転させて正しいアスペクト比に整えます。',
        },
      ],
      formatsHeading: '対応フォーマットとオフラインPWA機能',
      formatsText: 'MP4、MOV、WebM形式に対応しています。ナビゲーションバーの「ホーム画面に追加」をクリックすると、オフラインでも使えるアプリとしてインストール可能です。',
      ctaButton: '動画反転ツールを開く',
    },
    hireMe: {
      title: 'Kishara Dilshan への開発依頼 - Web & WASMエンジニア | FlipVideo',
      metaDescription: 'Astro、React、Next.jsを活用した超高速なWebアプリケーション開発や、クライアントサイドWebAssembly（WASM）メディアツール、テクニカルSEOに最適化されたカスタムITソリューションをお探しですか？フリーランス開発のご相談・お見積もりはお気軽にご連絡ください。',
      h1: 'フリーランス開発プロジェクト受付中',
      roleBadge: 'Kishara Dilshan • フルスタックWeb & クライアントサイドWASM開発者',
      introParagraph: 'こんにちは、FlipVideoの開発者 Kishara Dilshan です。私は超高速でプライバシー重視のWebアプリケーション、ブラウザ完結型のメディア処理ツール、そして検索エンジンで高く評価されるテクニカルSEO設計を専門としています。',
      philosophyParagraph: 'サーバー不要のWebAssembly / WebCodecsツールや、Astro・React・Next.jsによる高速なSaaSフロントエンド、Core Web Vitalsに最適化された多言語Webサイトの開発はお任せください。',
      skillsHeading: '提供可能な開発サービス',
      skills: [
        {
          title: 'クライアントサイド動画・音声・WebAssemblyツール',
          description: 'ブラウザネイティブのエディタ、Canvas/WebGLパイプライン、WebCodecs出力、オフライン対応PWA開発。',
        },
        {
          title: '高パフォーマンス Astro / React / Next.js アプリ開発',
          description: 'アイランドアーキテクチャやTypeScriptを用いた、初期表示が圧倒的に速いWebアプリケーション構築。',
        },
        {
          title: 'テクニカルSEO＆多言語（i18n）アーキテクチャ',
          description: 'セマンティックHTML5、JSON-LD構造化データ、hreflangルーティング、XMLサイトマップ設計。',
        },
      ],
      contactHeading: 'プロジェクトのご相談はこちら',
      contactSubheading: 'メールにて直接ご連絡ください。ワンクリックでメールアドレスをコピーできます：',
      emailLabel: '直通メールアドレス',
      copyEmailButton: 'メールアドレスをコピー',
      emailCopiedButton: 'コピーしました！',
      sendEmailButton: 'メールを送信する',
      supportCoffeeButton: 'Gumroadでコーヒーを差し入れする',
    },
    footer: {
      tagline: '100%ブラウザ完結の動画反転・ミラーリングツール。アップロード不要、透かしなし、完全無料。',
      privacyNote: 'すべての動画処理はお使いのブラウザ内（ローカル）で実行されます。',
      copyright: '© 2026 FlipVideo by Kishara Dilshan. Released under the MIT License.',
    },
  },
  zh: {
    locale: 'zh',
    langName: '简体中文',
    nav: {
      home: '首页',
      howToUse: '使用教程',
      hireMe: '聘请开发者',
      languageSelectorAria: '选择语言',
      themeToggleAria: '切换浅色或深色主题',
      installPwa: '添加到主屏幕',
      installPwaAria: '将 FlipVideo 添加到主屏幕以支持离线使用',
      supportDeveloper: '支持开发者',
      supportDeveloperAria: '在 Gumroad 上支持开发者',
      githubAria: 'View source code on GitHub',
      breadcrumbAria: '面包屑导航',
    },
    pwaModal: {
      title: '安装 FlipVideo 离线应用',
      subtitle: '将 FlipVideo 添加到手机主屏幕或电脑桌面，无需联网即可随时镜像和翻转视频。',
      iosStep1: '1. 在 Safari 浏览器底部点击“分享”按钮。',
      iosStep2: '2. 向下滑动并点击“添加到主屏幕”。',
      desktopHint: '在电脑浏览器（Chrome、Edge、Brave）中，点击地址栏右侧的安装图标即可。',
      close: '知道了',
    },
    home: {
      title: '在线翻转视频 - 免费视频水平镜像与垂直翻转工具 | FlipVideo (纯浏览器本地处理无上传)',
      metaDescription: '直接在浏览器中水平镜像或垂直翻转视频，支持90度与180度旋转。100%免费且保护隐私的MP4、MOV与WebM在线视频翻转工具，无需上传到任何服务器，无水印且不限文件大小，零等待即刻在本地完成自拍镜像矫正与视频方向旋转并快速导出高清原画质视频文件，全面兼容手机与电脑端浏览器。',
      h1: '在线翻转视频 — 水平镜像或垂直翻转工具',
      heroSubtitle: '直接在浏览器中镜像、翻转或旋转 MP4、MOV 和 WebM 视频。100% 免费，无需上传服务器，绝无水印。',
      flipper: {
        dropzoneTitle: '将视频拖放到此处，或点击选择文件',
        dropzoneSubtitle: '即时本地预览 • 支持 MP4, MOV, WebM • 零上传等待时间',
        browseButton: '选择视频文件',
        loadSampleButton: '加载示例视频',
        supportedFormats: '支持 MP4, MOV, WebM (H.264, VP8, VP9)',
        privacyBadge: '100% 隐私安全 — 完全在您的设备本地处理',
        flipHorizontal: '水平翻转（左右镜像）',
        flipVertical: '垂直翻转（上下颠倒）',
        rotate90: '顺时针旋转 90°',
        rotate180: '旋转 180°',
        reset: '重置方向',
        downloadFlipped: '下载翻转后的视频',
        changeVideo: '更换其他视频',
        exportingStatus: '正在浏览器本地渲染并导出翻转后的视频...',
        exportCompleteStatus: '导出完成！翻转后的视频已下载到您的设备。',
        exportErrorStatus: '视频导出过程中出现错误，请尝试其他视频文件。',
        activeTransformsLabel: '当前变换状态：',
        noTransformsActive: '原始方向（未变换）',
        badgeMirroredH: '已水平镜像',
        badgeFlippedV: '已垂直翻转',
        badgeRotated: '已旋转',
        originalResolution: '分辨率',
        audioPreserved: '保留原视频音轨',
        cancelExport: '取消',
      },
      featuresSection: {
        heading: '为什么选择 FlipVideo 在线翻转和镜像视频？',
        subheading: '专为创作者、教育工作者及日常用户打造，在确保绝对隐私的前提下即时修正视频画面方向。',
        items: [
          {
            title: '零服务器上传（100% 隐私保护）',
            description: '您的视频文件绝不会离开您的手机或电脑。所有的水平镜像、垂直翻转和旋转均通过浏览器硬件加速画布在本地完成。',
          },
          {
            title: '一键修复前置自拍左右反向问题',
            description: '轻松还原手机前置摄像头或电脑摄像头录制的镜像画面，让衣服Logo、路标和白板文字恢复正常从左到右阅读。',
          },
          {
            title: '无任何水印 & 完整保留原声',
            description: '以原视频分辨率高码率导出清晰画面，并同步保留原始音频轨道，完全免费且无任何品牌水印遮挡。',
          },
        ],
      },
      faqSection: {
        heading: '常见问题解答 (FAQ)',
        subheading: '关于在浏览器中翻转、镜像和旋转视频您需要了解的一切。',
        items: [
          {
            question: '如何修复前置摄像头拍摄的左右反向自拍视频？',
            answer: '将视频拖入上方的 FlipVideo 工作区，点击“水平翻转（左右镜像）”。这会将画面的左右轴对调，使反向的文字和手势恢复正常方向，最后点击“下载翻转后的视频”即可保存。',
          },
          {
            question: '翻转（镜像）视频和旋转视频有什么区别？',
            answer: '翻转是沿着对称轴像镜子一样反射画面（水平翻转对调左右，垂直翻转对调上下）；旋转则是将整个画面顺时针转动 90° 或 180°，不会产生镜像反射。如果视频倒置录制请用“旋转 180°”，如果是自拍文字反向请用“水平翻转”。',
          },
          {
            question: '翻转视频时我的文件会上传到服务器吗？',
            answer: '绝不会。FlipVideo 基于 HTML5 Video、Canvas 2D 与 Web Audio API，100% 在您的浏览器本地运行，视频数据永远不会通过网络传输到任何服务器。',
          },
          {
            question: '翻转视频会降低画质或添加水印吗？',
            answer: 'FlipVideo 绝不添加任何水印或时长限制。导出引擎采用原视频原生分辨率与高比特率渲染，并完整保留原始音轨。',
          },
        ],
      },
    },
    howToUse: {
      title: '如何免费在线翻转和镜像视频 - 零上传本地视频水平镜像与垂直翻转完整教程指南 | FlipVideo',
      metaDescription: '分步图文指南教您如何快速修复前置摄像头拍摄的左右反向上自拍视频、矫正上下颠倒的录像画面，以及在浏览器本地安全私密地水平镜像或旋转MP4、MOV和WebM格式视频文件。全程无需上传云端服务器，零水印导出高清视频，轻松解决舞蹈教学镜面练习、手机横竖屏方向错误及倒置拍摄等常见视频翻转需求。',
      h1: '无需上传服务器：如何免费在线翻转和镜像任何视频',
      subtitle: '只需几秒钟，在浏览器本地修复反向自拍、矫正倒置录像、制作镜面舞蹈教学视频或旋转横竖屏方向。',
      stepsHeading: '简单 3 步完成视频翻转',
      steps: [
        {
          title: '1. 选择或拖放视频文件',
          description: '在首页工作区拖入 MP4、MOV 或 WebM 视频文件，或点击“选择视频文件”。无需等待上传，视频即刻在本地加载。',
        },
        {
          title: '2. 选择水平镜像、垂直翻转或旋转',
          description: '点击“水平翻转（左右镜像）”、“垂直翻转”或“旋转 90° / 180°”，通过 GPU 加速预览实时查看平滑的转换效果。',
        },
        {
          title: '3. 本地渲染并下载保存',
          description: '点击“下载翻转后的视频”，浏览器将在本地同步合成翻转画面与原声音轨，生成无水印的高清视频文件。',
        },
      ],
      useCasesHeading: '常见视频翻转与方向矫正场景',
      useCasesSubheading: '根据您的拍摄情况选择最合适的变换方式：',
      useCases: [
        {
          badge: '水平翻转（镜像）',
          title: '矫正前置摄像头自拍与直播录像文字反向',
          description: '手机前置镜头默认往往保存镜像画面，导致字幕和标志左右颠倒。使用水平翻转即可恢复真实视角。',
        },
        {
          badge: '垂直翻转 / 旋转 180°',
          title: '修复倒置拍摄的运动相机与手机视频',
          description: '当 GoPro、行车记录仪或手机倒置录制时，使用旋转 180° 可将画面扶正，使用垂直翻转则可实现上下倒影效果。',
        },
        {
          badge: '左右镜面反射',
          title: '舞蹈分解教学、健身操与乐器练习镜面视频',
          description: '将教学视频水平镜像后，您可以像照镜子一样直接跟随老师的左右手动作进行练习。',
        },
        {
          badge: '旋转 90° / 180°',
          title: '调整竖屏与横屏方向错误',
          description: '如果竖屏短视频被错误保存为横向画面，只需点击旋转 90° 即可恢复正确的竖屏比例。',
        },
      ],
      formatsHeading: '支持格式与离线 PWA 应用',
      formatsText: '原生支持 MP4、MOV 和 WebM 格式。您还可以点击顶部导航栏的“添加到主屏幕”，将 FlipVideo 安装为离线可用的渐进式 Web 应用 (PWA)。',
      ctaButton: '立即打开视频翻转工具',
    },
    hireMe: {
      title: '聘请 Kishara Dilshan - 专业全栈 Web 与 WASM 开发者 | FlipVideo',
      metaDescription: '需要构建超快速的 Astro、React 或 Next.js 现代化 Web 应用程序，或是开发纯浏览器端运行的 WebAssembly 多媒体与生产力工具？立即联系全栈工程师 Kishara Dilshan，获取针对搜索引擎深度优化（Technical SEO）的高性能定制软件解决方案。',
      h1: '承接自由职业与定制开发项目',
      roleBadge: 'Kishara Dilshan • 全栈 Web 与浏览器端多媒体/WASM 开发者',
      introParagraph: '您好，我是 Kishara Dilshan，FlipVideo 的独立创作者与开发者。我专注于设计并构建极速、隐私优先的现代化 Web 应用程序、纯浏览器端音视频处理工具以及符合搜索引擎规范的技术 SEO 架构。',
      philosophyParagraph: '无论您需要零服务器成本的 WebAssembly / WebCodecs 客户端工具、基于 Astro / React / Next.js 的高转化率 SaaS 前端，还是针对 Core Web Vitals 深度优化的多语言国际化站点，我都能为您交付高质量的生产级代码。',
      skillsHeading: '我可以为您构建的解决方案',
      skills: [
        {
          title: '纯前端音视频处理与 WebAssembly 工具',
          description: '浏览器原生编辑器、Canvas/WebGL 渲染管线、WebCodecs 导出引擎以及支持离线运行的 PWA 应用。',
        },
        {
          title: '高性能 Astro、React 与 Next.js 应用',
          description: '采用群岛架构 (Islands Architecture) 与全栈 TypeScript，实现秒级加载与零布局偏移 (CLS = 0)。',
        },
        {
          title: '技术 SEO 与多语言国际化架构',
          description: '完整的语义化 HTML5、JSON-LD 结构化数据、多语言 hreflang 路由、扁平化 XML 站点地图与核心性能指标优化。',
        },
      ],
      contactHeading: '欢迎洽谈项目合作',
      contactSubheading: '欢迎直接通过电子邮件联系我。您可以一键复制下方邮箱地址或直接发送邮件：',
      emailLabel: '直接联系邮箱',
      copyEmailButton: '复制邮箱地址',
      emailCopiedButton: '已复制到剪贴板！',
      sendEmailButton: '发送电子邮件',
      supportCoffeeButton: '在 Gumroad 上请我喝杯咖啡',
    },
    footer: {
      tagline: '100% 纯浏览器本地视频翻转与镜像工具。无需上传，绝无水印，永久免费。',
      privacyNote: '所有视频处理均在您的浏览器本地环境中完成。',
      copyright: '© 2026 FlipVideo by Kishara Dilshan. 基于 MIT 许可证开源发布。',
    },
  },
  ru: {
    locale: 'ru',
    langName: 'Русский',
    nav: {
      home: 'Главная',
      howToUse: 'Инструкция',
      hireMe: 'Нанять Меня',
      languageSelectorAria: 'Выбрать язык',
      themeToggleAria: 'Переключить светлую или тёмную тему',
      installPwa: 'Установить PWA',
      installPwaAria: 'Добавить FlipVideo на главный экран для работы офлайн',
      supportDeveloper: 'Поддержать Автора',
      supportDeveloperAria: 'Поддержать разработчика на Gumroad',
      githubAria: 'View source code on GitHub',
      breadcrumbAria: 'Навигационная цепочка',
    },
    pwaModal: {
      title: 'Установить FlipVideo для Работы Офлайн',
      subtitle: 'Добавьте FlipVideo на главный экран или рабочий стол, чтобы отражать и переворачивать видео без интернета.',
      iosStep1: '1. Нажмите кнопку «Поделиться» в Safari.',
      iosStep2: '2. Выберите «На экран „Домой“».',
      desktopHint: 'На компьютере (Chrome, Edge, Brave) нажмите значок установки в адресной строке браузера.',
      close: 'Понятно',
    },
    home: {
      title: 'Отзеркалить Видео Онлайн - Бесплатно и Без Загрузки',
      metaDescription: 'Отразите или переверните видео по горизонтали и вертикали прямо в браузере. 100% бесплатный приватный инструмент для MP4, MOV и WebM без водяных знаков.',
      h1: 'Отзеркалить Видео Онлайн — По Горизонтали или Вертикали',
      heroSubtitle: 'Отражайте, переворачивайте или вращайте видео MP4, MOV и WebM прямо в браузере. 100% бесплатно, без загрузки на сервер и без водяных знаков.',
      flipper: {
        dropzoneTitle: 'Перетащите видео сюда или нажмите для выбора',
        dropzoneSubtitle: 'Мгновенный предпросмотр • MP4, MOV, WebM • Без ожидания загрузки',
        browseButton: 'Выбрать Видеофайл',
        loadSampleButton: 'Демо-видео',
        supportedFormats: 'Поддержка MP4, MOV, WebM (H.264, VP8, VP9)',
        privacyBadge: '100% Приватно — Обработка локально на вашем устройстве',
        flipHorizontal: 'Отразить Горизонтально (Зеркало)',
        flipVertical: 'Отразить Вертикально',
        rotate90: 'Повернуть на 90°',
        rotate180: 'Повернуть на 180°',
        reset: 'Сбросить',
        downloadFlipped: 'Скачать Отражённое Видео',
        changeVideo: 'Выбрать Другое Видео',
        exportingStatus: 'Рендеринг видео локально в вашем браузере...',
        exportCompleteStatus: 'Экспорт завершён! Ваше видео успешно скачано.',
        exportErrorStatus: 'Произошла ошибка при экспорте. Попробуйте другой файл.',
        activeTransformsLabel: 'Активная ориентация:',
        noTransformsActive: 'Исходная ориентация',
        badgeMirroredH: 'Зеркально по горизонтали',
        badgeFlippedV: 'Отражено по вертикали',
        badgeRotated: 'Повёрнуто',
        originalResolution: 'Разрешение',
        audioPreserved: 'Исходный звук сохранён',
        cancelExport: 'Отмена',
      },
      featuresSection: {
        heading: 'Почему стоит отражать и переворачивать видео в FlipVideo?',
        subheading: 'Создано для мгновенного исправления ориентации видео без потери качества и с полной конфиденциальностью.',
        items: [
          {
            title: 'Без Загрузки на Сервер (100% Приватно)',
            description: 'Ваши видеофайлы никогда не покидают ваше устройство. Все трансформации выполняются прямо в браузере через аппаратное ускорение Canvas.',
          },
          {
            title: 'Исправление Зеркальных Селфи-Видео',
            description: 'Уберите зеркальный эффект фронтальной камеры, чтобы надписи на одежде, вывесках и досках читались правильно слева направо.',
          },
          {
            title: 'Без Водяных Знаков и с Сохранением Звука',
            description: 'Экспортируйте видео в исходном разрешении с синхронизированной аудиодорожкой и без каких-либо логотипов.',
          },
        ],
      },
      faqSection: {
        heading: 'Часто Задаваемые Вопросы',
        subheading: 'Всё, что нужно знать об отражении и повороте видео в браузере.',
        items: [
          {
            question: 'Как исправить зеркальное селфи-видео с фронтальной камеры?',
            answer: 'Добавьте видео в FlipVideo выше и нажмите «Отразить Горизонтально (Зеркало)». Это поменяет местами левую и правую стороны, вернув тексту естественный вид. Затем нажмите «Скачать Отражённое Видео».',
          },
          {
            question: 'В чём разница между отражением (зеркалом) и поворотом видео?',
            answer: 'Отражение создаёт зеркальную проекцию относительно оси (по горизонтали меняет лево и право, по вертикали — верх и низ). Поворот вращает весь кадр по часовой стрелке на 90° или 180° без зеркального эффекта.',
          },
          {
            question: 'Загружаются ли мои видео на сервер при обработке?',
            answer: 'Нет. FlipVideo работает на 100% локально внутри вашего веб-браузера с помощью HTML5 Video, Canvas 2D и Web Audio API. Ваши файлы никуда не отправляются.',
          },
          {
            question: 'Теряется ли качество и добавляется ли водяной знак?',
            answer: 'FlipVideo никогда не добавляет водяные знаки. Экспорт выполняется в родном разрешении видео с высоким битрейтом и полным сохранением звука.',
          },
        ],
      },
    },
    howToUse: {
      title: 'Как Отзеркалить и Перевернуть Видео Онлайн | FlipVideo',
      metaDescription: 'Пошаговое руководство, как исправить зеркальное селфи-видео, перевернуть запись вверх ногами и отразить файлы MP4, MOV или WebM приватно в браузере.',
      h1: 'Как Отзеркалить и Перевернуть Любое Видео Онлайн Без Загрузки',
      subtitle: 'Узнайте, как убрать зеркальность селфи, перевернуть видео вверх ногами и повернуть файлы MP4, MOV и WebM за пару секунд.',
      stepsHeading: '3 Простых Шага для Отражения Видео',
      steps: [
        {
          title: '1. Выберите или Перетащите Видеофайл',
          description: 'Откройте главную страницу FlipVideo и перетащите файл MP4, MOV или WebM в рабочую область. Видео открывается мгновенно без загрузки в сеть.',
        },
        {
          title: '2. Выберите Зеркальное Отражение или Поворот',
          description: 'Нажмите «Отразить Горизонтально», «Отразить Вертикально» или «Повернуть на 90° / 180°» и оцените результат в реальном времени.',
        },
        {
          title: '3. Экспортируйте и Скачайте Локально',
          description: 'Нажмите «Скачать Отражённое Видео». Браузер сохранит готовый файл со звуком и без водяных знаков на ваше устройство.',
        },
      ],
      useCasesHeading: 'Популярные Сценарии Использования',
      useCasesSubheading: 'Выберите нужное действие для вашей записи:',
      useCases: [
        {
          badge: 'Горизонтальное Зеркало',
          title: 'Исправление Селфи и Записей с Веб-камеры',
          description: 'Фронтальные камеры часто сохраняют видео зеркально, из-за чего текст читается задом наперёд. Горизонтальное отражение решает эту проблему.',
        },
        {
          badge: 'Вертикально / Поворот 180°',
          title: 'Исправление Видео, Снятых Вверх Ногами',
          description: 'Если экшн-камера или смартфон были закреплены вверх ногами, используйте Поворот на 180° или Вертикальное отражение.',
        },
        {
          badge: 'Зеркало Слева Направо',
          title: 'Танцевальные Уроки, Фитнес и Хореография',
          description: 'Отзеркальте обучающее видео по горизонтали, чтобы повторять движения за тренером как перед зеркалом в зале.',
        },
        {
          badge: 'Поворот на 90° / 180°',
          title: 'Коррекция Вертикальной и Горизонтальной Ориентации',
          description: 'Поверните видео на 90°, если вертикальный ролик сохранился боком в горизонтальном формате.',
        },
      ],
      formatsHeading: 'Поддерживаемые Форматы и Офлайн-Режим',
      formatsText: 'FlipVideo работает с MP4, MOV и WebM на ПК и смартфонах. Нажмите «Установить PWA» в меню, чтобы пользоваться инструментом без интернета.',
      ctaButton: 'Открыть Инструмент Отражения Видео',
    },
    hireMe: {
      title: 'Нанять Kishara Dilshan - Web и WASM Разработчик | Pro',
      metaDescription: 'Нужно сверхбыстрое веб-приложение на Astro, React, Next.js или клиентский инструмент на WebAssembly? Наймите Kishara Dilshan для создания IT-решений.',
      h1: 'Открыт для Фриланс-Проектов',
      roleBadge: 'Kishara Dilshan • Full-Stack Web & Client-Side Media/WASM Разработчик',
      introParagraph: 'Привет! Я Кишара Дилшан (Kishara Dilshan) — создатель и разработчик FlipVideo. Я проектирую и создаю сверхбыстрые веб-приложения, браузерные медиа-инструменты и технически выверенные SEO-архитектуры.',
      philosophyParagraph: 'Если вам нужен клиентский инструмент на базе WebAssembly / WebCodecs без серверных затрат, современный интерфейс на Astro, React или Next.js или мультиязычная платформа с идеальными показателями Core Web Vitals — я готов помочь.',
      skillsHeading: 'Что Я Могу Разработать для Вас',
      skills: [
        {
          title: 'Клиентские Видео/Аудио Инструменты и WebAssembly',
          description: 'Браузерные редакторы, обработка через Canvas/WebGL, экспорт WebCodecs и офлайн PWA-приложения.',
        },
        {
          title: 'Быстрые Приложения на Astro, React и Next.js',
          description: 'Островная архитектура и Full-Stack TypeScript решения с мгновенной загрузкой и нулевым CLS.',
        },
        {
          title: 'Техническое SEO и Мультиязычная Архитектура',
          description: 'Семантический HTML5, микроразметка JSON-LD, маршрутизация hreflang, XML-карты сайта и оптимизация Core Web Vitals.',
        },
      ],
      contactHeading: 'Обсудим Ваш Проект',
      contactSubheading: 'Свяжитесь со мной напрямую по электронной почте. Скопируйте адрес одним кликом:',
      emailLabel: 'Прямой Email',
      copyEmailButton: 'Скопировать Email',
      emailCopiedButton: 'Скопировано!',
      sendEmailButton: 'Написать Письмо',
      supportCoffeeButton: 'Угостить Кофе на Gumroad',
    },
    footer: {
      tagline: '100% локальный инструмент для отражения и поворота видео в браузере. Без загрузок и водяных знаков.',
      privacyNote: 'Вся обработка видео выполняется локально на вашем устройстве.',
      copyright: '© 2026 FlipVideo от Kishara Dilshan. Лицензия MIT.',
    },
  },
};

export function getTranslation(locale: string | undefined): TranslationDictionary {
  if (locale && locale in translations) {
    return translations[locale as Locale];
  }
  return translations.en;
}

export function getLocalizedPath(locale: Locale, route: '' | 'how-to-use/' | 'hire-me/'): string {
  const prefix = locale === 'en' ? '/' : `/${locale}/`;
  return `${prefix}${route}`;
}

export function getCanonicalUrl(locale: Locale, route: '' | 'how-to-use/' | 'hire-me/'): string {
  return `https://flipvideo.github.io${getLocalizedPath(locale, route)}`;
}
