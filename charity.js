/*
  EDIT THIS ONE FILE to switch the website to a different charity.

  Replace the values below, save, and upload the updated files.
  The website is intentionally static, so it can be hosted FREE on
  GitHub Pages, Netlify, or Cloudflare Pages.
*/

const charity = {
  name: "Big Brothers and Sisters Program",
  shortName: "Big Bros & Sis",
  eyebrow: "INVEST TODAY. EMPOWER TOMORROW.",
  title: "Big Brothers and Sisters Program",
  subtitle: "Strong kids. Strong community. Stronger future.",
  description:
    "Your donations help provide mentorship, guidance, and support to young people who need positive role models and opportunities to grow.",

  aboutTitle: "Give young people a chance to play, grow and lead.",
  aboutText:
    "We connect young people with caring mentors who provide guidance, support, and encouragement. Through mentorship, we help youth develop confidence, build relationships, and reach their full potential.",

  needs: [
    { icon: "👥", title: "Mentors", text: "Volunteers to serve as positive role models." },
    { icon: "📚", title: "Educational Resources", text: "Books, tutoring, and learning materials." },
    { icon: "🎯", title: "Activity Funding", text: "Support for outings and enrichment activities." },
    { icon: "💝", title: "Donations", text: "Financial support to expand our programs." }
  ],

  impact: [
    { icon: "💙", title: "Support Our Youth", text: "Every mentoring relationship makes a difference." },
    { icon: "🤝", title: "Build Confidence", text: "Mentorship helps young people develop self-esteem." },
    { icon: "👥", title: "Create Opportunity", text: "Help open doors to a brighter future." },
    { icon: "🏆", title: "Change Lives", text: "Together, we can transform young people's futures." }
  ],

  donateTitle: "Donate today.",
  donateText: "Every contribution helps us connect more young people with mentors who care. Your support directly impacts lives.",
  donateUrl: "https://venmo.com/",
  donateButtonText: "Donate Now",
  donateNote: "Replace donateUrl above with your charity's donation page, Venmo, PayPal, GoFundMe, or other giving link.",

  footerTagline: "Strong kids. Strong community. Stronger future."
};

document.title = charity.name;
document.getElementById("brandName").textContent = charity.shortName;
document.getElementById("heroEyebrow").textContent = charity.eyebrow;
document.getElementById("heroTitle").textContent = charity.title;
document.getElementById("heroSubtitle").textContent = charity.subtitle;
document.getElementById("heroDescription").textContent = charity.description;
document.getElementById("aboutTitle").textContent = charity.aboutTitle;
document.getElementById("aboutText").textContent = charity.aboutText;
document.getElementById("donateTitle").textContent = charity.donateTitle;
document.getElementById("donateText").textContent = charity.donateText;
document.getElementById("donateButton").textContent = charity.donateButtonText;
document.getElementById("donateButton").href = charity.donateUrl;
document.getElementById("donateNote").textContent = charity.donateNote;
document.getElementById("footerName").textContent = charity.shortName;
document.getElementById("footerTagline").textContent = charity.footerTagline;

const needsGrid = document.getElementById("needsGrid");
needsGrid.innerHTML = charity.needs.map(item => `
  <article class="need-card">
    <div class="icon" aria-hidden="true">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  </article>
`).join("");

const impactGrid = document.getElementById("impactGrid");
impactGrid.innerHTML = charity.impact.map(item => `
  <article class="impact-card">
    <div class="icon" aria-hidden="true">${item.icon}</div>
    <h3>${item.title}</h3>
    <p>${item.text}</p>
  </article>
`).join("");

document.getElementById("heroDonate").href = "#donate";