// Articles by Şevval Çayır on vforhuman.org (newest first).
// To add one: copy an entry, update fields. `date` is YYYY-MM-DD.
const ARTICLES = [
  {
    title: "The Role of Societal Legitimacy in Policy-Making Processes: A Discussion About Affective Politics",
    url: "https://www.vforhuman.org/articles/societal-legitimacy-7lawf",
    cover: "https://images.squarespace-cdn.com/content/v1/696107467d4f4846a3d582e4/1767966577478-LYVYUHE8HZ7HSJUTQ0A3/Empty+Seats+Posters+%2821%29.png",
    date: "2025-07-22",
    excerpt: "The feeling of safety is much more complex and bigger than laws can solely establish."
  },
  {
    title: "To Break the Vicious Cycle: Doing Sociology",
    url: "https://www.vforhuman.org/articles/to-break-the-vicious-cycle",
    cover: "https://images.squarespace-cdn.com/content/v1/696107467d4f4846a3d582e4/1767966577681-F4WE5J9J2CKJ6V6HBQF4/viciouscycle.png",
    date: "2025-06-24",
    excerpt: "What if the violence shaping our lives is so invisible that we participate in it without knowing? On Bourdieu's “symbolic violence” and Nixon's “slow violence”."
  },
  {
    title: "Survival Mode",
    url: "https://www.vforhuman.org/articles/survival-mode",
    cover: "https://images.squarespace-cdn.com/content/v1/696107467d4f4846a3d582e4/1767966577496-0HAQCYZW26UEO8567W6K/Untitled+design+%2818%29.png",
    date: "2024-07-23",
    excerpt: "There are two types of people: those who have learned to live and those who only know how to survive."
  },
  {
    title: "For the Honor of Pride Month",
    url: "https://www.vforhuman.org/articles/for-the-honor-of-pride-month-5mde7",
    cover: "https://images.squarespace-cdn.com/content/v1/696107467d4f4846a3d582e4/1767966577399-T0C0QXDBIVE6SLK0D3U3/Pride+Month+Celeb+Post+%28Presentation%29.png",
    date: "2024-07-05",
    excerpt: "A celebration of the LGBTQ+ community, honoring the progress made in the fight for equality and recognizing its strength and resilience."
  },
  {
    title: "Home",
    url: "https://www.vforhuman.org/articles/home-ze2dy",
    cover: "https://images.squarespace-cdn.com/content/v1/696107467d4f4846a3d582e4/1767966577412-D3I4OEDJQ4TM4NRZV2A8/WhatsApp%2BImage%2B2024-03-30%2Bat%2B1.57.54%2BAM.jpg",
    date: "2024-03-30",
    excerpt: "When you are at home, you feel safe, I hope. “Feeling like home” refers to being surrounded by an intimate and known atmosphere."
  }
];

