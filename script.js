/* ═══════════════════════════════════════════════════════════════
   MESRETA INVITATION — script.js
   Ethiopian Orthodox Tewahedo Church (EOTC)
   Zikr feast for Saint Michael the Archangel
   ─────────────────────────────────────────────────────────────
   HOW TO EDIT: only change values inside the `content` object.
   Every word on the page comes from here. Do NOT touch the
   functions below the content object unless you know JS.
   ═══════════════════════════════════════════════════════════════ */

"use strict";

/* ─────────────────────────────────────────────────────────────────
   CONTENT MODEL  — edit anything here to update the page
   ───────────────────────────────────────────────────────────────── */
const content = {

  /* Page meta */
  meta: {
    title: "የዩኒቲ ግቢ ጉባዔ  ፳፯(27)ኛ ዓመት የምሥረታ በዓል",
    description: "እንኳን ለግቢ ጉባዔያችን 27ኛ ዓመት የልደት በዓል በሰላም አደረሳችሁ!",
  },

  /* Navigation */
  nav: {
    // logo: "☩ ",
    about: "ስለ ጉባዔው",
    speakers: "ክቡራን እንግዶች",
    details: "ዝርዝር",
    rsvp: "መርኃግብሩን ለማገዝ",
  },

  /* Hero */
  hero: {
    eyebrow: "   ዩኒቲ ግቢ ጉባዔ",
    title: "የዩኒቲ ግቢ ጉባዔ  ፳፯(27ኛ) ዓመት የምሥረታ በዓል",
    titleAccentWord: "ቅዱስ",
    subtitle: "እንኳን ለግቢ ጉባዔያችን 27ኛ ዓመት የልደት በዓል በሰላም አደረሳችሁ!",
    metaItems: [
      { icon: "📅", text: "ሚያዝያ 27 ቀን 2018 ዓ.ም" },
      { icon: "🕯️", text: "ከረፋዱ 4:30 ሰዓት ጀምሮ" },
      { icon: "📍", text: "ገርጂ ኆኅተ ብርሃን ቅድስት ማርያም ካቴድራል አዳራሽ", href: "https://www.google.com/maps/search/Gerji+Hohte+Berhan+Kidist+Mariam+Cathedral+Addis+Ababa" },
    ],
    ctaLabel: "መርኃግብሩን ለማገዝ",
    ctaHref: "tel:+251972237318",
    secondaryLabel: "Add to Google Calendar",
    secondaryHref: "https://www.google.com/calendar/render?action=TEMPLATE&text=%E1%8B%A8%E1%8B%AD%E1%8B%B2%E1%8B%B2%20%E1%8A%95%E1%8A%A2%20%E1%8A%92%E1%8A%A3%E1%8B%94%20%E1%8D%92%E1%8D%A7(27)%E1%8A%9B%20%E1%8B%93%E1%8B%98%E1%89%B5%20%E1%8B%A8%E1%88%9D%E1%8A%A5%E1%88%A8%E1%89%B3%20%E1%89%A0%E1%8B%93%E1%88%8D&dates=20260505T073000Z/20260505T130000Z&details=%E1%8A%A5%E1%8A%95%E1%8A%B3%E1%8A%95%20%E1%88%88%E1%8A%95%E1%8A%A2%20%E1%8A%92%E1%8A%A3%E1%8B%94%E1%8B%AB%E1%8A%BD%E1%8A%95%2027%E1%8A%9B%20%E1%8B%93%E1%8B%98%E1%89%B5%20%E1%8B%A8%E1%88%8D%E1%8B%B0%E1%89%B5%20%E1%89%A0%E1%8B%93%E1%88%8D%20%E1%89%A0%E1%88%B0%E1%88%8B%E1%88%9D%20%E1%8A%A0%E1%8B%B0%E1%88%A8%E1%88%B3%E1%89%BD%E1%88%81!&location=Gerji%20Maryam%20Cathedral,%20Addis%20Ababa",
    bgImage: "./assets/images/hero.jpg",
  },

  /* Countdown */
  countdown: {
    label: "መርኃግብሩ ሊደርስ",
    targetDate: "2026-05-05T10:30:00+03:00",   // ← change this to your event date/time
    labels: {
      days: "ቀናት",
      hours: "ሰዓታት",
      minutes: "ደቂቃዎች",
      seconds: "ሰከንዶች",
    },
    expiredMessage: "☩ መርኃግብሩ ተጀምሯል — እንኳን ደህና መጡ! ስብሐት ለእግዚአብሔር።",
  },

  /* About */
  about: {
    eyebrow: "ስለ ጉባዔው",
    title: "ዩኒቲ ግቢ ጉባዔ — 27ኛ ዓመት የልደት በዓል",
    body: "እንኳን አደረሳችሁ",
    body2: "ግቢ ጉባዔያችን የልደት ቀኗን ልታከብር እነሆ ጥቂት ቀናት ብቻ ቀርተውታል",
    body3: "በዕለቱም ጸሎተ ወንጌል ፣ቃለ እግዚአብሔር ፣ ኪነ ጥበባዊ ዝግጅቶች ፣ የኅብረት ዝማሬ፣ አጋፔ (የፍቅር ማዕድ) አንዲሁም ሌሎች አስተማሪና አዝናኝ መርኃግብራት ይኖራሉ። ከዚህ በፊት በግቢ ጉባዔያችን ያለፋችሁ ፣ አሁንም ያላችሁ፣ ሁላችሁም ከወዳጅ ከዘመዳቹ ጋር ትመጡ ዘንድ በፍቅር ጠርተናችኋል።",
    badge: "☩\n፳፯(27)ኛ ዓመት የምሥረታ በዓል\n2018 ዓ.ም",
    image: {
      src: "./assets/images/27th_mesreta_logo.jpg",
      alt: "ዝክር — ቤተ ክርስቲያን ምዕመናን",
    },
  },

  /* Speakers / Guests of Honour */
  speakers: {
    eyebrow: "ክቡራን እንግዶች",
    title: "የመርኃግብሩ ተጋባዦች",
    list: [
      {
        name: "ብፁዕ አቡነ እንጦንስ",
        role: "ሊቀ ጳጳስ",
        bio: "የምዕራብ ሐረርጌ ሀገረ ስብከት ሊቀ ጳጳስና የቅዱስ ሲኖዶስ አባል።",
        image: "./assets/images/speakers/abune entons.PNG",
      },
      {
        name: "መልአከ ብርሃን ቀሲስ ሰሎሞን በቀለ",
        role: "ካህን",
        bio: "የገርጂ ኆኅተ ብርሃን ቅድስት ማርያም ካቴድራል አስተዳዳሪ።",
        image: "./assets/images/speakers/kesis solomon.jpg",
      },
      {
        name: "መጋቤ ሃይማኖት ኢዮብ ይመኑ",
        role: "መምህር",
        bio: "የዕለቱ ቃለ እግዚአብሔር መምህር።",
        image: "./assets/images/speakers/eyob yimenu.jpg",
      },
      // {
      //   name: "ዘማሪ ቀዳሜጽጋ ዮሐንስ",
      //   role: "ዘማሪ",
      //   bio: "የዕለቱ ዘማሬ አቅራቢ።",
      //   image: "./assets/images/speakers/speaker4.jpg",
      // },
    ],
  },

  /* Event Details */
  event: {
    eyebrow: "ዝርዝር",
    title: "የመርኃግብሩ ማዕቀፍ",
    details: [
      { icon: "📅", label: "ቀን", value: "ማግሰኞ ሚያዝያ 27 ቀን 2018 ዓ.ም", sub: "Tuesday, May 05, 2026 G.C" },
      { icon: "🕯️", label: "ሰዓት", value: "ከረፋዱ 4:30 — 10:00", sub: "10:30 AM onwards (EAT)" },
      { icon: "📍", label: "ቦታ", value: "ገርጂ ኆኅተ ብርሃን ቅድስት ማርያም ካቴድራል ሰ/ት/ቤት አዳራሽ", sub: "Gerji Maryam" },
      { icon: "🤍", label: "ልብስ", value: "ነጠላ ወይም የሐበሻ ልብስ", sub: "ነጭ ሐበሻ ቀሚስ / ነጠላ ይልበሱ" },
      { icon: "🙏", label: "ተሳትፎ", value: "የግቢ ጉባዔው አባላት በሙሉ", sub: "በፍቅር ተጠርተዋል" },
      { icon: "📞", label: "ለበለጠ መረጃ", value: "+251 972 237 318", sub: "ለማንኛውም ጥያቄ ይደውሉ" },
    ],
  },

  /* Ticket */
  ticket: {
    eyebrow: "የምሥረታ ዕጣ",
    title: "የዕጣ ትኬት",
    body: "የ27ኛ ዓመት የምሥረታ በዓላችንን ምክንያት በማድረግ የተዘጋጀ ልዩ የዕጣ መርኃግብር። ትኬቱን በመቁረጥ የበዓሉ ተሳታፊ እንዲሆኑና የበረከቱ ተካፋይ እንዲሆኑ በአክብሮት እንጋብዛለን።",
    image: "./assets/images/anniversary-ticket.jpg",
  },

  /* Spiritual Feature — Psalm 150 in Ge'ez */
  spiritual: {
    eyebrow: "የመጽሐፍ ቅዱስ ቃል",
    title: "መዝሙረ ዳዊት 73፥2-4",
    quote: "ተዘከር ማኅበረከ ዘአቅድምከ ፈጢረ ፤ ወአድኀንከ በትረ ርስትከ ፤ ደብረ ጽዮን ዘኀደርከ ውስቴታ",
    body: "አስቀድመህ የፈጠርካትን ማኅበርህን ፤ የተቤዤሃትንም የርስትህን በትር ፤ በርስዋ ያደርህባትን የጽዮንን ተኣኣ አስብ፡፡",
    cite: "ትርጉም",
  },

  /* Gallery */
  gallery: {
    eyebrow: "ትዝታዎቻቸን",
    title: "ካለፉ በዓሎቻችን",
    images: [
      { src: "./assets/images/gallery/memory 1.jpg", alt: "" },
      { src: "./assets/images/gallery/memory 2.jpg", alt: "" },
      { src: "./assets/images/gallery/memory 3.JPG", alt: "" },
      { src: "./assets/images/gallery/memory 4.jpg", alt: "" },
      { src: "./assets/images/gallery/memory 5.JPG", alt: "" },
      { src: "./assets/images/gallery/memory 6.JPG", alt: "" },
    ],
  },

  /* RSVP */
  rsvp: {
    eyebrow: "መርኃግብሩን ይደግፉ",
    title: "መርኃግብሩን ለማገዝ",
    body: "መርኃግብሩን በገንዘብ፣ በሃሳብ፣ በጉልበት፣ ... ለማገዝ ከፈለጉ በመደወልም ሆነ በTelegram ማግኘት ይችላሉ።",
    actions: [
      { label: "Telegram ላይ ያግኙን", href: "https://t.me/+251972237318", type: "tg" },
      { label: "+251 972 237 318 ይደውሉ", href: "tel:+251972237318", type: "tel" },
    ],
    share: [
      { label: "Telegram", type: "tg" },
      { label: "Instagram", type: "ig" },
      { label: "WhatsApp", type: "wa" },
      { label: "Facebook", type: "fb" },
      { label: "Copy Link", type: "copy" },
    ]
  },

  /* Contact */
  contact: {
    phone: "+251972237318",
    telegram: "https://t.me/+251972237318",
  },

  /* Footer */
  footer: {
    logo: "☩ ወስብሐት ለእግዚአብሔር",
    tagline: "የዩኒቲ ግቢ ጉባዔ ፳፯(27)ኛ ዓመት የምሥረታ በዓል",
    links: [
      { label: "ነባር ገጽ", href: "#hero" },
      { label: "ስለ መርኃግብሩ", href: "#about" },
      { label: "ዝርዝር", href: "#event-details" },
      { label: "መርኃግብሩን ለማገዝ", href: "#rsvp" },
    ],
    copy: "© 2018 ዓ.ም — ዩኒቲ ግቢ ጉባዔ — የፍቅር ማኅደራችን!",
    branding: `Powered by <a href="https://melhektechnologies.netlify.app/" target="_blank" rel="noopener" style="color: var(--accent-gold); text-decoration: none; font-weight: bold;">Melhek Technologies</a>`,
  },

};

