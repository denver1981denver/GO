const formOverlay = document.querySelector('.overlay-modal');
const btnAdd = document.querySelector('.call-order-btn');

btnAdd.addEventListener('click', () => {
  formOverlay.classList.add('is-visible');
});

formOverlay.addEventListener('click', (e) => {
  const target = e.target;
  if (target === formOverlay || target.closest('.modal-form__close')) {
    formOverlay.classList.remove('is-visible');
  }
});
