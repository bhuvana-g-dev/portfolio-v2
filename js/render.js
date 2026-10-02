/**
 * render.js — All DOM rendering functions
 * Each section has its own render function.
 * Depends on: data.js (PORTFOLIO global)
 */

/* ── HERO / PROFILE ──────────────────────────────────────── */
function renderHero() {
  const p = PORTFOLIO.profile;

  // ── Auto-count stats from actual data arrays ──────────────
  const autoStats = [
    { num: PORTFOLIO.projects.length,      label: "Projects Live" },
    { num: PORTFOLIO.certificates.length,  label: "Certificates"  },
    { num: PORTFOLIO.achievements.length,  label: "Hackathons"    },
    { num: PORTFOLIO.skills.length,        label: "Core Skills"   }
  ];

  // ── Desktop hero card avatar ──────────────────────────────
  const desktopInner = p.profileImage
    ? `<img src="${p.profileImage}" alt="${p.name}" class="hc-avatar-img" />`
    : `<div class="hc-avatar">${p.name.charAt(0)}</div>`;

  document.querySelector('.hero-card-avatar').innerHTML =
    `<div class="hero-card-avatar-ring">${desktopInner}</div>`;

  // ── FIX #1: Mobile avatar injected above hero badge ───────
  // Visible only on ≤900px via CSS (desktop hidden)
  const mobileWrap = document.querySelector('.hero-mobile-avatar');
  if (mobileWrap) {
    const mobileInner = p.profileImage
      ? `<img src="${p.profileImage}" alt="${p.name}" class="hero-mobile-avatar-img" />`
      : `<div class="hero-mobile-avatar-initials">${p.name.charAt(0)}</div>`;
    mobileWrap.innerHTML = `<div class="hero-mobile-avatar-ring">${mobileInner}</div>`;
  }

  // ── Stats cards ───────────────────────────────────────────
  document.querySelector('.hc-stats').innerHTML = autoStats.map(s => `
    <div class="hc-stat">
      <span class="hc-stat-num">${s.num}</span>
      <span class="hc-stat-label">${s.label}</span>
    </div>
  `).join('');

  // ── Text content ──────────────────────────────────────────
  document.querySelector('.hc-name').textContent        = p.name;
  document.querySelector('.hero-badge-text').textContent = p.status;
  document.querySelector('.hero-intro').textContent     = p.intro;
  document.querySelector('.hero-location').textContent  = `📍 ${p.location}`;
  document.querySelector('.hero-name-text').textContent = p.name;

  // ── Social links ──────────────────────────────────────────
  const { githubUrl, linkedinUrl } = PORTFOLIO.contact;
  const ghBtn = document.querySelector('.btn-github');
  const liBtn = document.querySelector('.btn-linkedin');
  if (ghBtn) ghBtn.href = githubUrl;
  if (liBtn) liBtn.href = linkedinUrl;
}

/* ── ABOUT ───────────────────────────────────────────────── */
function renderAbout() {
  const ed = PORTFOLIO.education;
  const rows = [
    { key: "College",  val: ed.college                       },
    { key: "Degree",   val: ed.degree                        },
    { key: "Duration", val: ed.duration                      },
    { key: "Status",   val: ed.status,  highlight: true      }
  ];
  document.querySelector('.edu-rows').innerHTML = rows.map(r => `
    <div class="edu-row">
      <span class="edu-key">${r.key}</span>
      <span class="edu-val${r.highlight ? ' edu-val--accent' : ''}">${r.val}</span>
    </div>
  `).join('');
}

