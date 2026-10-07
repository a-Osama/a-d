(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const hero = document.querySelector('.hero');
  const artwork = document.querySelector('.art-window');
  const header = document.querySelector('header');
  let framePending = false;

  // The content stays visible when scripting or animation is unavailable.
  if (!preference.matches) document.body.classList.add('entrance-ready');

  function updateScroll() {
    const y = window.scrollY;
    const range = document.documentElement.scrollHeight - window.innerHeight;
    document.documentElement.style.setProperty('--page-progress', range > 0 ? Math.min(1, Math.max(0, y / range)) : 0);
    header.classList.toggle('scrolled', y > 18);
    if (!preference.matches && finePointer.matches && artwork && y < hero.offsetHeight + header.offsetHeight) {
      artwork.style.setProperty('--scroll-drift', `${Math.min(9, y * .02)}px`);
    }
    document.querySelectorAll('.nav-wrap a').forEach(link => {
      if (link.classList.contains('active')) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    framePending = false;
  }

  function scheduleUpdate() {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(updateScroll);
  }

  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate, { passive: true });
  updateScroll();

  hero.addEventListener('pointermove', event => {
    if (preference.matches || !finePointer.matches || !artwork) return;
    const bounds = hero.getBoundingClientRect();
    artwork.style.setProperty('--garden-x', `${((event.clientX - bounds.left) / bounds.width - .5) * 8}px`);
    artwork.style.setProperty('--garden-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 8}px`);
  }, { passive: true });

  hero.addEventListener('pointerleave', () => {
    if (!artwork) return;
    artwork.style.setProperty('--garden-x', '0px');
    artwork.style.setProperty('--garden-y', '0px');
  });

  document.querySelectorAll('.faq details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (!detail.open || preference.matches) return;
      detail.querySelector('p')?.animate([
        { opacity: 0, transform: 'translateY(-5px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], { duration: 350, easing: 'ease-out' });
    });
  });

  preference.addEventListener('change', () => {
    document.body.classList.toggle('entrance-ready', !preference.matches);
    if (preference.matches) {
      document.getAnimations().forEach(animation => animation.cancel());
      if (artwork) {
        ['--garden-x', '--garden-y', '--scroll-drift'].forEach(property => artwork.style.removeProperty(property));
      }
    }
    scheduleUpdate();
  });
})();
