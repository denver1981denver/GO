const items = document.querySelectorAll('.faq__item ');
const buttons = document.querySelectorAll('.faq__btn');
const textWrapper = document.querySelectorAll('.faq__text-wrapper');

let heightWrapper = 0;

textWrapper.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    for (let i = 0; i < items.length; i += 1) {
      if (index === i) {
        textWrapper[i].style.height =
          items[i].classList.contains('faq__item-active') ?
          '' : `${heightWrapper}px`
        items[i].classList.toggle('faq__item-active');
      } else {
        items[i].classList.remove('faq__item-active');
        textWrapper[i].style.height = '';
      }
    }
  });
});


