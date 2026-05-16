// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('open'));
  }
  // Active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav]').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Inscription form -> mailto
  const form = document.getElementById('inscricaoForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const lines = [];
      for (const [k, v] of data.entries()) {
        lines.push(`${k}: ${v}`);
      }
      const body = encodeURIComponent('Nova candidatura AUCP:\n\n' + lines.join('\n'));
      const subject = encodeURIComponent('Nova Candidatura — ' + (data.get('nome_completo') || ''));
      window.location.href = `mailto:aucpconexao@gmail.com?subject=${subject}&body=${body}`;
      document.getElementById('formMsg').textContent = 'A abrir o teu email para enviar a candidatura...';
      document.getElementById('formMsg').className = 'form-msg ok';
    });
  }

  // Contact form -> mailto
  const cform = document.getElementById('contactForm');
  if (cform) {
    cform.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(cform);
      const body = encodeURIComponent(
        `Nome: ${data.get('nome')}\nEmail: ${data.get('email')}\n\nMensagem:\n${data.get('mensagem')}`
      );
      window.location.href = `mailto:aucpconexao@gmail.com?subject=${encodeURIComponent('Contacto via site — ' + data.get('nome'))}&body=${body}`;
    });
  }
});