/* ════════════════════════════════════════════════════════════════
   ⚠️  DO NOT EDIT BELOW THIS LINE unless you are familiar with JS
   ════════════════════════════════════════════════════════════════ */

/* Helpers */
function setText(id, val) { const e = document.getElementById(id); if (e && val !== undefined) e.textContent = val; }
function setHTML(id, html) { const e = document.getElementById(id); if (e && html !== undefined) e.innerHTML = html; }
function setAttr(id, attr, val) { const e = document.getElementById(id); if (e && val !== undefined) e.setAttribute(attr, val); }
function pad(n) { return String(n).padStart(2, "0"); }

/* ── Hydrate page ─────────────────────────────────────────────── */
function hydratePage() {
  document.title = content.meta.title;
  setAttr("page-description", "content", content.meta.description);

  /* Nav */
  setText("nav-logo-link", content.nav.logo);
  setText("nav-about", content.nav.about);
  setText("nav-speakers", content.nav.speakers);
  setText("nav-details", content.nav.details);
  setText("nav-rsvp", content.nav.rsvp);

  /* Hero */
  setText("hero-eyebrow", content.hero.eyebrow);
  const raw = content.hero.title;
  const aw = content.hero.titleAccentWord;
  setHTML("hero-title", (aw ? raw.replace(aw, `<span>${aw}</span>`) : raw).replace(/\n/g, "<br>"));
  setText("hero-subtitle", content.hero.subtitle);

  const metaEl = document.getElementById("hero-meta");
  if (metaEl) {
    metaEl.innerHTML = content.hero.metaItems.map(it =>
      it.href
        ? `<a href="${it.href}" target="_blank" rel="noopener" class="hero-meta-item linkable">
          <span class="hero-meta-icon" aria-hidden="true">${it.icon}</span>
          <span>${it.text}</span>
          <span class="link-hint">↗</span>
         </a>`
        : `<span class="hero-meta-item">
          <span class="hero-meta-icon" aria-hidden="true">${it.icon}</span>
          <span>${it.text}</span>
         </span>`
    ).join("");
  }
  const cta = document.getElementById("hero-cta");
  if (cta) { cta.textContent = content.hero.ctaLabel; cta.href = content.hero.ctaHref; }
  const sec = document.getElementById("hero-secondary");
  if (sec) { sec.textContent = content.hero.secondaryLabel; sec.href = content.hero.secondaryHref; }

  /* Countdown */
  setText("countdown-label", content.countdown.label);
  setText("cd-days-label", content.countdown.labels.days);
  setText("cd-hours-label", content.countdown.labels.hours);
  setText("cd-minutes-label", content.countdown.labels.minutes);
  setText("cd-seconds-label", content.countdown.labels.seconds);
  setText("countdown-expired", content.countdown.expiredMessage);

  /* About */
  setText("about-eyebrow", content.about.eyebrow);
  setText("about-title", content.about.title);
  setText("about-body", content.about.body);
  setText("about-body2", content.about.body2);
  setText("about-body3", content.about.body3);
  const badge = document.getElementById("about-badge");
  if (badge) badge.innerHTML = content.about.badge.replace(/\n/g, "<br>");
  const aImg = document.getElementById("about-img");
  if (aImg) {
    aImg.src = content.about.image.src;
    aImg.alt = content.about.image.alt;
    aImg.onerror = () => { aImg.style.display = "none"; aImg.parentElement && aImg.parentElement.classList.add("img-placeholder"); };
  }

  /* Speakers */
  setText("speakers-eyebrow", content.speakers.eyebrow);
  setText("speakers-title", content.speakers.title);
  const sg = document.getElementById("speakers-grid");
  if (sg) {
    sg.innerHTML = content.speakers.list.map((s, i) => `
      <li class="speaker-card reveal" style="transition-delay:${i * 0.1}s">
        <div class="speaker-img-wrap">
          <img class="speaker-img" src="${s.image}" alt="${s.name}" loading="lazy"
               onerror="this.style.display='none';this.parentElement.classList.add('img-placeholder')" />
        </div>
        <div class="speaker-info">
          <span class="speaker-name">${s.name}</span>
          <span class="speaker-role">${s.role}</span>
          <p class="speaker-bio">${s.bio}</p>
        </div>
      </li>`).join("");
  }

  /* Event Details */
  setText("details-eyebrow", content.event.eyebrow);
  setText("details-title", content.event.title);
  const dg = document.getElementById("details-grid");
  if (dg) {
    dg.innerHTML = content.event.details.map((d, i) => `
      <li class="detail-card reveal" style="transition-delay:${i * 0.08}s">
        <span class="detail-icon" aria-hidden="true">${d.icon}</span>
        <div class="detail-body">
          <span class="detail-label">${d.label}</span>
          ${d.label === "ቦታ"
        ? `<a href="https://www.google.com/maps/search/Gerji+Hohte+Berhan+Kidist+Mariam+Cathedral+Addis+Ababa" target="_blank" rel="noopener" class="detail-value linkable">${d.value} <small>↗</small></a>`
        : `<span class="detail-value">${d.value}</span>`
      }
          ${d.sub ? `<span class="detail-sub">${d.sub}</span>` : ""}
        </div>
      </li>`).join("");
  }

  /* Ticket */
  setText("ticket-eyebrow", content.ticket.eyebrow);
  setText("ticket-title", content.ticket.title);
  setText("ticket-body", content.ticket.body);
  const tImg = document.getElementById("ticket-img");
  if (tImg) {
    tImg.src = content.ticket.image;
    tImg.onerror = () => { tImg.style.display = "none"; tImg.parentElement && tImg.parentElement.classList.add("img-placeholder"); };
  }

  /* Spiritual */
  setText("spiritual-eyebrow", content.spiritual.eyebrow);
  setText("spiritual-title", content.spiritual.title);
  setText("spiritual-quote", content.spiritual.quote);
  setText("spiritual-cite", content.spiritual.cite);
  setText("spiritual-body", content.spiritual.body);

  /* Gallery */
  setText("gallery-eyebrow", content.gallery.eyebrow);
  setText("gallery-title", content.gallery.title);
  const gg = document.getElementById("gallery-grid");
  if (gg) {
    gg.innerHTML = content.gallery.images.map((img, i) => `
      <li class="gallery-item reveal"
          style="transition-delay:${i * 0.07}s"
          data-src="${img.src}" data-alt="${img.alt}"
          tabindex="0" role="button"
          aria-label="${img.alt} — ምስሉን ለማስፋት ጠቅ ያድርጉ">
        <img class="gallery-img" src="${img.src}" alt="${img.alt}" loading="lazy"
             onerror="this.style.display='none';this.parentElement.classList.add('img-placeholder')" />
        <div class="gallery-overlay" aria-hidden="true">
          <span class="gallery-zoom-icon">&#8853;</span>
        </div>
      </li>`).join("");
  }

  /* RSVP */
  setText("rsvp-eyebrow", content.rsvp.eyebrow);
  setText("rsvp-title", content.rsvp.title);
  setText("rsvp-body", content.rsvp.body);
  const ra = document.getElementById("rsvp-actions");
  if (ra) {
    ra.innerHTML = content.rsvp.actions.map(a => `
      <a class="btn btn-${a.type}" href="${a.href}"
         ${a.type === "tg" ? 'target="_blank" rel="noopener noreferrer"' : ""}>
        ${a.type === "tg"
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91A16 16 0 0013.91 15l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>`}
        ${a.label}
      </a>`).join("");
  }

  const sa = document.getElementById("share-actions");
  if (sa && content.rsvp.share) {
    sa.innerHTML = content.rsvp.share.map(s => {
      let icon = "";
      if (s.type === "tg") icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/></svg>`;
      if (s.type === "ig") icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`;
      if (s.type === "wa") icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.97 0C5.36 0 0 5.36 0 11.97c0 2.11.55 4.16 1.59 5.96L.18 24l6.23-1.63c1.76.95 3.75 1.45 5.56 1.45 6.61 0 11.97-5.36 11.97-11.97S18.58 0 11.97 0zm6.81 17.22c-.28.79-1.62 1.54-2.23 1.63-.61.09-1.39.23-3.92-.81-3.04-1.25-5-4.42-5.15-4.63-.15-.2-1.23-1.64-1.23-3.13 0-1.49.77-2.23 1.04-2.52.28-.29.61-.36.81-.36.2 0 .4 0 .57.01.19.01.44-.07.67.5.24.58.81 1.99.88 2.13.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.32.37-.45.5-.15.15-.31.32-.13.62.17.3 1.13 1.86 2.54 3.12 1.82 1.63 3.36 2.13 3.66 2.27.3.15.48.12.66-.08.18-.21.78-.91.99-1.22.2-.31.41-.26.69-.15.28.1 1.8.85 2.11 1.01.3.15.5.23.57.36.07.13.07.76-.21 1.55z"/></svg>`;
      if (s.type === "fb") icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z"/></svg>`;
      if (s.type === "copy") icon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`;
      return `<button class="btn-share btn-share-${s.type}" aria-label="${s.label}" data-type="${s.type}">${icon}</button>`;
    }).join("");

    document.querySelectorAll(".btn-share").forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-type");
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(content.meta.title + " - " + content.meta.description);

        if (type === "tg") window.open(`https://t.me/share/url?url=${url}&text=${text}`, "_blank");
        if (type === "ig") {
          navigator.clipboard.writeText(window.location.href).then(() => {
            alert("Link copied! Open Instagram to share.");
            window.open(`https://www.instagram.com/`, "_blank");
          });
        }
        if (type === "wa") window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, "_blank");
        if (type === "fb") window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
        if (type === "copy") navigator.clipboard.writeText(window.location.href).then(() => alert("Link copied to clipboard!"));
      });
    });
  }

  /* Footer */
  setText("footer-logo", content.footer.logo);
  setText("footer-tagline", content.footer.tagline);
  setText("footer-copy", content.footer.copy);
  setHTML("footer-branding", content.footer.branding);
  const fn = document.getElementById("footer-nav-list");
  if (fn) fn.innerHTML = content.footer.links.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("");
}

