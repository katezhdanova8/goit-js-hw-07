function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', onCreateBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  const amount = refs.input.value;

  if (amount < 1 || amount > 100) 
    return alert('Please, enter a number between 1 and 100');

  createBoxes(amount);
}

function createBoxes(amount) {
  const boxes = [];
  const existingBoxes = refs.boxes.children;
  let size = 30;

  if (existingBoxes.length > 0) {
    const lastBox = existingBoxes[existingBoxes.length - 1];
    size = parseInt(lastBox.style.width) + 10;
  }

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${size + i * 10}px`;
    div.style.height = `${size + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.push(div);
  }

  refs.boxes.append(...boxes);
}

function onDestroyBtnClick() {
  refs.boxes.innerHTML = '';
}

