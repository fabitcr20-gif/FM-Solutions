(function () {
  'use strict';

  var header = document.getElementById('header');
  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primaryNav');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function closeNav() {
    navToggle.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
  }

  navToggle.addEventListener('click', function () {
    var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    primaryNav.classList.toggle('is-open', !isOpen);
  });

  primaryNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Contact form: WhatsApp / email handoff ----
  // TODO: reemplazar por el número real de WhatsApp (formato internacional, sin + ni espacios)
  var WHATSAPP_NUMBER = '50600000000';
  // TODO: reemplazar por el correo real de contacto
  var CONTACT_EMAIL = 'hola@fmsolutions.cr';

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitter = e.submitter;
      var action = submitter ? submitter.dataset.action : 'whatsapp';

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var name = form.name.value.trim();
      var business = form.business.value.trim();
      var contact = form.contact.value.trim();
      var message = form.message.value.trim();

      var body =
        'Hola, soy ' + name + ' (' + business + ').\n' +
        'Contacto: ' + contact + '\n' +
        (message ? 'Mensaje: ' + message : 'Quiero agendar mi diagnóstico gratis.');

      if (action === 'email') {
        var mailto =
          'mailto:' + CONTACT_EMAIL +
          '?subject=' + encodeURIComponent('Diagnóstico gratis — ' + name) +
          '&body=' + encodeURIComponent(body);
        window.location.href = mailto;
      } else {
        var waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(body);
        window.open(waUrl, '_blank', 'noopener');
      }

      status.textContent = 'Gracias, ' + name + '. Te vamos a contactar pronto.';
    });
  }
})();