/* ── Countdown ────────────────────────────────────────────────── */
function initCountdown() {
  const target = new Date(content.countdown.targetDate).getTime();
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-minutes");
  const secsEl = document.getElementById("cd-seconds");
  const gridEl = document.getElementById("countdown-grid");
  const expiredEl = document.getElementById("countdown-expired");

  function tick(el) {
    el.classList.remove("tick");
    void el.offsetWidth;
    el.classList.add("tick");
    el.addEventListener("transitionend", () => el.classList.remove("tick"), { once: true });
  }

  function update() {
    const diff = target - Date.now();
    if (diff <= 0) {
      if (gridEl) gridEl.classList.add("hidden");
      if (expiredEl) expiredEl.classList.remove("hidden");
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    if (daysEl && daysEl.textContent !== pad(d)) { daysEl.textContent = pad(d); tick(daysEl); }
    if (hoursEl && hoursEl.textContent !== pad(h)) { hoursEl.textContent = pad(h); tick(hoursEl); }
    if (minsEl && minsEl.textContent !== pad(m)) { minsEl.textContent = pad(m); tick(minsEl); }
    if (secsEl) { secsEl.textContent = pad(s); tick(secsEl); }
  }

  update();
  setInterval(update, 1000);
}

/* ── Scroll / Reveal ──────────────────────────────────────────── */
function initScroll() {
  const navbar = document.getElementById("navbar");
  const onScroll = () => { if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 60); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); obs.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}

