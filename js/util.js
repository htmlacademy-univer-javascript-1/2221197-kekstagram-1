/**
 * Возвращает случайное число от min до max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const getRandomNum = (min, max) => {
  if (min < 0 || max <= min) {
    throw "You passed invalid arguments";
  }

  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * @returns {number}
 */
export function getRandomId() {
  // От 25, так как ID от 1 до 25 выделены под пользователей
  return getRandomNum(25, 1000);
}

/**
 *
 * @param {*[]} items
 * @param {*[]} excludes
 */
export function getRandomItemWithoutExcludes(items, excludes) {
  const itemsSet = new Set(items);
  excludes.forEach((exclude) => {
    itemsSet.delete(exclude);
  });
  const itemsWithoutExcludes = Array.from(itemsSet);
  return itemsWithoutExcludes[getRandomNum(0, itemsWithoutExcludes.length)];
}

/**
 *
 * @param {*[]} usedPhotos
 * @returns {number}
 */
export function getRandomPhoto(usedPhotos) {
  let numberPhoto = getRandomNum(1, 25);
  while (numberPhoto in usedPhotos) {
    numberPhoto = getRandomNum(1, 25);
  }
  return numberPhoto;
}

//
// function checkStringLength(comment, maxLength) {
//   return comment.length <= maxLength;
// }
