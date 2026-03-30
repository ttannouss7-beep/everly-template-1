// ============================================================
//  WEDDING CONTENT — Edit everything here!
//  All text, dates, locations, and links live in this file.
// ============================================================

export const content = {
  // ── COUPLE ───────────────────────────────────────────────
  couple: {
    bride: "Rita",
    groom: "Georges",
    fullNames: "Georges & Rita",
    hashtag: "#GeorgesxRita2026",
  },

  // ── DATES ────────────────────────────────────────────────
  weddingDate: new Date("2026-09-05T14:00:00"),   // ← Change this date
  rsvpDeadline: "1 July 2026",

  // ── HERO SECTION ─────────────────────────────────────────
  hero: {
    preTitle: "We Are Getting Married",
    date: "5 · IX · 2026",
    location: "Costantine & Helene, Kaslik",
    ctaLabel: "RSVP",
    // Path to your hero video (place in /public/video/hero.mp4)
    // Leave empty "" to show the fallback image instead
    videoSrc: "",
    // Fallback background image (place in /public/images/ or use a URL)
    fallbackImage: "/images/hero.jpg",
  },

  // ── INTRO / SPLASH SCREEN ────────────────────────────────
  intro: {
    preTitle: "You are cordially invited",
    subtitle: "to the wedding of",
    ctaLabel: "Enter",
    // Path to intro video (place in /public/video/intro.mp4)
    // Leave empty "" to skip video and show image splash only
    videoSrc: "/video/intro.mp4",
    fallbackImage: "/images/hero.jpg",
  },

  // ── COUNTDOWN ─────────────────────────────────────────────
  countdown: {
    title: "Until Forever Begins",
    subtitle: "Join us as we celebrate our love",
    labels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
  },

  // ── WELCOME / INTRO TEXT ─────────────────────────────────
  welcome: {
    title: "Welcome",
    body: [
      "We are overjoyed to share this special day with the people who mean the most to us.",
      "Together with our families, we invite you to celebrate our union and the beginning of our forever.",
      "Thank you for being part of our story.",
    ],
    signature: "With love, Georges & Rita",
  },

  // ── VENUE / EVENTS (gold background section) ─────────────
  venue: {
    title: "The Wedding",
    subtitle: "Events",
    events: [
      {
        id: "ceremony",
        title: "Wedding Ceremony",
        date: "Saturday, 5 September 2026",
        time: "2:30 PM",
        location: "Costantine & Helene Church",
        address: "Kaslik, Lebanon",
        mapLink: "https://maps.google.com/?q=34.1830083,35.7767968",
        description: "Please be seated by 2:15 PM",
      },
      {
        id: "reception",
        title: "Wedding Reception",
        date: "Saturday, 5 September 2026",
        time: "4:00 PM onwards",
        location: "Costantine & Helene, Kaslik",
        address: "Kaslik, Lebanon",
        mapLink: "https://maps.google.com/?q=34.1830083,35.7767968",
        description: "Cocktails, dinner and dancing",
      },
      {
        id: "groom-house",
        title: "Groom's House",
        date: "Saturday, 5 September 2026",
        time: "",
        location: "Tannous Residence",
        address: "Kaslik, Lebanon",
        mapLink: "https://maps.google.com/?q=34.1830083,35.7767968",
        description: "Georges's family home",
      },
      {
        id: "bride-house",
        title: "Bride's House",
        date: "Saturday, 5 September 2026",
        time: "",
        location: "Bride's Residence",
        address: "Kaslik, Lebanon",
        mapLink: "https://maps.google.com/?q=34.1830083,35.7767968",
        description: "Rita's family home",
      },
    ],
  },

  // ── DAY PROGRAMME / TIMELINE ──────────────────────────────
  timeline: {
    title: "Day Programme",
    subtitle: "Saturday, 5 September 2026",
    items: [
      {
        time: "14:00",
        label: "Arrival",
        description: "Welcome drinks & canapés on the terrace",
      },
      {
        time: "14:30",
        label: "Ceremony",
        description: "Wedding ceremony in the chapel",
      },
      {
        time: "16:00",
        label: "Cocktail Hour",
        description: "Champagne reception in the gardens",
      },
      {
        time: "18:00",
        label: "Dinner",
        description: "Five-course wedding dinner in the ballroom",
      },
      {
        time: "20:00",
        label: "Cake Cutting",
        description: "Cut the cake & first dance",
      },
      {
        time: "00:00",
        label: "Carriages",
        description: "Evening ends — safe travels home",
      },
    ],
  },

  // ── VENUE PHOTO QUOTE ─────────────────────────────────────
  venueQuote: {
    quote:
      "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    attribution: "Maya Angelou",
    image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=1920&q=80",
  },

  // ── INFORMAL EVENTS (gold background section) ─────────────
  informalEvents: {
    title: "Come Say Hello",
    subtitle: "Pre & Post Wedding Events",
    events: [
      {
        id: "rehearsal",
        title: "Welcome Dinner",
        date: "Friday, 4 September 2026",
        time: "7:00 PM",
        location: "Costantine & Helene, Kaslik",
        address: "Kaslik, Lebanon",
        description: "Join us the evening before for an intimate dinner with close family and friends.",
      },
      {
        id: "brunch",
        title: "Farewell Brunch",
        date: "Sunday, 6 September 2026",
        time: "11:00 AM",
        location: "Costantine & Helene, Kaslik",
        address: "Kaslik, Lebanon",
        description: "A relaxed morning brunch before you head home. Dress code: casual.",
      },
    ],
  },

  // ── LOCATION & TRANSPORT ─────────────────────────────────
  location: {
    title: "Getting There",
    venueName: "Costantine & Helene",
    address: "Kaslik, Lebanon",
    mapLink: "https://maps.google.com/?q=34.1830083,35.7767968",
    transport: [
      {
        mode: "By Car",
        icon: "car",
        details: "Kaslik is located in the Byblos district. Free parking is available on site.",
      },
      {
        mode: "From Beirut",
        icon: "train",
        details: "Approximately 1 hour drive from Beirut via the Jounieh highway (route north).",
      },
      {
        mode: "By Taxi",
        icon: "taxi",
        details: "We recommend pre-booking a taxi or ride from Beirut or Jounieh in advance.",
      },
      {
        mode: "Shuttle Bus",
        icon: "bus",
        details: "A complimentary shuttle will depart from Jounieh at 1:30 PM. Return at midnight.",
      },
    ],
  },

  // ── ACCOMMODATION ────────────────────────────────────────
  accommodation: {
    title: "Where to Stay",
    subtitle: "We have secured preferential rates at the properties below",
    hotels: [
      {
        name: "Kaslik Chalets",
        type: "Near-venue accommodation",
        distance: "5 min drive",
        note: "Limited rooms available — book early!",
        bookingContact: "info@mayfouk.com",
        bookingCode: "ELSAELIE2026",
      },
      {
        name: "Le Crillon Byblos",
        type: "4-star hotel",
        distance: "20 min drive",
        note: "Preferred rate available with code below",
        bookingContact: "+961 9 540 440",
        bookingCode: "WEDDING26",
      },
      {
        name: "Byblos Sur Mer",
        type: "Boutique hotel",
        distance: "25 min drive",
        note: "Scenic harbour views, ideal for families",
        bookingContact: "+961 9 548 000",
        bookingCode: "ELSAELIE",
      },
    ],
  },

  // ── GALLERY IMAGES ────────────────────────────────────────
  // Replace with your own photo paths: /images/gallery-1.jpg etc.
  gallery: {
    strip1: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=480&h=680&q=80",
        alt: "Couple portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=480&h=680&q=80",
        alt: "Wedding ceremony",
      },
      {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=480&h=680&q=80",
        alt: "Reception",
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=480&h=680&q=80",
        alt: "Wedding flowers",
      },
      {
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=480&h=680&q=80",
        alt: "Outdoor ceremony",
      },
    ],
    strip2: [
      {
        src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=480&h=680&q=80",
        alt: "Wedding rings",
      },
      {
        src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=480&h=680&q=80",
        alt: "Bride portrait",
      },
      {
        src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=480&h=680&q=80",
        alt: "Wedding table",
      },
      {
        src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=480&h=680&q=80",
        alt: "First dance",
      },
      {
        src: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=480&h=680&q=80",
        alt: "Venue",
      },
    ],
  },

  // ── RSVP SECTION ─────────────────────────────────────────
  rsvp: {
    title: "RSVP",
    subtitle: "Please confirm your attendance",
    deadline: "by 1 July 2026",
    backgroundImage: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&w=1920&q=80",
    fields: {
      attending: {
        label: "Will you be attending?",
        yes: "Joyfully Accepts",
        no: "Regretfully Declines",
      },
      name: { label: "Full Name", placeholder: "Your full name" },
      email: { label: "Email Address", placeholder: "your@email.com" },
      guestCount: { label: "Number of guests (including yourself)" },
      dietary: {
        label: "Dietary requirements",
        placeholder: "Vegetarian, vegan, allergies...",
      },
      children: {
        label: "Will children be attending?",
        yes: "Yes",
        no: "No",
      },
      message: {
        label: "Message to the couple",
        placeholder: "Share your wishes or any special requests...",
      },
      submit: "Confirm RSVP",
    },
    successMessage: {
      title: "Thank you!",
      body: "Your RSVP has been received. We cannot wait to celebrate with you!",
    },
    declineMessage: {
      title: "We will miss you!",
      body: "Thank you for letting us know. We hope to celebrate with you another time.",
    },
  },

  // ── GIFTS / BANK ACCOUNTS ────────────────────────────────
  gifts: {
    title: "Gifts",
    subtitle: "Your presence is our greatest gift. If you wish to give us something, please find our bank account information below:",
    accounts: [
      {
        bank: "Caixabank",
        name: "Andrea Morales",
        iban: "ES00 0000 0000 0000 0000 0000",
        bic: "XXXXXXXXXX",
      },
    ],
  },

  // ── FOOTER ───────────────────────────────────────────────
  footer: {
    tagline: "Together forever",
    date: "5 September 2026",
    location: "Costantine & Helene, Kaslik",
  },

  // ── LANGUAGE TOGGLE ──────────────────────────────────────
  // Set to false to hide the language switcher
  enableLanguageSwitcher: true,

  // ── MUSIC ────────────────────────────────────────────────
  // Path to your background music file. Place in /public/audio/
  // Leave empty "" to disable music entirely
  musicSrc: "/audio/Wedding Audio Updated.mp3",
  enableMusic: true,
} as const;

