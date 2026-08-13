/* Progressive enhancement shared by every page.
   Loaded with `defer` and guarded by an onerror handler on the script tag,
   so a failed request degrades to fully visible content. */
(function () {
  'use strict';

  var root = document.documentElement;

  /* Reveal sections as they scroll into view. The hidden starting state is
     applied by the inline <head> snippet, so there is nothing to undo here
     except on browsers without IntersectionObserver. */
  if (root.classList.contains('js-reveal')) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('main section').forEach(function (el) {
        io.observe(el);
      });
    } else {
      root.classList.remove('js-reveal');
    }
  }

  /* Print buttons ship hidden because they do nothing without JS. */
  document.querySelectorAll('[data-print]').forEach(function (btn) {
    btn.hidden = false;
    btn.addEventListener('click', function () { window.print(); });
  });
}());
