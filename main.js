// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');

  const setHeight = () => {
    a.style.maxHeight = item.classList.contains('open') ? a.scrollHeight + 'px' : '0px';
  };
  setHeight();

  q.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    faqItems.forEach(i => { i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = '0px'; });
    if (!isOpen) {
      item.classList.add('open');
      setHeight();
    }
  });

  window.addEventListener('resize', () => { if (item.classList.contains('open')) setHeight(); });
});

// Nach einem Sprachwechsel die Höhe des geöffneten FAQ-Eintrags neu berechnen
document.addEventListener('langchange', () => {
  document.querySelectorAll('.faq-item.open .faq-a').forEach(a => {
    a.style.maxHeight = a.scrollHeight + 'px';
  });
});
