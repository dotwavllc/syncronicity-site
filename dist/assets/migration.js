(() => {
  const menu = document.createElement('nav');
  menu.className = 'migration-menu';
  menu.setAttribute('aria-label', 'Mobile navigation');
  menu.hidden = true;
  const original = document.querySelector('.header-menu-nav');
  if (original) original.querySelectorAll('a').forEach(link => { const item = document.createElement('a'); item.href = link.href; item.textContent = link.textContent.trim(); menu.append(item); });
  document.body.append(menu);
  const buttons = [...document.querySelectorAll('.header-burger-btn')];
  function toggleMenu(open) {
    menu.hidden = !open;
    buttons.forEach(b => { b.setAttribute('aria-expanded', String(open)); b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); });
  }
  buttons.forEach(b => { b.setAttribute('aria-label','Open menu'); b.setAttribute('aria-expanded','false'); b.addEventListener('click', () => toggleMenu(menu.hidden)); });
  const dialog = document.createElement('dialog');
  dialog.className = 'migration-lightbox';
  dialog.setAttribute('aria-label','Image viewer');
  const close = document.createElement('button'); close.type = 'button'; close.textContent = 'Close'; close.setAttribute('aria-label','Close image');
  const img = document.createElement('img');
  dialog.append(close,img); document.body.append(dialog);
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  document.querySelectorAll('.js-lightbox-trigger').forEach(b => b.addEventListener('click', () => {
    const source = b.querySelector('img'); if (!source) return;
    img.src = source.currentSrc || source.src || source.dataset.src; img.alt = source.alt; dialog.showModal(); close.focus();
  }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) toggleMenu(false); });

  // The static export keeps lazy placeholders without Squarespace's image loader.
  if (document.body.classList.contains('homepage')) {
    const hydrateImages = () => document.querySelectorAll('img[data-src]').forEach(image => {
      const source = image.dataset.src || image.dataset.image;
      if (!source) return;
      image.loading = 'eager';
      if (!image.complete || image.naturalWidth === 0) image.src = source;
    });
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hydrateImages, { once: true });
    else hydrateImages();
  }
})();