/* ── Mobile Nav ───────────────────────────────────────────────── */
function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const navList = document.getElementById("nav-links");
  if (!toggle || !navList) return;

  const close = () => { toggle.setAttribute("aria-expanded", "false"); navList.classList.remove("open"); document.body.style.overflow = ""; };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    navList.classList.toggle("open", !open);
    document.body.style.overflow = !open ? "hidden" : "";
  });

  navList.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("click", e => { if (!toggle.contains(e.target) && !navList.contains(e.target)) close(); });
}

/* ── Gallery Lightbox ─────────────────────────────────────────── */
function initLightbox() {
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  const lbX = document.getElementById("lightbox-close");
  const gg = document.getElementById("gallery-grid");
  if (!lb || !lbImg || !gg) return;

  const open = (src, alt) => { lbImg.src = src; lbImg.alt = alt || ""; lb.classList.remove("hidden"); document.body.style.overflow = "hidden"; lbX && lbX.focus(); };
  const close = () => { lb.classList.add("hidden"); lbImg.src = ""; document.body.style.overflow = ""; };

  gg.addEventListener("click", e => { const i = e.target.closest(".gallery-item"); if (i) open(i.dataset.src, i.dataset.alt); });
  gg.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { const i = e.target.closest(".gallery-item"); if (i) { e.preventDefault(); open(i.dataset.src, i.dataset.alt); } } });
  if (lbX) lbX.addEventListener("click", close);
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

