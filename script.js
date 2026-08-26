const form = document.querySelector('.contact-form');
const status = document.querySelector('.form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = 'Confira os campos obrigatórios para continuar.';
    form.reportValidity();
    return;
  }
  status.textContent = 'Recebemos seu pedido de diagnóstico. Em uma versão conectada, a equipe retornará pelo canal informado.';
  form.reset();
});
const media = document.querySelector('.hero-media');
const fallback = new Image();
fallback.src = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=82';
fallback.onerror = () => { media.style.backgroundImage = 'linear-gradient(145deg, #23826e, #0e4c41)'; media.dataset.fallback = 'Imagem indisponível'; };
