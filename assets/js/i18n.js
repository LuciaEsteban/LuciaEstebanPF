/**
 * Bilingual content (English / Spanish) for the cover-letter site.
 *
 * Every user-facing string lives here so the whole site can be
 * translated from one place. Elements in index.html are tagged with
 * `data-i18n="path.to.key"` (text content) or
 * `data-i18n-attr="attr:path.to.key"` (an attribute value).
 * See assets/js/main.js for how these are applied.
 */
window.TRANSLATIONS = {
  en: {
    meta: {
      title: "LuciaEstebanPF",
      description:
        "Cover letter of Lucía Esteban Peña. Organized, careful with details, a good team member and open to new fields.",
    },
    skipLink: "Skip to main content",
    nav: {
      expertise: "About me",
      ecosystem: "What I can do",
      horizons: "What I am looking for",
      ai: "AI",
      journey: "Journey",
      contact: "Contact",
      langToggleLabel: "Switch language",
      themeToggleLabel: "Toggle dark mode",
    },
    hero: {
      eyebrow: "Cover letter",
      name: "Lucía Esteban Peña",
      role: "",
      tagline:
        "I am organized, detail-oriented and I enjoy working in a team. I am currently working at a consultancy, and I am looking for a new challenge where I can <strong>keep learning and give my best</strong>.",
      badgeRemote: "Remote or hybrid preferred",
      ctaPrimary: "Get to know me",
      ctaSecondary: "Let's talk",
      photoAlt: "Portrait photo of Lucía Esteban Peña",
      scrollHint: "Scroll to explore",
    },
    expertise: {
      eyebrow: "About me",
      title: "How I work",
      intro: "This is what I am like day to day.",
      items: {
        balance: { title: "Team player", body: "I get on well with people and I like a good atmosphere. Wherever I have worked, I have felt part of the team very soon, and I can also move forward on my own when needed." },
        organized: { title: "Organized", body: "I like to be organized. I note down deadlines, break the work into smaller tasks and set priorities so that nothing slips through. And when there is no time to be that thorough, I still manage well." },
        adapt: { title: "Adaptable", body: "Change does not scare me. I quickly get used to new tools, colleagues and ways of working." },
        communication: { title: "Good with people", body: "I am sociable and I enjoy dealing with people. I also have experience working with clients." },
        detail: { title: "Detail-oriented", body: "I like things to be done well, so I review my work carefully before considering it finished." },
        learn: { title: "Eager to learn", body: "I enjoy learning new things. That is why I keep studying while I work." },
      },
    },
    ecosystem: {
      eyebrow: "Experience",
      title: "What I can do",
      introBeforeDuration: "I am currently working as a Microsoft Dynamics 365 Business Central developer, and I have been doing so for ",
      introAfterDuration:
        ", on an ERP: the software a company uses to run its internal operations in one place, from sales and purchasing to invoicing, projects, staff and accounting. Working with it has given me a solid foundation in how a company operates and how its areas connect, and I would be glad to build on it and specialise further if a role requires it. Right now my work is programming, but that does not limit what I can do.",
      work: {
        title: "Some of the things I have done",
        items: [
          "Data migrations",
          "Development of a project management module",
          "HR APIs",
          "Delivery note and sales reports",
          "Accounting entries data management",
          "Electronic invoicing",
          "Payment due dates",
        ],
      },
      core: {
        title: "What I work with",
        items: ["Programming", "Working with data", "Reports", "Business processes", "SQL", "Excel", "Git"],
      },
      professional: {
        title: "What I enjoy most",
        items: ["Solving problems", "Organizing and planning", "Acquiring new skills"],
      },
      additional: {
        title: "Training",
        items: ["Java", "HTML / CSS", "C (fundamentals)", "Python (fundamentals)"],
      },
      languages: {
        title: "Languages",
        items: ["Spanish (native)", "English (fluent, B2-C1)"],
        note: "If needed, I am willing to obtain the official C1 certificate.",
      },
    },
    experience: {
      years_one: "{n} year",
      years_other: "{n} years",
      months_one: "{n} month",
      months_other: "{n} months",
      lessThanAMonth: "less than a month",
      conjunction: "and",
    },
    horizons: {
      eyebrow: "Next step",
      title: "What I am looking for",
      intro:
        "I am currently working and I want to keep doing so, but I would like to discover more of the world and broaden my horizons, in a place where I can contribute what I know and keep learning. I feel most comfortable working remotely or in a hybrid setup, although I am open to other options.",
      sectorsTitle: "Fields that especially catch my attention",
      sectors: ["Data management", "Administration", "Art", "Artificial intelligence"],
      open: "Even so, <strong>I am open to any field</strong>. I enjoy discovering new worlds.",
    },
    ai: {
      eyebrow: "Looking ahead",
      title: "AI in my work",
      intro:
        "I believe AI can be a great tool when you know how to use it and, above all, when to use it. In my work I use it every day as support for programming and data management, but <strong>I am always the one who decides and reviews the result</strong>. It does not replace what I know or my own judgment, and that is why I keep studying.",
    },
    journey: {
      eyebrow: "Journey",
      title: "Experience & education",
      intro: "My path so far.",
      items: {
        hospitality: {
          tag: "Professional",
          title: "Hospitality",
          body: "My first job, where I learned to deal with customers.",
        },
        electronics: {
          tag: "Education",
          title: "Electronics and Industrial Automation Engineering",
          meta: "2 years completed, Universidad Politécnica de Alcalá",
          body: "My starting point towards software development.",
        },
        dam: {
          tag: "Education",
          title: "Higher Technician in Multiplatform Application Development (DAM)",
          meta: "Completed",
          body: "Higher vocational qualification in software development.",
        },
        professional: {
          tag: "Professional (in progress)",
          role: "Business Central developer",
          companyFallback: "At a consultancy, with Microsoft Dynamics 365 Business Central",
          versions: "Several projects and clients at once",
          since: "Since {year} to the present",
        },
        unir: {
          tag: "Education (in progress)",
          title: "Computer Engineering, UNIR",
          body: "Online degree that I combine with my job.",
        },
      },
    },
    beyond: {
      eyebrow: "Beyond work",
      title: "My creative side",
      body:
        "In my free time, what I enjoy most is music. I love singing and playing the guitar, and I also enjoy drawing, reading and playing video games. I think that creative side comes with me to work and helps me see things from a different point of view.",
      body2:
        "For me, art belongs to human beings. That is why I use AI as support when I program or work with data, but never to create art.",
      photoAlt: "Mountain lake at sunset",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk",
      intro:
        "If you think I could be a good fit for your team, write to me. I would be glad to meet you.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download CV",
      emailUnavailable: "Email coming soon",
      linkedinUnavailable: "LinkedIn coming soon",
      cvUnavailable: "CV coming soon",
      form: {
        title: "Send me a message",
        name: "Name",
        email: "Email",
        company: "Company (optional)",
        message: "Message",
        send: "Send message",
        sending: "Sending…",
        success: "Thank you, your message has been sent. I will get back to you shortly.",
        mailto: "Your email app should open with the message ready to send.",
        error: "The message could not be sent. Please try again or contact me directly by email.",
        missing: "Please fill in your name, email and message.",
        invalidEmail: "Please enter a valid email address.",
        subject: "Cover letter contact",
      },
      backToTop: "Back to top",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Designed and developed by Lucía Esteban.",
    },
  },

  es: {
    meta: {
      title: "LuciaEstebanPF",
      description:
        "Carta de presentación de Lucía Esteban Peña. Organizada, cuidadosa con los detalles, integrada en el equipo y abierta a nuevos ámbitos.",
    },
    skipLink: "Ir al contenido principal",
    nav: {
      expertise: "Cómo soy",
      ecosystem: "Qué sé hacer",
      horizons: "Qué busco",
      ai: "IA",
      journey: "Trayectoria",
      contact: "Contacto",
      langToggleLabel: "Cambiar idioma",
      themeToggleLabel: "Cambiar a modo oscuro",
    },
    hero: {
      eyebrow: "Carta de presentación",
      name: "Lucía Esteban Peña",
      role: "",
      tagline:
        "Soy organizada, detallista y me gusta trabajar en equipo. Actualmente estoy trabajando en una consultoría y busco un nuevo reto en el que <strong>seguir aprendiendo y aportar lo mejor de mí</strong>.",
      badgeRemote: "Preferencia: remoto o híbrido",
      ctaPrimary: "Conóceme",
      ctaSecondary: "Hablemos",
      photoAlt: "Fotografía de retrato de Lucía Esteban Peña",
      scrollHint: "Desplázate para explorar",
    },
    expertise: {
      eyebrow: "Cómo soy",
      title: "Cómo trabajo",
      intro: "Así soy en el día a día.",
      items: {
        balance: { title: "En equipo", body: "Me llevo bien con la gente y me gusta que haya buen ambiente. En los sitios donde he trabajado me he sentido parte del equipo muy pronto, y también sé avanzar por mi cuenta cuando hace falta." },
        organized: { title: "Organizada", body: "Me gusta organizarme. Apunto los plazos, divido el trabajo en tareas más pequeñas y marco las prioridades para que no se me pase nada. Y cuando no hay tiempo para ser tan minuciosa, también sé desenvolverme." },
        adapt: { title: "Me adapto bien", body: "Los cambios no me asustan. Me acostumbro pronto a nuevas herramientas, compañeros y formas de trabajar." },
        communication: { title: "Trato con las personas", body: "Soy sociable y disfruto del trato con la gente. Además, tengo experiencia tratando con clientes." },
        detail: { title: "Detallista", body: "Me gusta que las cosas queden bien hechas, así que reviso mi trabajo con cuidado antes de darlo por terminado." },
        learn: { title: "Ganas de aprender", body: "Disfruto aprendiendo cosas nuevas. Por eso sigo estudiando mientras trabajo." },
      },
    },
    ecosystem: {
      eyebrow: "Experiencia",
      title: "Qué sé hacer",
      introBeforeDuration: "Sigo trabajando y llevo ",
      introAfterDuration:
        " como desarrolladora de Microsoft Dynamics 365 Business Central, un ERP: el programa con el que una empresa gestiona su funcionamiento interno en un solo sitio, desde las ventas y las compras hasta la facturación, los proyectos, el personal y la contabilidad. Trabajar con él me ha dado una base sólida sobre cómo funciona una empresa y cómo se conectan sus áreas, y me gustaría seguir aprendiendo y especializarme si el puesto lo requiere. Ahora mismo mi trabajo es la programación, pero eso no limita lo que puedo hacer.",
      work: {
        title: "Algunas cosas que he hecho",
        items: [
          "Migración de datos",
          "Desarrollo de un módulo de gestión de proyectos",
          "APIs de RR. HH.",
          "Informes de albaranes y ventas",
          "Gestión de datos de movimientos contables",
          "Facturación electrónica",
          "Vencimientos de pago",
        ],
      },
      core: {
        title: "Lo que manejo",
        items: ["Programación", "Trabajo con datos", "Informes", "Procesos de empresa", "SQL", "Excel", "Git"],
      },
      professional: {
        title: "Lo que más disfruto",
        items: ["Resolver problemas", "Organizar y planificar", "Adquirir nuevas cualidades"],
      },
      additional: {
        title: "Formación",
        items: ["Java", "HTML / CSS", "Nociones de C", "Nociones de Python"],
      },
      languages: {
        title: "Idiomas",
        items: ["Español (nativo)", "Inglés (fluido, B2-C1)"],
        note: "Si fuera necesario, estoy dispuesta a obtener el título oficial de C1.",
      },
    },
    experience: {
      years_one: "{n} año",
      years_other: "{n} años",
      months_one: "{n} mes",
      months_other: "{n} meses",
      lessThanAMonth: "menos de un mes",
      conjunction: "y",
    },
    horizons: {
      eyebrow: "El siguiente paso",
      title: "Qué busco",
      intro:
        "Actualmente sigo trabajando y quiero seguir haciéndolo, pero me gustaría descubrir más mundo y ampliarme, en un lugar donde aportar lo que sé y seguir aprendiendo. Me siento más cómoda en remoto o en híbrido, aunque estoy abierta a valorar otras opciones.",
      sectorsTitle: "Ámbitos que me llaman especialmente la atención",
      sectors: ["Manejo de datos", "Administración", "Arte", "Inteligencia artificial"],
      open: "Aun así, <strong>estoy abierta a cualquier ámbito</strong>. Me gusta descubrir mundos nuevos.",
    },
    ai: {
      eyebrow: "Mirando al futuro",
      title: "La IA en mi trabajo",
      intro:
        "Creo que la IA puede ser una gran herramienta si se sabe usar y, sobre todo, si se sabe cuándo usarla. En mi trabajo la utilizo todos los días como apoyo en la programación y en la gestión de datos, pero <strong>siempre soy yo quien decide y revisa el resultado</strong>. No sustituye lo que sé ni mi propio criterio, y por eso sigo formándome.",
    },
    journey: {
      eyebrow: "Trayectoria",
      title: "Experiencia y formación",
      intro: "Mi recorrido hasta hoy.",
      items: {
        hospitality: {
          tag: "Profesional",
          title: "Hostelería",
          body: "Mi primer trabajo, donde aprendí a tratar con clientes.",
        },
        electronics: {
          tag: "Formación",
          title: "Ingeniería Electrónica Automática Industrial",
          meta: "2 años completados, Universidad Politécnica de Alcalá",
          body: "Fue mi punto de partida hacia el desarrollo de software.",
        },
        dam: {
          tag: "Formación",
          title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
          meta: "Completado",
          body: "Ciclo Formativo de Grado Superior en desarrollo de software.",
        },
        professional: {
          tag: "Profesional (en curso)",
          role: "Desarrolladora de Business Central",
          companyFallback: "En una consultora, con Microsoft Dynamics 365 Business Central",
          versions: "Varios proyectos y clientes a la vez",
          since: "Desde {year} hasta la actualidad",
        },
        unir: {
          tag: "Formación (en curso)",
          title: "Ingeniería Informática, UNIR",
          body: "Grado online que compagino con el trabajo.",
        },
      },
    },
    beyond: {
      eyebrow: "Más allá del trabajo",
      title: "Mi lado creativo",
      body:
        "En mi tiempo libre, lo que más disfruto es la música. Me encanta cantar y tocar la guitarra, y también me gusta dibujar, leer y jugar a videojuegos. Creo que esa parte creativa me acompaña en el trabajo y me ayuda a ver las cosas desde otro punto de vista.",
      body2:
        "Para mí, el arte pertenece al ser humano. Por eso uso la IA como apoyo cuando programo o trabajo con datos, pero nunca para crear arte.",
      photoAlt: "Lago de montaña al atardecer",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos",
      intro:
        "Si crees que puedo encajar en tu equipo, escríbeme. Estaré encantada de conocerte.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Descargar CV",
      emailUnavailable: "Email próximamente",
      linkedinUnavailable: "LinkedIn próximamente",
      cvUnavailable: "CV próximamente",
      form: {
        title: "Envíame un mensaje",
        name: "Nombre",
        email: "Email",
        company: "Empresa (opcional)",
        message: "Mensaje",
        send: "Enviar mensaje",
        sending: "Enviando…",
        success: "Gracias, tu mensaje se ha enviado correctamente. Te responderé lo antes posible.",
        mailto: "Se abrirá tu aplicación de correo con el mensaje listo para enviar.",
        error: "No se ha podido enviar el mensaje. Inténtalo de nuevo o contáctame directamente por email.",
        missing: "Por favor, rellena tu nombre, email y mensaje.",
        invalidEmail: "Por favor, introduce un email válido.",
        subject: "Contacto desde la carta de presentación",
      },
      backToTop: "Volver arriba",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Diseñada y desarrollada por Lucía Esteban.",
    },
  },
};