/* ── Placeholder & Tick Styles ────────────────────────────────── */
function injectStyles() {
  const s = document.createElement("style");
  s.textContent = `
    .img-placeholder { background: linear-gradient(135deg,#0a255a 0%,#0d2d6b 60%,#01183f 100%); position:relative; }
    .img-placeholder::after { content:"☩"; position:absolute; inset:0; display:grid; place-items:center; font-size:2.5rem; color:rgba(255,198,0,.25); }
    .cd-num.tick { transform:scale(1.12); transition:transform .15s cubic-bezier(.34,1.56,.64,1); }
  `;
  document.head.appendChild(s);
}

/* ── Particles Effect ───────────────────────────────────────── */
function initParticles() {
  const hero = document.getElementById("hero");
  if (!hero) return;
  const canvas = document.createElement("canvas");
  canvas.className = "hero-particles";
  hero.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let pts = [];
  const resize = () => { canvas.width = hero.offsetWidth; canvas.height = hero.offsetHeight; };
  window.addEventListener("resize", resize); resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.s = Math.random() * 2 + 0.5;
      this.o = Math.random() * 0.5 + 0.1;
      this.v = Math.random() * 0.5 + 0.2;
    }
    draw() {
      this.y -= this.v;
      if (this.y < -10) this.reset();
      ctx.fillStyle = `rgba(255, 198, 0, ${this.o})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < 60; i++) pts.push(new Particle());
  const anim = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pts.forEach(p => p.draw());
    requestAnimationFrame(anim);
  };
  anim();
}

/* ── Audio Player ─────────────────────────────────────────────── */
function initAudio() {
  const audio = document.getElementById("bg-audio");
  const toggleBtn = document.getElementById("global-audio-toggle");
  if (!audio) return;

  const updateBtnState = () => {
    if (!toggleBtn) return;
    if (audio.paused) {
      toggleBtn.classList.remove("playing");
    } else {
      toggleBtn.classList.add("playing");
    }
  };

  // Try to play on first interaction (global auto-play)
  const playOnInteract = () => {
    if (!audio.paused) return; // already playing
    
    audio.play().then(() => {
      // Success! The browser allowed audio to play.
      updateBtnState();
      // Only remove the event listeners if play was successful.
      document.removeEventListener("click", playOnInteract);
      document.removeEventListener("touchstart", playOnInteract);
      document.removeEventListener("scroll", playOnInteract);
    }).catch((err) => {
      // Failed (e.g., scroll is not a strong enough user gesture).
      // Do nothing and wait for a stronger interaction (like a click).
    });
  };

  // Do not use { once: true }, because if it fails on 'scroll', we still need it to trigger on 'click'
  document.addEventListener("click", playOnInteract);
  document.addEventListener("touchstart", playOnInteract, { passive: true });
  document.addEventListener("scroll", playOnInteract, { passive: true });

  if (toggleBtn) {
    toggleBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent global interaction overlap
      if (audio.paused) {
        audio.play().then(updateBtnState).catch(err => console.error("Audio play failed:", err));
      } else {
        audio.pause();
        updateBtnState();
      }
    });
  }
}

/* ── Guestbook ────────────────────────────────────────────────── */
function initGuestbook() {
  const form = document.getElementById("guestbook-form");
  const entriesEl = document.getElementById("guestbook-entries");
  if (!form || !entriesEl) return;

  // Load existing entries (demo local storage)
  let entries = JSON.parse(localStorage.getItem("mesreta_guestbook") || "[]");

  // Add some dummy entries if empty for display purposes
  if (entries.length === 0) {
    entries = [
      { name: "ዲያቆን አቤል", message: "እንኳን ለግቢ ጉባዔያችን 27ኛ ዓመት በሰላም አደረሳችሁ። እግዚአብሔር አገልግሎቱን ይባርክ።", date: new Date().toISOString() }
    ];
  }

  const renderEntries = () => {
    entriesEl.innerHTML = entries.map(e => `
      <div class="gb-card">
        <div class="gb-card-header">
          <span class="gb-avatar">${e.name.charAt(0)}</span>
          <span class="gb-name">${e.name}</span>
          <span class="gb-date">${new Date(e.date).toLocaleDateString("am-ET")}</span>
        </div>
        <p class="gb-message">${e.message}</p>
      </div>
    `).join("");
  };

  renderEntries();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("gb-name").value;
    const message = document.getElementById("gb-message").value;

    if (name && message) {
      entries.unshift({ name, message, date: new Date().toISOString() });
      localStorage.setItem("mesreta_guestbook", JSON.stringify(entries));
      renderEntries();
      form.reset();

      // Feedback
      const btn = form.querySelector(".btn-submit");
      const origText = btn.textContent;
      btn.textContent = "ተልኳል (Sent) ✓";
      btn.style.background = "#4CAF50";
      setTimeout(() => {
        btn.textContent = origText;
        btn.style.background = "";
      }, 3000);
    }
  });
}

/* ── Post Envelope Animation ──────────────────────────────────── */
function initPostEnvelope() {
  const btn = document.getElementById("btn-open-post");
  const wrapper = document.getElementById("post-wrapper");
  if (!btn || !wrapper) return;

  btn.addEventListener("click", () => {
    wrapper.classList.add("is-open");
    // Optionally trigger a slight scroll down so the full image is in view
    setTimeout(() => {
      const rect = wrapper.getBoundingClientRect();
      const offset = rect.top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }, 600); // after flip animation
  });
}

/* ── Hero Scroll Effects (Parallax) ─────────────────────────── */
function initHeroScrollEffects() {
  const heroBg = document.getElementById("hero-bg");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    // Parallax zoom for background
    if (heroBg) {
      const scale = 1 + (scrolled * 0.00015);
      const yPos = scrolled * 0.3;
      heroBg.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scale})`;
    }
  }, { passive: true });
}

/* ── Entry Point ──────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  injectStyles();
  hydratePage();
  initCountdown();
  initScroll();
  initNav();
  initLightbox();
  initParticles();
  initHeroScrollEffects();
  initAudio();
  initGuestbook();
  initPostEnvelope();

  /* observe any .reveal cards injected by hydratePage */
  const late = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); late.unobserve(e.target); } }),
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
  );
  document.querySelectorAll(".reveal:not(.in-view)").forEach(el => late.observe(el));
});
