const items = document.querySelectorAll(".faq__item ");
const buttons = document.querySelectorAll(".faq__btn");
const textWrapper = document.querySelectorAll(".faq__text-wrapper");
const container = document.querySelectorAll(".faq__container");

items.forEach((btn, i) => {
  if (i % 2 === 0 || i === 0) {
    btn.dataset.color = "even";
  } else {
    btn.dataset.color = "odd";
  }
});

let heightWrapper = 0;

textWrapper.forEach((elem) => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

buttons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    for (let i = 0; i < items.length; i += 1) {
      if (index === i) {
        textWrapper[i].style.height = items[i].classList.contains(
          "faq__item-active"
        )
          ? ""
          : `${heightWrapper}px`;
        items[i].classList.toggle("faq__item-active");

        if (items[i].getAttribute("data-color") === "even") {
          items[i].classList.toggle("faq__close-purple");
        }
        if (items[i].getAttribute("data-color") === "odd") {
          items[i].classList.toggle("faq__close-white");
        }
console.log(e.target);
        // if (e.target !== items) {
        //   items[i].classList.remove("faq__item-active");
        //   items[i].classList.remove("faq__close-purple");
        //   items[i].classList.remove("faq__close-white");
        //   textWrapper[i].style.height = "";
        // }
      } else {
        items[i].classList.remove("faq__item-active");
        items[i].classList.remove("faq__close-purple");
        items[i].classList.remove("faq__close-white");
        textWrapper[i].style.height = "";
      }
    }
  });
});
