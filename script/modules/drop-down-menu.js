const duration = 500;
const distance = 470;
let requestId = NaN;

const menu = document.querySelector('.navigation__list');
const burger = document.querySelector('.menu');


const startAnimation = (duration, callback) => {
  let startAnimation = NaN;

  requestAnimationFrame(function step(timestamp) {
    startAnimation ||= timestamp;

    const progress = (timestamp - startAnimation) / duration;

    callback(progress);
    if (progress < 1) {
      requestId = requestAnimationFrame(step)
    }
  });
};

const easyInOut = time => 0.5 * (1 - Math.cos(Math.PI * time));

burger.addEventListener('click', () => {
  menu.style.display = 'flex';
  startAnimation(duration, (progress) => {
    const bottom = easyInOut(progress) * distance;
    menu.style.transform = `translateY(${bottom}px)`;
  });
});

// let startTime = NaN;
// const durationFly = 2000;
// const durationOpacity = 2000;

// let left = 0;

// const overlay = document.createElement('div');

// overlay.style.cssText = `
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background-color: black;
//   opacity: 1;
//   z-index: 999;
// `;

// const fly = document.createElement('div');

// fly.style.cssText = `
//   position: fixed;
//   width: 50px;
//   height: 50px;
//   left: ${left};
//   top: calc(50% - 25px);
//   background: url('image/fly.svg') center/contain no-repeat;
// `;

// overlay.append(fly);
// document.body.append(overlay);

// const hideOverlay = (timestamp) => {
//   startTime ||= timestamp;
//   const progress = (timestamp - startTime) / durationOpacity;
//   overlay.style.opacity = 1 - progress;

//   if(progress < 1 ) {
//     requestAnimationFrame(hideOverlay)
//   } else {
//     overlay.remove();
//   }
// }

// const stepFly = (timestamp) => {
//     startTime ||= timestamp;
//   const progress = (timestamp - startTime) / durationFly;
//   left = document.documentElement.scrollWidth * progress;
//   fly.style.transform = `translateX(${left}px)`;
//   if(progress < 1) {
//     requestAnimationFrame(stepFly);
//   } else {
//     startTime = NaN;
//     requestAnimationFrame(hideOverlay)
//   }
// };

// requestAnimationFrame(stepFly);