/* ── SKILLS ──────────────────────────────────────────────── */
function renderSkills() {
  document.querySelector('.skills-grid').innerHTML = PORTFOLIO.skills.map(cat => `
    <div class="skill-card" style="--cat-color: ${cat.color}">
      <div class="skill-card-header">
        <span class="skill-icon" style="color: ${cat.color}">${cat.icon}</span>
        <h3>${cat.category}</h3>
      </div>
      <ul class="skill-list">
        ${cat.items.map(item => `
          <li class="skill-item">
            <span class="skill-name">${item.name}</span>
            <span class="skill-note">${item.note}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

/* ── PROJECTS ─────────────────────────────────────────────── */
function renderProjects() {
  document.querySelector('.projects-grid').innerHTML = PORTFOLIO.projects.map(p => {
    const visualHTML = p.image
      ? `<img src="${p.image}" alt="${p.title}" class="project-img" />`
      : `<div class="project-gradient-fallback" style="background: ${p.gradientFallback}">
           <span class="project-fallback-label">${p.tech.join(' · ')}</span>
         </div>`;

    return `
      <div class="project-card">
        <div class="project-visual">${visualHTML}</div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-tech">
            ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${p.liveUrl}"   target="_blank" rel="noopener" class="btn-project btn-live">↗ Live Demo</a>
            <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn-project btn-code">⬡ GitHub</a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ── CERTIFICATES ─────────────────────────────────────────── */
function renderCertificates() {
  const CERT_ICONS = {
    "Programming":    "{ }",
    "Soft Skills":    "◎",
    "Data Science":   "≋",
    "Data Analytics": "▦",
    "Cloud":          "◈",
    "AI & ML":        "⬡"
  };

  document.querySelector('.cert-track').innerHTML = PORTFOLIO.certificates.map(c => {
    const imageHTML = c.image
      ? `<img src="${c.image}" alt="${c.title}" class="cert-img" />`
      : `<div class="cert-img-placeholder" style="background: linear-gradient(160deg, ${c.color}18, ${c.color}08); border-bottom: 1px solid ${c.color}30;">
           <span class="cert-placeholder-icon" style="color: ${c.color}">${CERT_ICONS[c.category] || '✦'}</span>
           <span class="cert-placeholder-issuer" style="color: ${c.color}">${c.issuer}</span>
           <span class="cert-placeholder-category">${c.category}</span>
         </div>`;

    const verifyBtn = c.verifyLink
      ? `<a href="${c.verifyLink}" target="_blank" rel="noopener" class="cert-verify-btn">Verify ↗</a>`
      : '';

    return `
      <div class="cert-card">
        <div class="cert-inner-wrap">
          <div class="cert-img-wrap">${imageHTML}</div>
          <div class="cert-body">
            <div class="cert-meta">
              <span class="cert-issuer-badge">${c.issuer}</span>
              <span class="cert-category-badge">${c.category}</span>
              <span class="cert-year">${c.year}</span>
            </div>
            <h4 class="cert-title">${c.title}</h4>
            ${verifyBtn}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* ── ACHIEVEMENTS ─────────────────────────────────────────── */
function renderAchievements() {
  document.querySelector('.achievements-grid').innerHTML = PORTFOLIO.achievements.map((a, i) => {
    const delays = [0, 0.1, 0.2];
    const tagsHTML = (a.tags || []).map(t =>
      `<span class="ach-tag">${t}</span>`
    ).join('');

    return `
      <div class="achievement-card" style="--ach-color: ${a.color || 'var(--gold)'}; transition-delay: ${delays[i] || 0}s">
        <div class="ach-banner">
          <div class="ach-icon-wrap">${a.icon || '⬡'}</div>
          <div class="ach-badge">
            <span class="ach-type">${a.type}</span>
            <span class="ach-year">${a.year}</span>
          </div>
        </div>
        <div class="ach-body">
          <h3 class="ach-title">${a.title}</h3>
          <p class="ach-desc">${a.description}</p>
          ${tagsHTML ? `<div class="ach-footer">${tagsHTML}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/* ── EXPERIENCE ───────────────────────────────────────────── */
function renderExperience() {
  document.querySelector('.experience-list').innerHTML = PORTFOLIO.experience.map(e => `
    <div class="exp-card ${e.status === 'seeking' ? 'exp-seeking' : ''}">
      <div class="exp-left">
        <div class="exp-dot"></div>
        <div class="exp-line"></div>
      </div>
      <div class="exp-content">
        <div class="exp-header">
          <div>
            <h3 class="exp-role">${e.role}</h3>
            <p class="exp-org">${e.organization}</p>
          </div>
          <span class="exp-duration">${e.duration}</span>
        </div>
        <p class="exp-desc">${e.description}</p>
        <ul class="exp-contributions">
          ${e.contributions.map(c => `<li><span class="bullet">▸</span>${c}</li>`).join('')}
        </ul>
        <div class="exp-tech">
          ${e.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ── CONTACT ──────────────────────────────────────────────── */
const CONTACT_ICONS = {
  email:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>`,
  linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  github:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  phone:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.82 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.15a16 16 0 0 0 5.94 5.94l1.21-1.21a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
};

function renderContact() {
  const c = PORTFOLIO.contact;
  const items = [
    { icon: CONTACT_ICONS.email,    label: "Email",    value: c.email,    href: `mailto:${c.email}` },
    { icon: CONTACT_ICONS.linkedin, label: "LinkedIn", value: c.linkedin, href: c.linkedinUrl        },
    { icon: CONTACT_ICONS.github,   label: "GitHub",   value: c.github,   href: c.githubUrl          },
    { icon: CONTACT_ICONS.phone,    label: "Phone",    value: c.phone,    href: `tel:${c.phone}`     }
  ];

  document.querySelector('.contact-links-grid').innerHTML = items.map(item => `
    <a href="${item.href}" target="_blank" rel="noopener" class="contact-card">
      <span class="contact-icon">${item.icon}</span>
      <div class="contact-info">
        <span class="contact-label">${item.label}</span>
        <span class="contact-value">${item.value}</span>
      </div>
      <span class="contact-arrow">↗</span>
    </a>
  `).join('');

  // Inject Web3Forms access key
  const form = document.querySelector('.contact-form');
  if (form) {
    const keyInput = form.querySelector('input[name="access_key"]');
    if (keyInput && c.web3formsKey) keyInput.value = c.web3formsKey;
  }
}

/* ── FOOTER ───────────────────────────────────────────────── */
function renderFooter() {
  const yearEl = document.querySelector('.footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const nameEl = document.querySelector('.footer-name');
  if (nameEl) nameEl.textContent = PORTFOLIO.profile.name;
}

/* ── RENDER ALL ───────────────────────────────────────────── */
function renderAll() {
  renderHero();
  renderAbout();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderAchievements();
  renderExperience();
  renderContact();
  renderFooter();
}