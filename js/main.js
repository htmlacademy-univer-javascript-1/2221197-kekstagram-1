function selectNumberRange(min, max) {
  if (min < 0 || max <= min) {
    throw 'You passed invalid arguments';
  }

  return Math.floor(Math.random() * (max - min)) + min;
}

function checkStringLength(comment, maxLength) {
  return comment.length <= maxLength;
}


selectNumberRange(5, 10);
checkStringLength('Строка', 8);