// ── ARABIC TRANSLATIONS ───────────────────────────────────
export const contentAR = {
  couple: {
    bride: "ريتا",
    groom: "جورج",
    fullNames: "جورج وريتا",
  },
  hero: {
    preTitle: "نحن نتزوج",
    date: "5 · IX · 2026",
    location: "كنيسة مار إيليا، الميفوق",
    ctaLabel: "تأكيد الحضور",
  },
  intro: {
    preTitle: "يشرّفنا دعوتكم",
    subtitle: "لحضور زفاف",
    ctaLabel: "ادخل",
  },
  countdown: {
    title: "العد التنازلي",
    subtitle: "حتى يبدأ الأبد",
    labels: { days: "أيام", hours: "ساعات", minutes: "دقائق", seconds: "ثوانٍ" },
  },
  welcome: {
    title: "أهلاً بكم",
    body: [
      "يسعدنا مشاركة هذا اليوم المميز مع أعز الناس إلى قلوبنا.",
      "نتشرف برفقة عائلتينا بدعوتكم للاحتفال بزواجنا وبداية حياتنا المشتركة.",
      "شكراً لكونكم جزءاً من قصتنا.",
    ],
    signature: "بكل محبة، شربل وجويل",
  },
  venue: {
    title: "حفل الزفاف",
    subtitle: "المناسبات",
  },
  timeline: {
    title: "برنامج اليوم",
    subtitle: "السبت، ٥ سبتمبر ٢٠٢٦",
  },
  informalEvents: {
    title: "تعالوا نلتقي",
    subtitle: "فعاليات ما قبل وما بعد الزفاف",
  },
  location: {
    title: "كيفية الوصول",
  },
  accommodation: {
    title: "أماكن الإقامة",
    subtitle: "حصلنا على أسعار مميزة في الأماكن التالية",
  },
  rsvp: {
    title: "تأكيد الحضور",
    subtitle: "يرجى تأكيد حضوركم",
    deadline: "قبل ١ يوليو ٢٠٢٦",
    fields: {
      attending: {
        label: "هل ستحضرون؟",
        yes: "نعم، بكل سرور",
        no: "آسف، لن أتمكن",
      },
      name: { label: "الاسم الكامل", placeholder: "اسمك الكامل" },
      email: { label: "البريد الإلكتروني", placeholder: "بريدك@example.com" },
      guestCount: { label: "عدد الحضور (شاملاً نفسك)" },
      dietary: {
        label: "المتطلبات الغذائية",
        placeholder: "نباتي، حساسية للطعام...",
      },
      children: { label: "هل سيحضر أطفال؟", yes: "نعم", no: "لا" },
      message: {
        label: "رسالة للعروسين",
        placeholder: "شاركونا تمنياتكم...",
      },
      submit: "تأكيد الحضور",
    },
    successMessage: {
      title: "شكراً لكم!",
      body: "تم استلام تأكيد حضوركم. لا يسعدنا الانتظار للاحتفال معكم!",
    },
    declineMessage: {
      title: "سنفتقدكم!",
      body: "شكراً لإعلامنا. نأمل أن نحتفل معكم في مناسبة أخرى.",
    },
  },
  footer: {
    tagline: "معاً إلى الأبد",
    date: "٥ سبتمبر ٢٠٢٦",
    location: "كنيسة مار إيليا، الميفوق",
  },
} as const;
