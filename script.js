// Navbar sticky shadow saat scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 20) {
    nav.classList.add('shadow');
  } else {
    nav.classList.remove('shadow');
  }
});

// Smooth scroll ke anchor (khusus internal link dengan href="#...")
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Auto-activate tab kategori jika link pakai hash
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash && document.querySelector(`.nav-link[data-bs-target="${hash}"]`)) {
    const tabTrigger = new bootstrap.Tab(document.querySelector(`.nav-link[data-bs-target="${hash}"]`));
    tabTrigger.show();
  }
});
