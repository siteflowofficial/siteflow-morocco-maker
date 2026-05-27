import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  en: {
    "nav.services": "Services",
    "nav.features": "Features",
    "nav.process": "Process",
    "nav.pricing": "Pricing",
    "cta.whatsapp": "WhatsApp",
    "cta.whatsappFull": "Contact on WhatsApp",
    "cta.instagram": "Follow on Instagram",
    "cta.instagramShort": "Instagram",
    "cta.dmInstagram": "DM on Instagram",
    "cta.orderWhatsapp": "Order on WhatsApp",
    "cta.startConv": "Start the conversation on WhatsApp",
    "cta.orDm": "Or DM us on Instagram",

    "hero.badge": "Available — replying on WhatsApp within minutes",
    "hero.title1": "Websites that turn",
    "hero.title2": "visitors into",
    "hero.title3": "real customers",
    "hero.subtitle":
      "Premium, modern websites for salons, cafés, restaurants, gyms and local businesses in Morocco. Built fast, designed to convert.",
    "hero.tag1": "Fully custom design",
    "hero.tag2": "Mobile + desktop optimized",
    "hero.tag3": "Fast delivery",

    "trust.label": "Trusted by local businesses —",
    "trust.salons": "Salons",
    "trust.cafes": "Cafés",
    "trust.restaurants": "Restaurants",
    "trust.gyms": "Gyms",
    "trust.shops": "Shops",
    "trust.freelancers": "Freelancers",

    "who.eyebrow": "Who it's for",
    "who.title": "Built for the businesses that make Morocco move.",
    "who.subtitle":
      "Every site is shaped around your specific business — not a generic template.",
    "who.salons.t": "Salons & Spas",
    "who.salons.d": "Showcase services, prices and let clients book in seconds.",
    "who.cafes.t": "Cafés",
    "who.cafes.d": "A beautiful menu, hours and location — always up to date.",
    "who.rest.t": "Restaurants",
    "who.rest.d": "Menu, reservations, photos and reviews in one place.",
    "who.gyms.t": "Gyms & Studios",
    "who.gyms.d": "Classes, coaches, schedules and membership info.",
    "who.shops.t": "Local Shops",
    "who.shops.d": "Present your products and bring foot traffic in.",
    "who.free.t": "Freelancers",
    "who.free.d": "A premium portfolio that builds instant credibility.",

    "feat.eyebrow": "What's included",
    "feat.title": "Everything your business needs, nothing it doesn't.",
    "feat.subtitle":
      "A complete, ready-to-grow online presence — engineered to convert visitors into customers.",
    "feat.design.t": "Premium custom design",
    "feat.design.d":
      "A unique look that matches your brand, colors and atmosphere — no recycled templates.",
    "feat.mobile.t": "Mobile-first & desktop perfect",
    "feat.mobile.d":
      "Looks flawless on every phone, tablet and screen your customers use.",
    "feat.wa.t": "WhatsApp integration",
    "feat.wa.d": "One tap and your client is in your chat — ready to book or buy.",
    "feat.maps.t": "Google Maps built in",
    "feat.maps.d":
      "Customers find you and get directions without leaving your site.",
    "feat.social.t": "Social media connected",
    "feat.social.d":
      "Instagram, TikTok, Facebook — all your channels, neatly integrated.",
    "feat.seo.t": "SEO-ready structure",
    "feat.seo.d": "Built so Google can read, rank and recommend you locally.",
    "feat.speed.t": "Fast loading performance",
    "feat.speed.d": "Optimized for speed so visitors stay and convert.",
    "feat.secure.t": "Secure & reliable",
    "feat.secure.d": "Clean code, HTTPS by default, and zero shady plugins.",

    "ben.eyebrow": "The result",
    "ben.title": "Not just a website. A business growth tool.",
    "ben.gain.t": "Gain more customers",
    "ben.gain.d":
      "Turn online searches and Instagram visits into real bookings and walk-ins.",
    "ben.pro.t": "Look more professional",
    "ben.pro.d":
      "A premium website instantly builds trust — before a client even calls you.",
    "ben.google.t": "Appear on Google",
    "ben.google.d":
      "Be the business that shows up when locals search what you offer.",
    "ben.open.t": "Open 24/7",
    "ben.open.d":
      "Your website sells, books and informs even while you're closed.",
    "ben.local.t": "Boost local visibility",
    "ben.local.d":
      "Strengthen your presence on Google Maps and social platforms.",
    "ben.convert.t": "Convert more visitors",
    "ben.convert.d":
      "Clear CTAs, smart structure, and trust signals that turn clicks into clients.",

    "proc.eyebrow": "How it works",
    "proc.title": "A premium consultation. A simple process.",
    "proc.subtitle":
      "Full transparency. You're involved at every step — your business, your decisions.",
    "proc.s1.t": "Quick chat",
    "proc.s1.d":
      "Message us on WhatsApp or Instagram. We listen to your business, your style and your goals.",
    "proc.s2.t": "Personalized design",
    "proc.s2.d":
      "Colors, atmosphere, branding, menu, services — we tailor every detail to you.",
    "proc.s3.t": "Fast delivery",
    "proc.s3.d":
      "Your website goes live quickly, ready to attract customers from day one.",

    "why.eyebrow": "Why now",
    "why.title": "Not having a website costs more than getting one.",
    "why.subtitle":
      "Customers expect to find you online. If they can't, they pick the business that they can.",
    "why.p1":
      "Every day without a website, customers are choosing your competitors.",
    "why.p2":
      "Fully personalized — colors, atmosphere, branding and content shaped around your business.",
    "why.p3":
      "A real time saver: we handle everything end-to-end while you focus on running your business.",
    "why.p4":
      "Total transparency — direct communication on WhatsApp or Instagram, no agency middlemen.",
    "why.p5":
      "Fast delivery, premium quality, and ongoing support if you need it.",

    "vis.eyebrow": "Visibility",
    "vis.title": "Your business — everywhere it should be.",
    "vis.maps.t": "Google Maps",
    "vis.maps.d": "Linked to your business profile so locals find you instantly.",
    "vis.search.t": "Google Search",
    "vis.search.d": "Discoverable when customers search what you actually offer.",
    "vis.social.t": "Instagram & TikTok",
    "vis.social.d":
      "Share one link that does everything — bookings, menu, contact.",
    "vis.wa.t": "WhatsApp",
    "vis.wa.d": "Direct conversations with customers in a single tap.",

    "test.eyebrow": "Trust",
    "test.title": "Loved by local business owners.",
    "test.q1":
      "Our new site brought in bookings within the first week. Clean, fast, and exactly what we wanted.",
    "test.n1": "Yasmine — Salon owner, Casablanca",
    "test.q2":
      "Customers find us on Google now. The WhatsApp button alone changed everything.",
    "test.n2": "Karim — Café manager, Rabat",
    "test.q3":
      "Premium feel for a price I didn't think was possible. Worth every dirham.",
    "test.n3": "Sara — Boutique, Marrakech",

    "price.badge": "One simple offer",
    "price.title": "Complete Website Package",
    "price.subtitle":
      "Everything above — designed, built and delivered. No hidden costs, no monthly traps.",
    "price.once": "One-time payment",
    "price.note":
      "One of the most affordable professional website offers on the market — without compromising on premium quality.",
    "price.i1": "Full professional website",
    "price.i2": "Custom premium design",
    "price.i3": "Mobile + desktop optimization",
    "price.i4": "SEO-ready structure",
    "price.i5": "WhatsApp integration",
    "price.i6": "Google Maps integration",
    "price.i7": "Social media links",
    "price.i8": "Business-specific sections (menu, services, booking…)",
    "price.i9": "Fast loading performance",
    "price.i10": "Fast delivery",

    "final.title1": "Ready to turn your visitors into",
    "final.title2": "real customers?",
    "final.subtitle":
      "Tell us about your business. We'll handle the rest — quickly, transparently, and with the quality your brand deserves.",

    "foot.tag":
      "Websites that turn visitors into real customers. Made in Morocco.",
    "foot.rights": "All rights reserved.",
    "foot.made": "Made with care in Morocco",
  },

  fr: {
    "nav.services": "Services",
    "nav.features": "Fonctionnalités",
    "nav.process": "Processus",
    "nav.pricing": "Tarifs",
    "cta.whatsapp": "WhatsApp",
    "cta.whatsappFull": "Contactez-nous sur WhatsApp",
    "cta.instagram": "Suivez-nous sur Instagram",
    "cta.instagramShort": "Instagram",
    "cta.dmInstagram": "Message sur Instagram",
    "cta.orderWhatsapp": "Commander sur WhatsApp",
    "cta.startConv": "Discutons sur WhatsApp",
    "cta.orDm": "Ou écrivez-nous sur Instagram",

    "hero.badge": "Disponible — réponse sur WhatsApp en quelques minutes",
    "hero.title1": "Des sites web qui transforment",
    "hero.title2": "vos visiteurs en",
    "hero.title3": "vrais clients",
    "hero.subtitle":
      "Sites web premium et modernes pour salons, cafés, restaurants, salles de sport et commerces locaux au Maroc. Rapides à livrer, conçus pour convertir.",
    "hero.tag1": "Design entièrement personnalisé",
    "hero.tag2": "Optimisé mobile + desktop",
    "hero.tag3": "Livraison rapide",

    "trust.label": "La confiance des commerces locaux —",
    "trust.salons": "Salons",
    "trust.cafes": "Cafés",
    "trust.restaurants": "Restaurants",
    "trust.gyms": "Salles de sport",
    "trust.shops": "Boutiques",
    "trust.freelancers": "Freelances",

    "who.eyebrow": "Pour qui",
    "who.title": "Conçu pour les entreprises qui font bouger le Maroc.",
    "who.subtitle":
      "Chaque site est pensé pour votre activité — jamais un template générique.",
    "who.salons.t": "Salons & Spas",
    "who.salons.d":
      "Présentez vos services, vos tarifs et laissez vos clients réserver en quelques secondes.",
    "who.cafes.t": "Cafés",
    "who.cafes.d":
      "Un menu élégant, vos horaires et votre adresse — toujours à jour.",
    "who.rest.t": "Restaurants",
    "who.rest.d":
      "Menu, réservations, photos et avis réunis en un seul endroit.",
    "who.gyms.t": "Salles & Studios",
    "who.gyms.d": "Cours, coachs, plannings et infos d'abonnement.",
    "who.shops.t": "Commerces locaux",
    "who.shops.d": "Présentez vos produits et attirez plus de visiteurs en boutique.",
    "who.free.t": "Freelances",
    "who.free.d": "Un portfolio premium qui inspire confiance immédiatement.",

    "feat.eyebrow": "Ce qui est inclus",
    "feat.title": "Tout ce dont votre entreprise a besoin, rien de superflu.",
    "feat.subtitle":
      "Une présence en ligne complète et prête à grandir — pensée pour convertir vos visiteurs en clients.",
    "feat.design.t": "Design premium sur mesure",
    "feat.design.d":
      "Un univers unique aux couleurs et à l'atmosphère de votre marque — zéro template recyclé.",
    "feat.mobile.t": "Mobile d'abord, parfait sur desktop",
    "feat.mobile.d":
      "Impeccable sur tous les téléphones, tablettes et écrans utilisés par vos clients.",
    "feat.wa.t": "Intégration WhatsApp",
    "feat.wa.d":
      "En un clic, votre client est dans votre conversation — prêt à réserver ou acheter.",
    "feat.maps.t": "Google Maps intégré",
    "feat.maps.d":
      "Vos clients vous trouvent et obtiennent l'itinéraire sans quitter le site.",
    "feat.social.t": "Réseaux sociaux connectés",
    "feat.social.d":
      "Instagram, TikTok, Facebook — tous vos canaux, parfaitement intégrés.",
    "feat.seo.t": "Structure prête pour le SEO",
    "feat.seo.d":
      "Conçu pour que Google vous lise, vous classe et vous recommande localement.",
    "feat.speed.t": "Performance et rapidité",
    "feat.speed.d":
      "Optimisé pour la vitesse afin que les visiteurs restent et convertissent.",
    "feat.secure.t": "Sécurisé et fiable",
    "feat.secure.d":
      "Code propre, HTTPS par défaut, et zéro plugin douteux.",

    "ben.eyebrow": "Le résultat",
    "ben.title": "Pas qu'un site web. Un véritable outil de croissance.",
    "ben.gain.t": "Gagnez plus de clients",
    "ben.gain.d":
      "Transformez les recherches en ligne et les visites Instagram en vraies réservations.",
    "ben.pro.t": "Une image plus professionnelle",
    "ben.pro.d":
      "Un site premium inspire confiance instantanément — avant même le premier appel.",
    "ben.google.t": "Apparaissez sur Google",
    "ben.google.d":
      "Soyez l'entreprise qui ressort quand vos clients cherchent ce que vous proposez.",
    "ben.open.t": "Ouvert 24h/24, 7j/7",
    "ben.open.d":
      "Votre site vend, réserve et informe même quand vous êtes fermé.",
    "ben.local.t": "Visibilité locale renforcée",
    "ben.local.d":
      "Boostez votre présence sur Google Maps et les réseaux sociaux.",
    "ben.convert.t": "Plus de visiteurs convertis",
    "ben.convert.d":
      "Des appels à l'action clairs, une structure intelligente et des signaux de confiance.",

    "proc.eyebrow": "Comment ça marche",
    "proc.title": "Une consultation premium. Un processus simple.",
    "proc.subtitle":
      "Transparence totale. Vous êtes impliqué à chaque étape — votre business, vos décisions.",
    "proc.s1.t": "Discussion rapide",
    "proc.s1.d":
      "Écrivez-nous sur WhatsApp ou Instagram. On écoute votre activité, votre style et vos objectifs.",
    "proc.s2.t": "Design personnalisé",
    "proc.s2.d":
      "Couleurs, ambiance, branding, menu, services — chaque détail est adapté à vous.",
    "proc.s3.t": "Livraison rapide",
    "proc.s3.d":
      "Votre site est mis en ligne rapidement, prêt à attirer des clients dès le premier jour.",

    "why.eyebrow": "Pourquoi maintenant",
    "why.title": "Ne pas avoir de site coûte plus cher que d'en avoir un.",
    "why.subtitle":
      "Vos clients s'attendent à vous trouver en ligne. Sinon, ils choisissent celui qu'ils trouvent.",
    "why.p1":
      "Chaque jour sans site, vos clients choisissent vos concurrents.",
    "why.p2":
      "100% personnalisé — couleurs, ambiance, branding et contenu adaptés à votre activité.",
    "why.p3":
      "Un vrai gain de temps : on s'occupe de tout pendant que vous gérez votre business.",
    "why.p4":
      "Transparence totale — communication directe sur WhatsApp ou Instagram, sans intermédiaire.",
    "why.p5":
      "Livraison rapide, qualité premium et accompagnement si besoin.",

    "vis.eyebrow": "Visibilité",
    "vis.title": "Votre business — partout où il doit être.",
    "vis.maps.t": "Google Maps",
    "vis.maps.d":
      "Connecté à votre fiche d'entreprise pour que les locaux vous trouvent.",
    "vis.search.t": "Recherche Google",
    "vis.search.d":
      "Visible quand vos clients cherchent ce que vous proposez vraiment.",
    "vis.social.t": "Instagram & TikTok",
    "vis.social.d":
      "Un seul lien qui fait tout — réservations, menu, contact.",
    "vis.wa.t": "WhatsApp",
    "vis.wa.d": "Une conversation directe avec vos clients en un clic.",

    "test.eyebrow": "Confiance",
    "test.title": "Adoré par les commerçants locaux.",
    "test.q1":
      "Notre nouveau site nous a apporté des réservations dès la première semaine. Propre, rapide et exactement ce qu'on voulait.",
    "test.n1": "Yasmine — Propriétaire de salon, Casablanca",
    "test.q2":
      "Nos clients nous trouvent maintenant sur Google. Le bouton WhatsApp a tout changé.",
    "test.n2": "Karim — Gérant de café, Rabat",
    "test.q3":
      "Un rendu premium pour un prix que je n'imaginais pas. Vaut chaque dirham.",
    "test.n3": "Sara — Boutique, Marrakech",

    "price.badge": "Une offre simple",
    "price.title": "Pack site web complet",
    "price.subtitle":
      "Tout ce qui est listé ci-dessus — conçu, développé et livré. Sans coûts cachés, sans abonnement piège.",
    "price.once": "Paiement unique",
    "price.note":
      "L'une des offres de site web professionnel les plus abordables du marché — sans compromis sur la qualité premium.",
    "price.i1": "Site web professionnel complet",
    "price.i2": "Design premium sur mesure",
    "price.i3": "Optimisation mobile + desktop",
    "price.i4": "Structure prête pour le SEO",
    "price.i5": "Intégration WhatsApp",
    "price.i6": "Intégration Google Maps",
    "price.i7": "Liens réseaux sociaux",
    "price.i8": "Sections spécifiques (menu, services, réservation…)",
    "price.i9": "Performance et rapidité",
    "price.i10": "Livraison rapide",

    "final.title1": "Prêt à transformer vos visiteurs en",
    "final.title2": "vrais clients ?",
    "final.subtitle":
      "Parlez-nous de votre activité. On s'occupe du reste — rapidement, avec transparence et avec la qualité que votre marque mérite.",

    "foot.tag":
      "Des sites qui transforment les visiteurs en vrais clients. Fait au Maroc.",
    "foot.rights": "Tous droits réservés.",
    "foot.made": "Fait avec soin au Maroc",
  },

  ar: {
    "nav.services": "الخدمات",
    "nav.features": "المميزات",
    "nav.process": "طريقة العمل",
    "nav.pricing": "الأسعار",
    "cta.whatsapp": "واتساب",
    "cta.whatsappFull": "تواصل عبر واتساب",
    "cta.instagram": "تابعنا على إنستغرام",
    "cta.instagramShort": "إنستغرام",
    "cta.dmInstagram": "راسلنا على إنستغرام",
    "cta.orderWhatsapp": "اطلب عبر واتساب",
    "cta.startConv": "ابدأ المحادثة على واتساب",
    "cta.orDm": "أو راسلنا على إنستغرام",

    "hero.badge": "متاحون — نرد على واتساب خلال دقائق",
    "hero.title1": "مواقع تحوّل",
    "hero.title2": "زوّارك إلى",
    "hero.title3": "زبائن حقيقيين",
    "hero.subtitle":
      "مواقع ويب عصرية ومتميزة لصالونات التجميل والمقاهي والمطاعم وقاعات الرياضة والمحلات المحلية في المغرب. سريعة الإنجاز ومصممة لتحقيق المبيعات.",
    "hero.tag1": "تصميم مخصص بالكامل",
    "hero.tag2": "محسّن للهاتف والحاسوب",
    "hero.tag3": "تسليم سريع",

    "trust.label": "موثوق من طرف المحلات المحلية —",
    "trust.salons": "صالونات",
    "trust.cafes": "مقاهي",
    "trust.restaurants": "مطاعم",
    "trust.gyms": "قاعات رياضية",
    "trust.shops": "محلات",
    "trust.freelancers": "مستقلون",

    "who.eyebrow": "لمن هذا",
    "who.title": "مصمم للأنشطة التي تحرّك المغرب.",
    "who.subtitle":
      "كل موقع نبنيه يُفصّل حسب نشاطك — لا قوالب جاهزة.",
    "who.salons.t": "صالونات وسبا",
    "who.salons.d":
      "اعرض خدماتك وأسعارك، وامكن زبائنك من الحجز في ثوانٍ.",
    "who.cafes.t": "مقاهي",
    "who.cafes.d":
      "قائمة جميلة، ساعات العمل والموقع — محدّثة دائماً.",
    "who.rest.t": "مطاعم",
    "who.rest.d":
      "القائمة، الحجوزات، الصور والتقييمات في مكان واحد.",
    "who.gyms.t": "قاعات واستوديوهات",
    "who.gyms.d": "الحصص، المدربون، الجداول ومعلومات الاشتراك.",
    "who.shops.t": "محلات محلية",
    "who.shops.d":
      "اعرض منتجاتك واجذب المزيد من الزبائن إلى محلك.",
    "who.free.t": "مستقلون",
    "who.free.d": "موقع احترافي يبني الثقة من اللحظة الأولى.",

    "feat.eyebrow": "ما هو مشمول",
    "feat.title": "كل ما يحتاجه نشاطك، دون أي حشو.",
    "feat.subtitle":
      "حضور رقمي كامل وجاهز للنمو — مصمم ليحوّل الزائر إلى زبون.",
    "feat.design.t": "تصميم احترافي مخصص",
    "feat.design.d":
      "هوية فريدة تعكس ألوان وأجواء علامتك — بلا قوالب مكررة.",
    "feat.mobile.t": "مناسب للهاتف والحاسوب",
    "feat.mobile.d":
      "يظهر بشكل مثالي على كل الهواتف واللوحات والشاشات.",
    "feat.wa.t": "ربط مع واتساب",
    "feat.wa.d":
      "بنقرة واحدة يصل زبونك إلى محادثتك — جاهز للحجز أو الشراء.",
    "feat.maps.t": "خرائط Google مدمجة",
    "feat.maps.d":
      "يجدك زبائنك ويصلون إليك دون مغادرة الموقع.",
    "feat.social.t": "ربط بكل وسائل التواصل",
    "feat.social.d":
      "إنستغرام، تيك توك، فيسبوك — كل قنواتك مدمجة بأناقة.",
    "feat.seo.t": "بنية متوافقة مع SEO",
    "feat.seo.d":
      "مصمم ليقرأك Google ويرشحك محلياً.",
    "feat.speed.t": "سرعة تحميل عالية",
    "feat.speed.d":
      "محسّن للسرعة ليبقى الزائر ويتحول إلى زبون.",
    "feat.secure.t": "آمن وموثوق",
    "feat.secure.d":
      "كود نظيف، HTTPS افتراضياً، وبدون إضافات مشبوهة.",

    "ben.eyebrow": "النتيجة",
    "ben.title": "ليس مجرد موقع. بل أداة نمو حقيقية.",
    "ben.gain.t": "اربح المزيد من الزبائن",
    "ben.gain.d":
      "حوّل عمليات البحث وزيارات إنستغرام إلى حجوزات وزبائن فعليين.",
    "ben.pro.t": "صورة أكثر احترافية",
    "ben.pro.d":
      "موقع متميز يمنحك ثقة فورية — قبل حتى أن يتصل بك الزبون.",
    "ben.google.t": "ظهور على Google",
    "ben.google.d":
      "كن النشاط الذي يظهر عندما يبحث الناس عن خدماتك محلياً.",
    "ben.open.t": "مفتوح 24/7",
    "ben.open.d":
      "موقعك يبيع، يحجز ويعلم زبائنك حتى عند إغلاق المحل.",
    "ben.local.t": "زيادة الظهور المحلي",
    "ben.local.d":
      "حضور أقوى على خرائط Google ووسائل التواصل.",
    "ben.convert.t": "تحويل أكثر للزوار",
    "ben.convert.d":
      "أزرار واضحة وبنية ذكية وعناصر ثقة تحوّل النقرات إلى زبائن.",

    "proc.eyebrow": "كيف يعمل",
    "proc.title": "استشارة متميزة. عملية بسيطة.",
    "proc.subtitle":
      "شفافية تامة. أنت معنا في كل خطوة — نشاطك، قراراتك.",
    "proc.s1.t": "محادثة سريعة",
    "proc.s1.d":
      "راسلنا على واتساب أو إنستغرام. نستمع لنشاطك وذوقك وأهدافك.",
    "proc.s2.t": "تصميم مخصص لك",
    "proc.s2.d":
      "الألوان، الأجواء، الهوية، القائمة، الخدمات — كل تفصيل يُفصّل عليك.",
    "proc.s3.t": "تسليم سريع",
    "proc.s3.d":
      "موقعك ينطلق بسرعة، جاهز لاستقطاب الزبائن منذ اليوم الأول.",

    "why.eyebrow": "لماذا الآن",
    "why.title": "غياب الموقع يكلفك أكثر من امتلاكه.",
    "why.subtitle":
      "زبائنك ينتظرون إيجادك على الإنترنت. وإذا لم يجدوك، يختارون منافسك.",
    "why.p1":
      "كل يوم بدون موقع، زبائنك يختارون منافسيك.",
    "why.p2":
      "مخصص بالكامل — الألوان، الأجواء، الهوية والمحتوى وفق نشاطك.",
    "why.p3":
      "ربح حقيقي للوقت: نتكفل بكل شيء وأنت تركز على إدارة عملك.",
    "why.p4":
      "شفافية كاملة — تواصل مباشر عبر واتساب أو إنستغرام، بدون وسطاء.",
    "why.p5":
      "تسليم سريع، جودة عالية ودعم مستمر إن احتجت.",

    "vis.eyebrow": "الظهور",
    "vis.title": "نشاطك — في كل مكان يجب أن يكون فيه.",
    "vis.maps.t": "خرائط Google",
    "vis.maps.d":
      "مرتبط بملف نشاطك ليجدك السكان المحليون بسرعة.",
    "vis.search.t": "بحث Google",
    "vis.search.d":
      "تظهر عندما يبحث الزبائن عمّا تقدمه فعلاً.",
    "vis.social.t": "إنستغرام وتيك توك",
    "vis.social.d":
      "رابط واحد يفعل كل شيء — حجز، قائمة، تواصل.",
    "vis.wa.t": "واتساب",
    "vis.wa.d": "محادثات مباشرة مع زبائنك بنقرة واحدة.",

    "test.eyebrow": "ثقة",
    "test.title": "محبوب من طرف أصحاب الأنشطة المحلية.",
    "test.q1":
      "موقعنا الجديد جلب لنا حجوزات منذ الأسبوع الأول. أنيق وسريع وبالضبط ما أردناه.",
    "test.n1": "ياسمين — صاحبة صالون، الدار البيضاء",
    "test.q2":
      "أصبح زبائننا يجدوننا على Google. زر واتساب وحده غيّر كل شيء.",
    "test.n2": "كريم — مدير مقهى، الرباط",
    "test.q3":
      "جودة عالية بثمن لم أكن أتوقعه. يستحق كل درهم.",
    "test.n3": "سارة — محل، مراكش",

    "price.badge": "عرض واحد بسيط",
    "price.title": "باقة الموقع الكاملة",
    "price.subtitle":
      "كل ما ذُكر أعلاه — مصمم، مطوّر ومُسلَّم. بدون تكاليف خفية ولا اشتراكات.",
    "price.once": "دفعة واحدة فقط",
    "price.note":
      "من أفضل عروض المواقع الاحترافية سعراً في السوق — دون أي تنازل عن الجودة.",
    "price.i1": "موقع احترافي كامل",
    "price.i2": "تصميم متميز ومخصص",
    "price.i3": "تحسين للهاتف والحاسوب",
    "price.i4": "بنية جاهزة للسيو",
    "price.i5": "ربط مع واتساب",
    "price.i6": "ربط مع خرائط Google",
    "price.i7": "روابط وسائل التواصل",
    "price.i8": "أقسام خاصة بنشاطك (قائمة، خدمات، حجز…)",
    "price.i9": "أداء سريع",
    "price.i10": "تسليم سريع",

    "final.title1": "جاهز لتحويل زوّارك إلى",
    "final.title2": "زبائن حقيقيين؟",
    "final.subtitle":
      "حدّثنا عن نشاطك ونتكفل بالباقي — بسرعة، شفافية، والجودة التي تستحقها علامتك.",

    "foot.tag": "مواقع تحوّل الزوار إلى زبائن حقيقيين. صُنع في المغرب.",
    "foot.rights": "جميع الحقوق محفوظة.",
    "foot.made": "صُنع بعناية في المغرب",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined"
      ? (localStorage.getItem("lang") as Lang | null)
      : null);
    if (saved && ["en", "fr", "ar"].includes(saved)) {
      setLangState(saved);
    } else if (typeof navigator !== "undefined") {
      const nav = navigator.language.slice(0, 2).toLowerCase();
      if (nav === "fr" || nav === "ar") setLangState(nav as Lang);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: string) =>
    translations[lang][key] ?? translations.en[key] ?? key;

  return (
    <I18nContext.Provider
      value={{ lang, setLang, t, dir: lang === "ar" ? "rtl" : "ltr" }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
