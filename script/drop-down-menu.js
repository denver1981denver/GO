const duration = 600;
const distance = 100.1;
const page = document.querySelector('.page');
const overlay = document.querySelector('.drop-down-menu');
const menu = document.querySelector('.drop-down-menu__wrapper');
const burger = document.querySelector('.burger');

let savePositionCoords = NaN;

const startAnimation = (duration, callback) => {
  let startAnimation = NaN;

  requestAnimationFrame(function step(timestamp) {
    startAnimation ||= timestamp;

    const progress = (timestamp - startAnimation) / duration;

    callback(progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  });
};

const easyInOut = (time) => 0.5 * (1 - Math.cos(Math.PI * time));

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  if (burger.classList.contains('open')) {
    page.classList.add('open-popap');
    startAnimation(duration, (progress) => {
      const move = easyInOut(progress) * distance;
      overlay.classList.add('open');
      menu.style.transform = `translateX(${move}%)`;
      overlay.style.opacity = `${move / 100}`;

      savePositionCoords = move;
    });
  } else {
    startAnimation(duration, (progress) => {
      const move = easyInOut(progress) * distance;
      menu.style.transform = `translateX(${savePositionCoords - move}%)`;
      overlay.style.opacity = `${(savePositionCoords - move) / 100}`;
      if (overlay.style.opacity <= 0.1) {
        overlay.classList.remove('open');
      }
      page.classList.remove('open-popap');
    });
  }
});

page.addEventListener('click', (e) => {
  const target = e.target;
  if (overlay.classList.contains('open')) {
    if (target !== menu) {
      startAnimation(duration, (progress) => {
        burger.classList.remove('open');
        const move = easyInOut(progress) * distance;
        menu.style.transform = `translateX(${savePositionCoords - move}%)`;
        overlay.style.opacity = `${(savePositionCoords - move) / 100}`;
        if (overlay.style.opacity <= 0.1) {
          overlay.classList.remove('open');
        }
        page.classList.remove('open-popap');
      });
    }
  }
});