const I18N = {
  en: {
    "nav.about": "About",
    "nav.writing": "Writing",
    "nav.contact": "Contact",
    "hero.lede": "Sociologist",
    "role.board.t": "Board &amp; Sociology Team Member",
    "role.board.s": "V FOR HUMAN (V4H) Association",
    "role.coord.t": "Writer &amp; Project Coordinator",
    "role.coord.s": "Gender, power &amp; everyday violence",
    "role.edu.t": "Sociology, final year · Radio, TV &amp; Cinema, second major",
    "role.edu.s": "Marmara University · Istanbul, Türkiye",
    "about.p1": "I am a final-year sociology student at Marmara University, completing a double major in Radio, Television, and Cinema. My work unfolds at the intersection of media, culture, and everyday life, and my curiosity centers on how individuals construct meaning and negotiate identity amid social inequalities and power relations, through both lived interactions and the media narratives that surround them.",
    "about.p2": "Over the course of my studies, I’ve carried out several individual qualitative field studies and served as a field research assistant on a nationwide qualitative project on women’s labor. I’m well versed in fieldwork reporting, field notes, academic literature and qualitative research methods, and I code qualitative data with ATLAS.ti. In spring 2026, I spent a semester on Erasmus at Jagiellonian University in Kraków.",
    "about.p3": "For nearly four years I’ve been part of the sociology team at V4H, where we write articles and blog posts and come together around various projects.",
    "about.interests.title": "Research Interests",
    "about.interests.tags": '<span class="tag">Anthropology</span><span class="tag">Ethnology</span><span class="tag">Cultural Studies</span><span class="tag">Identity Studies</span><span class="tag">Discourse Analysis</span><span class="tag">Media Representation</span><span class="tag">Criminalization &amp; Politics</span>',
    "about.methods.title": "Methods &amp; Tools",
    "about.methods.tags": '<span class="tag">Qualitative fieldwork</span><span class="tag">Field notes &amp; reports</span><span class="tag">Academic writing</span><span class="tag">ATLAS.ti coding</span>',
    "about.edu.title": "Education",
    "about.edu.list": '<li><div><strong>B.A. Sociology</strong> <span style="color:var(--muted); font-size:.9rem;">(final year)</span></div><span>Marmara University</span></li><li><div><strong>B.A. Radio, Television and Cinema</strong> <span style="color:var(--muted); font-size:.9rem;">(double major)</span></div><span>Marmara University</span></li><li><strong>Erasmus Exchange</strong><span>Jagiellonian University, Kraków</span></li>',
    "writing.all": "All articles on V4H →",
    "contact.email": "Email",
    "contact.lede": "Open to collaborations and conversations.",
    title: "Şevval Çayır | Sociologist & Writer"
  },
  tr: {
    "nav.about": "Hakkında",
    "nav.writing": "Yazılar",
    "nav.contact": "İletişim",
    "hero.lede": "Sosyolog",
    "role.board.t": "Yönetim Kurulu &amp; Sosyoloji Ekibi Üyesi",
    "role.board.s": "V FOR HUMAN (V4H) Derneği",
    "role.coord.t": "Yazar &amp; Proje Koordinatörü",
    "role.coord.s": "Toplumsal cinsiyet, iktidar &amp; gündelik şiddet",
    "role.edu.t": "Sosyoloji, son sınıf · Radyo, TV ve Sinema, çift anadal",
    "role.edu.s": "Marmara Üniversitesi · İstanbul",
    "about.p1": "Marmara Üniversitesi Sosyoloji Bölümü son sınıf öğrencisiyim ve Radyo, Televizyon ve Sinema bölümünde çift anadal yapıyorum. Çalışmalarım medya, kültür ve gündelik hayatın kesişiminde şekilleniyor; merakım ise bireylerin toplumsal eşitsizlikler ve iktidar ilişkileri içinde, hem gündelik etkileşimler hem de onları çevreleyen medya anlatıları aracılığıyla anlamı nasıl inşa ettiğine ve kimliklerini nasıl müzakere ettiğine odaklanıyor.",
    "about.p2": "Eğitimim boyunca çeşitli bireysel nitel alan araştırmaları yürüttüm ve kadın emeği üzerine yürütülen ulusal ölçekli nitel bir projede saha araştırmacısı olarak yer aldım. Saha raporlaması, saha notları, akademik literatür ve nitel araştırma yöntemleri konularında deneyim sahibiyim ve nitel verileri ATLAS.ti ile kodluyorum. 2026 bahar döneminde Kraków'daki Jagiellonian Üniversitesi'nde Erasmus değişim programında bulundum.",
    "about.p3": "Yaklaşık dört yıldır, makaleler ve blog yazıları yazdığımız ve çeşitli projeler etrafında bir araya geldiğimiz V4H sosyoloji ekibinin bir parçasıyım.",
    "about.interests.title": "Araştırma Alanları",
    "about.interests.tags": '<span class="tag">Antropoloji</span><span class="tag">Etnoloji</span><span class="tag">Kültürel Çalışmalar</span><span class="tag">Kimlik Çalışmaları</span><span class="tag">Söylem Analizi</span><span class="tag">Medya Temsili</span><span class="tag">Kriminalizasyon &amp; Politika</span>',
    "about.methods.title": "Yöntemler &amp; Araçlar",
    "about.methods.tags": '<span class="tag">Nitel saha çalışması</span><span class="tag">Saha notları &amp; raporlama</span><span class="tag">Akademik yazım</span><span class="tag">ATLAS.ti ile kodlama</span>',
    "about.edu.title": "Eğitim",
    "about.edu.list": '<li><div><strong>Lisans: Sosyoloji</strong> <span style="color:var(--muted); font-size:.9rem;">(son sınıf)</span></div><span>Marmara Üniversitesi</span></li><li><div><strong>Lisans: Radyo, Televizyon ve Sinema</strong> <span style="color:var(--muted); font-size:.9rem;">(çift anadal)</span></div><span>Marmara Üniversitesi</span></li><li><strong>Erasmus Değişimi</strong><span>Jagiellonian Üniversitesi, Kraków</span></li>',
    "writing.all": "V4H'teki tüm yazılar →",
    "contact.email": "E-posta",
    "contact.lede": "İş birliklerine ve sohbetlere açık.",
    title: "Şevval Çayır | Sosyolog & Yazar"
  }
};

const list = document.getElementById("articles");

function renderArticles(lang) {
  const fmt = new Intl.DateTimeFormat(lang === "tr" ? "tr-TR" : "en-GB", { year: "numeric", month: "long" });
  list.innerHTML = ARTICLES.map(a => `
    <li class="article">
      <a href="${a.url}" target="_blank" rel="noopener">
        <div class="cover"><img src="${a.cover}?format=500w" alt="" loading="lazy" decoding="async"></div>
        <div>
          <time datetime="${a.date}">${fmt.format(new Date(a.date))}</time>
          <h3>${a.title}</h3>
          <p>${a.excerpt}</p>
        </div>
      </a>
    </li>`).join("");
}

function setLang(lang) {
  const dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang;
  document.title = dict.title;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = dict[el.dataset.i18n];
    if (v) el.innerHTML = v;
  });
  document.querySelectorAll(".lang button").forEach(b =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  renderArticles(lang);
  localStorage.setItem("lang", lang);
}

document.querySelectorAll(".lang button").forEach(b =>
  b.addEventListener("click", () => setLang(b.dataset.lang)));

const params = new URLSearchParams(location.search);
setLang(params.get("lang") || localStorage.getItem("lang") || "en");
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle (defaults to dark, remembers manual choice)
const themeBtn = document.getElementById("theme-toggle");
const currentTheme = () => document.documentElement.dataset.theme || localStorage.getItem("theme") || "dark";
const syncThemeBtn = () => { themeBtn.dataset.mode = currentTheme(); };
themeBtn.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
  syncThemeBtn();
});
syncThemeBtn();

// Gentle reveal on scroll
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
