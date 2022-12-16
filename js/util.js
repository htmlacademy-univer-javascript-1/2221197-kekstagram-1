const showAlert = (massage) => {
  const alertBlock = document.createElement('div');
  alertBlock.style.position = 'absolute';
  alertBlock.style.top = '0';
  alertBlock.style.left = '0';
  alertBlock.style.right = '0';
  alertBlock.style.padding = '10px';
  alertBlock.style.zIndex = '100';
  alertBlock.style.fontSize = '20px';
  alertBlock.style.backgroundColor = '#FD4C4C';
  alertBlock.style.color = '#FFF';
  alertBlock.style.textAlign = 'center';
  alertBlock.style.textTransform = 'none';
  alertBlock.innerHTML = massage;
  document.body.prepend(alertBlock);
  setTimeout(() => alertBlock.remove(), 5000);
};

const createRandomArray = (arrayLength) => {
  const a1 = [];
  for (let i = 0; i < arrayLength; i++) {
    a1.push(i);
  }
  const a2 = [];
  while (a1.length) {
    const pos = Math.random() * a1.length;
    const element = a1.splice(pos, 1)[0];
    a2.push(element);
  }
  return a2;
};

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}


export {showAlert, createRandomArray, debounce};
