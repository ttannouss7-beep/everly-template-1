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
  weddingDate: new Date("2026-06-06T17:30:00"),   // ← Change this date
  rsvpDeadline: "1 July 2026",

  // ── HERO SECTION ─────────────────────────────────────────
  hero: {
    preTitle: "We Are Getting Married",
    date: "6 · VI · 2026",
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
        id: "groom-house",
        title: "Groom's House",
        date: "Saturday, 6 June 2026",
        time: "",
        location: "Mattar Residence",
        address: "Kaslik, Lebanon",
        mapLink: "https://maps.google.com/?q=34.1830083,35.7767968",
        description: "Georges's family home",
      },
      {
        id: "bride-house",
        title: "Bride's House",
        date: "Saturday, 6 June 2026",
        time: "",
        location: "Fares Residence",
        address: "Jounieh, Lebanon",
        mapLink: "https://maps.google.com/?q=33.9808,35.6178",
        description: "Rita's family home",
      },
      {
        id: "ceremony",
        title: "Wedding Ceremony",
        date: "Saturday, 6 June 2026",
        time: "5:30 PM",
        location: "Costantine & Helene Church",
        address: "Kaslik, Lebanon",
        mapLink: "https://maps.google.com/?q=34.1830083,35.7767968",
        description: "Please be seated by 5:15 PM",
      },
      {
        id: "reception",
        title: "Wedding Reception",
        date: "Saturday, 6 June 2026",
        time: "7:30 PM onwards",
        location: "Military Complex",
        address: "Fiyadieh, Lebanon",
        mapLink: "https://maps.google.com/?q=33.8547,35.5571",
        description: "Cocktails, dinner and dancing",
      },
    ],
  },

  // ── DAY PROGRAMME / TIMELINE ──────────────────────────────
  timeline: {
    title: "Day Programme",
    subtitle: "Saturday, 6 June 2026",
    items: [
      {
        time: "17:15",
        label: "Arrival",
        description: "Guests arrive at Costantine & Helene Church",
      },
      {
        time: "17:30",
        label: "Ceremony",
        description: "Wedding ceremony at the church",
      },
      {
        time: "19:30",
        label: "Reception",
        description: "Arrival at Military Complex, Fiyadieh",
      },
      {
        time: "20:00",
        label: "Cocktail Hour",
        description: "Welcome drinks & canapés",
      },
      {
        time: "21:00",
        label: "Dinner",
        description: "Wedding dinner & celebrations",
      },
      {
        time: "22:30",
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
    image: "/images/gallery-2.jpg",
  },

  // ── INFORMAL EVENTS (gold background section) ─────────────
  informalEvents: {
    title: "Come Say Hello",
    subtitle: "Pre & Post Wedding Events",
    events: [
      {
        id: "rehearsal",
        title: "Welcome Dinner",
        date: "Friday, 5 June 2026",
        time: "7:00 PM",
        location: "Costantine & Helene, Kaslik",
        address: "Kaslik, Lebanon",
        description: "Join us the evening before for an intimate dinner with close family and friends.",
      },
      {
        id: "brunch",
        title: "Farewell Brunch",
        date: "Sunday, 7 June 2026",
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
      { src: "/images/gallery-1.jpg", alt: "Georges & Rita" },
      { src: "/images/gallery-2.jpg", alt: "Georges & Rita" },
      { src: "/images/gallery-3.jpg", alt: "Georges & Rita" },
      { src: "/images/gallery-4.jpg", alt: "Georges & Rita" },
    ],
    strip2: [
      { src: "/images/gallery-5.jpg", alt: "Georges & Rita" },
      { src: "/images/gallery-6.jpg", alt: "Georges & Rita" },
      { src: "/images/gallery-7.jpg", alt: "Georges & Rita" },
      { src: "/images/gallery-8.jpg", alt: "Georges & Rita" },
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
        name: "Georges Mattar",
        iban: "96171369673",
        bic: "XXXXXXXXXX",
      },
    ],
  },

  // ── FOOTER ───────────────────────────────────────────────
  footer: {
    tagline: "Together forever",
    date: "6 June 2026",
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
    preTitle: "زواجنا المبارك",
    date: "٦ · حزيران · ٢٠٢٦",
    location: "كنيسة القدّيسَين قسطنطين وهيلانة، الكسليك",
    ctaLabel: "تثبيت الحضور",
  },
  intro: {
    preTitle: "يتشرّف العروسان بدعوتكم",
    subtitle: "لحضور مراسم زفاف",
    ctaLabel: "الدخول",
  },
  countdown: {
    title: "العدّ التنازلي ليومنا الكبير",
    subtitle: "موعدنا يقترب... نلتقي قريبًا",
    labels: { days: "يوم", hours: "ساعة", minutes: "دقيقة", seconds: "ثانية" },
  },
  welcome: {
    title: "أهلاً وسهلاً بكم",
    body: [
      "يسرّنا ويشرّفنا أن نتقاسم فرحة هذا اليوم المبارك مع أغلى الناس على قلبنا.",
      "برفقة عائلتَينا، ندعوكم للاحتفال معنا ببداية مسيرة حياتنا المشتركة وعهد الحبّ الأبدي.",
      "شكرًا لأنّكم جزءٌ لا يتجزّأ من قصّتنا.",
    ],
    signature: "بكلّ محبّة، جورج وريتا",
  },
  venue: {
    title: "حفل الزفاف",
    subtitle: "تفاصيل المناسبات",
    events: [
      {
        id: "groom-house",
        title: "منزل العريس",
        date: "السبت، ٦ حزيران ٢٠٢٦",
        time: "",
        location: "منزل عائلة مطر",
        address: "الكسليك، لبنان",
        mapLink: "https://maps.google.com/?q=34.1830083,35.7767968",
        description: "منزل عائلة جورج",
      },
      {
        id: "bride-house",
        title: "منزل العروس",
        date: "السبت، ٦ حزيران ٢٠٢٦",
        time: "",
        location: "منزل عائلة فارس",
        address: "جونيه، لبنان",
        mapLink: "https://maps.google.com/?q=33.9808,35.6178",
        description: "منزل عائلة ريتا",
      },
      {
        id: "ceremony",
        title: "مراسم الإكليل",
        date: "السبت، ٦ حزيران ٢٠٢٦",
        time: "٥:٣٠ مساءً",
        location: "كنيسة القدّيسَين قسطنطين وهيلانة",
        address: "الكسليك، لبنان",
        mapLink: "https://maps.google.com/?q=34.1830083,35.7767968",
        description: "نرجو التواجد قبل الساعة ٥:١٥ مساءً",
      },
      {
        id: "reception",
        title: "حفل الاستقبال",
        date: "السبت، ٦ حزيران ٢٠٢٦",
        time: "٧:٣٠ مساءً وما بعدها",
        location: "المجمّع العسكري",
        address: "الفياضيّة، لبنان",
        mapLink: "https://maps.google.com/?q=33.8547,35.5571",
        description: "كوكتيل وعشاء ورقص",
      },
    ],
  },
  timeline: {
    title: "برنامج اليوم",
    subtitle: "السبت، ٦ حزيران ٢٠٢٦",
    items: [
      { time: "١٧:١٥", label: "الوصول", description: "وصول المدعوّين إلى الكنيسة" },
      { time: "١٧:٣٠", label: "مراسم الإكليل", description: "مراسم الزواج في الكنيسة" },
      { time: "١٩:٣٠", label: "الاستقبال", description: "الوصول إلى المجمّع العسكري، الفياضيّة" },
      { time: "٢٠:٠٠", label: "الكوكتيل", description: "مشروبات ومقبّلات ترحيبيّة" },
      { time: "٢١:٠٠", label: "العشاء", description: "عشاء الزفاف والاحتفال" },
      { time: "٢٢:٣٠", label: "قطع الكعكة", description: "قطع كعكة الزفاف والرقصة الأولى" },
      { time: "٠٠:٠٠", label: "نهاية السهرة", description: "انتهاء الحفل — عودة آمنة إلى المنازل" },
    ],
  },
  informalEvents: {
    title: "نورونا بطلّتكم",
    subtitle: "مناسبات ما قبل الزفاف وما بعده",
  },
  location: {
    title: "كيفيّة الوصول",
  },
  accommodation: {
    title: "أماكن الإقامة",
    subtitle: "وفّرنا لكم أسعارًا مميّزة في الأماكن التالية",
  },
  rsvp: {
    title: "تثبيت الحضور",
    subtitle: "نرجو تأكيد حضوركم الكريم",
    deadline: "في موعدٍ أقصاه ١ تمّوز ٢٠٢٦",
    fields: {
      attending: {
        label: "هل ستُشرّفوننا بحضوركم؟",
        yes: "بكلّ فرح وسرور",
        no: "مع الأسف، لن أتمكّن من الحضور",
      },
      name: { label: "الاسم الكامل", placeholder: "الاسم الثلاثي" },
      email: { label: "البريد الإلكتروني", placeholder: "example@email.com" },
      guestCount: { label: "عدد المدعوّين (بما فيهم حضرتكم)" },
      dietary: {
        label: "ملاحظات غذائيّة",
        placeholder: "نباتي، حساسيّة تجاه أطعمة معيّنة...",
      },
      children: { label: "هل سيرافقكم أطفال؟", yes: "نعم", no: "لا" },
      message: {
        label: "كلمة للعروسَين",
        placeholder: "شاركونا أجمل تمنّياتكم...",
      },
      submit: "تأكيد الحضور",
    },
    successMessage: {
      title: "شكرًا جزيلاً!",
      body: "وصلنا تأكيد حضوركم بنجاح. يسعدنا اللقاء بكم في هذا اليوم المبارك!",
    },
    declineMessage: {
      title: "سنفتقدكم كثيرًا!",
      body: "نشكركم على إعلامنا. نتمنّى أن تجمعنا مناسبة سعيدة أخرى قريبًا.",
    },
  },
  gifts: {
    title: "الهدايا",
    subtitle: "حضوركم هو أغلى هديّة. إذا رغبتم بتقديم هديّة، تجدون أدناه المعلومات اللازمة:",
  },
  footer: {
    tagline: "معًا إلى الأبد",
    date: "٦ حزيران ٢٠٢٦",
    location: "كنيسة القدّيسَين قسطنطين وهيلانة، الكسليك",
  },
} as const;
