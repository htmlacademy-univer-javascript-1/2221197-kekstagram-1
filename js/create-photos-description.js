import {getRandomNum, getRandomId, getRandomItemWithoutExcludes, getRandomPhoto} from './util.js';
import {DESCRIPTION, MESSAGE, NAMES} from './consts.js';

/**
 * @typedef {Object} Comment
 * @property {number} id
 * @property {string} avatar
 * @property {string[]} message
 * @property {string} name
 */

/**
 * @param {string[]} comments
 * @param {string[]} usedNames
 * @param {string[]} names
 * @returns {Comment[]}
 */
function getRandomComments(comments, usedNames, names) {
  const result = [];
  const countComments = getRandomNum(0, comments.length);
  for (let i = 0; i < countComments; i++) {
    const id = getRandomId();
    const userName = getRandomItemWithoutExcludes(names, usedNames);
    usedNames[i] = userName;
    result[i] = {
      id,
      avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
      message: comments[getRandomNum(0, comments.length)],
      name: userName
    };
  }
  return result;
}

/**
 * @typedef {Object} photos
 * @property {number} id
 * @property {string} url
 * @property {string[]} description
 * @property {number} likes
 * @property {Comment[]} comments
 * @property {string} name
 */
/**
 * @param {string[]} names
 * @param {string[]} usedNames
 * @param {string[]} description
 * @param {string[]} message
 * @returns {*[]}
 */
function getPhotosDescriptions(names, usedNames, description, message) {
  const photos = [];
  const usedPhotos = [];
  for (let i = 0; i < 25; i++) {
    const ID = getRandomNum(1, 25);
    const numberPhoto = getRandomPhoto(usedPhotos);
    const nameUser = getRandomItemWithoutExcludes(names, usedNames);
    usedNames[i] = nameUser;
    const LIKES = getRandomNum(15, 200);
    usedPhotos[i] = numberPhoto;
    photos[i] = {
      id: ID,
      url: `photos/${numberPhoto}.jpg`,
      description: description[getRandomNum(0, description.length)],
      likes: LIKES,
      comments: getRandomComments(message, usedNames, names),
      name: nameUser
    };
  }
  return photos;
}

function generatePhotosData() {
  const USED_NAMES = [];
  return getPhotosDescriptions(NAMES, USED_NAMES, DESCRIPTION, MESSAGE);
}

export {generatePhotosData};
