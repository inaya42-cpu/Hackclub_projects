const modal = document.querySelector('.modal-backdrop');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');

const setModal = (open) => {
  modal.classList.toggle('open', open);
  modal.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
};

document.querySelectorAll('[data-open-modal="true"]').forEach((button) => {
  button.addEventListener('click', () => setModal(true));
});

document.querySelector('.modal-close').addEventListener('click', () => setModal(false));
modal.addEventListener('click', (event) => {
  if (event.target === modal) setModal(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setModal(false);
});

const copyText = async (text) => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Clipboard API is blocked in some embedded previews; fall back below.
    }
  }
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand('copy');
  field.remove();
  return copied;
};

document.querySelector('.modal-action').addEventListener('click', async (event) => {
  const button = event.currentTarget;
  const copied = await copyText('Sippy demo invite: discord.gg/sippy-demo');
  button.textContent = copied ? 'Invite placeholder copied' : 'Copy not available here';
  setTimeout(() => {
    button.innerHTML = 'Copy invite placeholder';
  }, 2200);
});

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.classList.toggle('mobile-open', !isOpen);
  nav.classList.toggle('mobile-open', !isOpen);
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.classList.remove('mobile-open');
    nav.classList.remove('mobile-open');
  });
});
