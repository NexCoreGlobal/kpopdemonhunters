// ============ Back-to-top ============
const backTop = document.querySelector('.back-to-top');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
  });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============ Sub-nav 탭 전환 (About / Fan Creations / Korea 공용) ============
document.querySelectorAll('.subnav').forEach((nav) => {
  const buttons = nav.querySelectorAll('button[data-tab]');
  const panels = document.querySelectorAll('.tab-panel');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-tab');
      panels.forEach((p) => p.classList.toggle('active', p.id === target));
      window.scrollTo({ top: document.querySelector('.subnav-wrap')?.offsetTop || 0, behavior: 'smooth' });
    });
  });
});

// ============ Fan Covers 지역 서브탭 ============
document.querySelectorAll('.region-tabs').forEach((wrap) => {
  const buttons = wrap.querySelectorAll('button[data-region]');
  const panels = wrap.parentElement.querySelectorAll('.region-panel');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-region');
      panels.forEach((p) => p.classList.toggle('active', p.dataset.region === target));
    });
  });
});

// ============ 캐러셀 (자리표시자용 기본 동작) ============
document.querySelectorAll('.carousel').forEach((carousel) => {
  const dots = carousel.querySelectorAll('.carousel-dots .dot');
  const prevBtn = carousel.querySelector('.carousel-arrow.prev');
  const nextBtn = carousel.querySelector('.carousel-arrow.next');
  let current = dots.length - 1;
  function setActive(i) {
    current = (i + dots.length) % dots.length;
    dots.forEach((d, idx) => d.classList.toggle('active', idx === current));
  }
  prevBtn?.addEventListener('click', () => setActive(current - 1));
  nextBtn?.addEventListener('click', () => setActive(current + 1));
  dots.forEach((dot, idx) => dot.addEventListener('click', () => setActive(idx)));
});

// ============ Honmoon pause 버튼 (자리표시자) ============
document.querySelector('.pause-btn')?.addEventListener('click', function () {
  this.classList.toggle('paused');
});
