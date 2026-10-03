// Contact and additional-information fields are Nil as required by the lab brief.
const contactDetails = {
  email: { title: 'Email', message: 'Nil' },
  phone: { title: 'Phone number', message: 'Nil' },
  more: { title: 'Additional information', message: 'Nil' }
};

const popup = document.getElementById('popup');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const closeButtons = popup.querySelectorAll('.modal-close, .modal-done');
let lastFocusedElement = null;

function showPopup(type) {
  const detail = contactDetails[type];
  if (!detail) return;
  lastFocusedElement = document.activeElement;
  modalTitle.textContent = detail.title;
  modalMessage.textContent = detail.message;
  popup.hidden = false;
  popup.querySelector('.modal-close').focus();
}

function closePopup() {
  popup.hidden = true;
  if (lastFocusedElement) lastFocusedElement.focus();
}

document.querySelectorAll('[data-popup]').forEach((button) => {
  button.addEventListener('click', () => showPopup(button.dataset.popup));
});

closeButtons.forEach((button) => button.addEventListener('click', closePopup));
popup.addEventListener('click', (event) => {
  if (event.target === popup) closePopup();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !popup.hidden) closePopup();
});
