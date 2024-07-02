const formOverlay = document.querySelector('.overlay-modal');
const btnAdd = document.querySelectorAll('.call-order');
const userPhone = document.querySelector('#modal-phone');
const title = document.querySelector('.modal-form__title');
const fieldset = document.querySelector('.modal-form__group');

btnAdd.forEach((btn) => {
  btn.addEventListener('click', () => {
    formOverlay.classList.add('is-visible');
  });
});

formOverlay.addEventListener('click', ({target}) => {
  if (target === formOverlay || target.closest('.modal-form__close')) {
    formOverlay.classList.remove('is-visible');
  }
});

// Валидация модального окна
const telMask = new Inputmask('+7 (999)-999-99-99');
telMask.mask(userPhone);

const validate = new JustValidate('.modal-form');

validate
    .addField('#modal-name', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваше имя',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Не короче 2 символов',
      },
    ])
    .addField('#modal-phone', [
      {
        rule: 'required',
        errorMessage: 'Укажите ваш телефон',
      },
      {
        validator(value) {
          const phone = userPhone.inputmask.unmaskedvalue();
          return !!(Number(phone) && phone.length === 10);
        },
        errorMessage: 'Телефон некорректный',
      },
    ])
    .onSuccess(({target}) => {
      axios
          .post('https://jsonplaceholder.typicode.com/posts', {
            name: target.modalName.value,
            tel: userPhone.inputmask.unmaskedvalue(),
          })
          .then((response) => {
            target.reset();
            fieldset.disabled = true;
            title.textContent = `Спасибо,ожидайте звонка`;
          })

          .catch((err) => {
            console.error(err);
            target.reset();
            title.textContent = `Ошибка,попробуйте позже!`;
            fieldset.disabled = false;
          });
    });
