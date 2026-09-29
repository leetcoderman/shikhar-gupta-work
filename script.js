const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const themeToggle = document.querySelector('.theme-toggle');

function setTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeToggle?.setAttribute('aria-checked', String(dark));
  const icon = themeToggle?.querySelector('.theme-icon');
  if (icon) icon.textContent = dark ? '☀' : '☾';
}

setTheme(localStorage.getItem('portfolio-theme') === 'dark');
themeToggle?.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  setTheme(dark);
  localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
});

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('is-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
}));

const sectionLinks = [...nav.querySelectorAll('a[href^="#"]')];
const sections = [...document.querySelectorAll('main section[id]')];
function setActiveSection(id) {
  sectionLinks.forEach((link) => {
    if (link.hash.slice(1) === id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
function updateActiveSection() {
  let active = null;
  const threshold = window.innerHeight * 0.35;
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= threshold) active = section.id;
  });
  setActiveSection(active);
}
sectionLinks.forEach((link) => link.addEventListener('click', () => setActiveSection(link.hash.slice(1))));
window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('resize', updateActiveSection);
updateActiveSection();

document.querySelectorAll('.back-to-top, a[href="#top"]').forEach((control) => {
  control.addEventListener('click', (event) => {
    event.preventDefault();
    history.replaceState(null, '', '#top');
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveSection(null);
  });
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const motionVideo = document.querySelector('.motion-video');
if (reduceMotion.matches) motionVideo?.pause();
reduceMotion.addEventListener('change', (event) => {
  if (event.matches) motionVideo?.pause();
  else motionVideo?.play().catch(() => {});
});

if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}
