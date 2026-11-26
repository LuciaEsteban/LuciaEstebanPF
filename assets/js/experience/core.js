/**
 * Experience layer: shared core.
 *
 * The "experience" scripts add the intro screen, sound, music, voice
 * message, seasonal background and small interactions on top of the
 * base site (main.js). They share one namespace, window.XP, and are
 * loaded in this order from index.html:
 *
 *   core.js      namespace, copy (EN/ES), helpers
 *   sound.js     sound effects, background music, voice clips
 *   visuals.js   ripple effect, seasonal background
 *   controls.js  floating music player + seasonal animation switch
 *   intro.js     bubble intro screen
 *   voice.js     "Listen to me" speech bubble + synced captions
 *   page.js      page interactions, contact form, start-up
 */
(function () {
  "use strict";

  var XP = (window.XP = window.XP || {});

  XP.reduceMotion = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);
  XP.finePointer = !!(window.matchMedia && matchMedia("(pointer: fine)").matches);

  /* ------------------------------------------------------------------ */
  /* Copy used by the experience layer (the page copy lives in i18n.js) */
  /* ------------------------------------------------------------------ */
  XP.TEXT = {
    en: {
      // Intro
      eyebrow: "Cover letter",
      role: "",
      cta: "Tap the bubble to enter",
      hint: "Or press Enter to continue",
      bubbleLabel: "Enter the cover letter",
      langTip: "You can change the language here",
      welcomeText: "Welcome to my cover letter. If you would like to get to know me a little better, tap the bubble on the screen. You can also change the language in the top right corner.",
      // Music + seasonal animation controls
      musicOn: "♪ Music: on",
      musicOff: "♪ Music: off",
      play: "Play background music",
      pause: "Pause background music",
      volume: "Music volume",
      voiceMute: "Mute the voice message",
      voiceUnmute: "Unmute the voice message",
      animOn: "Animation: on",
      animOff: "Animation: off",
      animLabelOn: "Turn off the seasonal background animation",
      animLabelOff: "Turn on the seasonal background animation",
      // Voice message
      listen: "Listen to me",
      listenLabel: "Play a short spoken welcome message (about 40 seconds)",
      speaker: "Lucía",
      nowPlaying: "Voice message",
      // Captions, timed to the pauses in the recording: [start s, end s, words]
      openingCues: [
        [0.35, 2.1, "Hello and welcome to my cover letter."],
        [2.83, 4.8, "Here you can get to know me a little better,"],
        [5.34, 7.8, "from the way I work and my strongest points,"],
        [8.21, 10.95, "to the tools I use, including how I use AI."],
        [11.92, 14.4, "We will also go through my studies and training,"],
        [15.09, 18.52, "and finish with a small glimpse of what I do outside of work."],
        [19.23, 22.75, "I hope you enjoy your visit to my cover letter and, if so,"],
        [23.14, 25.5, "I would be delighted to get to know you in return,"],
        [26.07, 28.76, "either through the contact form at the bottom of the page,"],
        [29.12, 31.18, "or through any of the other means I offer here."],
        [32.3, 35.36, "Thank you very much for your attention, and have a good day."]
      ],
      // Guided tour while the message plays: [start s, element to show]
      openingTour: [
        [5.34, "#expertise"],
        [8.21, "#ecosystem"],
        [9.6, "#ai"],
        [11.92, "#journey"],
        [15.3, ".section-beyond"],
        [26.07, "#contact"]
      ]
    },
    es: {
      eyebrow: "Carta de presentación",
      role: "",
      cta: "Toca la burbuja para entrar",
      hint: "O pulsa Enter para continuar",
      bubbleLabel: "Entrar a la carta de presentación",
      langTip: "Puedes cambiar el idioma aquí",
      welcomeText: "Bienvenidos a mi carta de presentación. Si quieres conocerme un poco más, toca la burbuja que aparece en pantalla. También puedes cambiar el idioma en la esquina superior derecha.",
      musicOn: "♪ Música: on",
      musicOff: "♪ Música: off",
      play: "Reproducir música de fondo",
      pause: "Pausar música de fondo",
      volume: "Volumen de la música",
      voiceMute: "Silenciar el mensaje de voz",
      voiceUnmute: "Activar el sonido del mensaje de voz",
      animOn: "Animación: on",
      animOff: "Animación: off",
      animLabelOn: "Desactivar la animación de fondo de temporada",
      animLabelOff: "Activar la animación de fondo de temporada",
      listen: "Escúchame",
      listenLabel: "Reproducir un breve mensaje de bienvenida (unos 40 segundos)",
      speaker: "Lucía",
      nowPlaying: "Mensaje de voz",
      openingCues: [
        [0.35, 3.25, "Hola y bienvenidos a mi carta de presentación."],
        [3.88, 5.85, "Aquí podréis conocerme un poco mejor,"],
        [6.27, 9.65, "desde mi forma de trabajo y mis aspectos más destacables,"],
        [10.08, 13.19, "a las herramientas que utilizo, como mi forma de usar la IA."],
        [14.04, 16.3, "Pasando también por mis estudios y formación,"],
        [16.77, 19.6, "hasta un pequeño detalle de lo que hago fuera del trabajo."],
        [20.34, 23.7, "Espero les sea agradable este paso por mi carta de presentación"],
        [24.19, 27.77, "y, en caso de que así sea, estaré encantada de conocerles de vuelta,"],
        [28.27, 32.1, "ya sea desde el formulario de contacto que les ofrezco al final de la página,"],
        [32.53, 35.7, "o bien por alguno de los otros medios que ofrezco en este mismo lugar."],
        [36.27, 39.5, "Muchas gracias por la atención, que tengan un buen día."]
      ],
      openingTour: [
        [6.27, "#expertise"],
        [10.08, "#ecosystem"],
        [11.6, "#ai"],
        [14.04, "#journey"],
        [16.77, ".section-beyond"],
        [28.27, "#contact"]
      ]
    }
  };

  /* Current language, as chosen with the site's EN/ES switch. */
  XP.lang = function () {
    var l = document.documentElement.getAttribute("lang");
    try { l = localStorage.getItem("lucia-portfolio-lang") || l; } catch (e) { /* storage blocked */ }
    return l === "es" ? "es" : "en";
  };

  XP.t = function (key) {
    return (XP.TEXT[XP.lang()] || XP.TEXT.en)[key];
  };

  /* Run a callback whenever the site language changes (EN/ES buttons). */
  var langListeners = [];
  XP.onLanguageChange = function (fn) { langListeners.push(fn); };
  document.addEventListener("click", function (e) {
    if (!e.target.closest || !e.target.closest(".lang-btn")) return;
    // main.js updates the language in its own click handler; run after it.
    setTimeout(function () { langListeners.forEach(function (fn) { fn(); }); }, 0);
  });

  XP.hz = function (midi) { return 440 * Math.pow(2, (midi - 69) / 12); };
})();
