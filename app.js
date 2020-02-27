const onBtn = document.querySelector('#turn-on');
const offBtn = document.querySelector('#turn-off');

const allBulbs = document.querySelectorAll('.bulb');

let isOn = false;

const lightsOn = () => {
  if (isOn) {
    allBulbs.forEach(bulb => {
      if (bulb.className === 'bulb red') {
        bulb.classList.toggle('red-on');
        setTimeout(() => {
          bulb.classList.toggle('red-on');
        }, 1000);
      } else if (bulb.className === 'bulb yellow') {
        setTimeout(() => {
          bulb.classList.toggle('yellow-on');
        }, 1000);
        setTimeout(() => {
          bulb.classList.toggle('yellow-on');
        }, 2000);
      } else if (bulb.className === 'bulb blue') {
        setTimeout(() => {
          bulb.classList.toggle('blue-on');
        }, 2000);
        setTimeout(() => {
          bulb.classList.toggle('blue-on');
        }, 3000);
      }
    });
  }
  setTimeout(lightsOn, 3000);
};

onBtn.addEventListener('click', () => {
  isOn = true;
  lightsOn();
});

offBtn.addEventListener('click', () => {
  isOn = false;
});
