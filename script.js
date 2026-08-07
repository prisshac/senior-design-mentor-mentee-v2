// ============================================================
// SITE SEMESTER SETTINGS
// Change ONLY this one line when a new semester begins.
// Examples: "Fall 2026", "Spring 2027", "Fall 2027"
// The site automatically calculates the following semester.
// ============================================================
const CURRENT_TERM = "Fall 2026";

function getNextTerm(term) {
  const match = term.trim().match(/^(Fall|Spring)\s+(\d{4})$/i);
  if (!match) return "the next semester";

  const season = match[1].toLowerCase();
  const year = Number(match[2]);

  return season === "fall"
    ? `Spring ${year + 1}`
    : `Fall ${year}`;
}

const NEXT_TERM = getNextTerm(CURRENT_TERM);

document.querySelectorAll('[data-current-term]').forEach(el => {
  el.textContent = CURRENT_TERM;
});

document.querySelectorAll('[data-next-term]').forEach(el => {
  el.textContent = NEXT_TERM;
});

const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
