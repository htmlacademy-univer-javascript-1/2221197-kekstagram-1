import {generatePhotosData as generatePhoto} from './create-photos-description.js';

const pictureTemplate = document
  .querySelector("#picture")
  .content.querySelector(".picture");
const picturesElements = document.querySelector(".pictures");
const pictures = generatePhoto();

pictures.forEach((picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  const pictureDescription = pictureElement.querySelector('.picture__info');
  pictureDescription.querySelector('.picture__comments').textContent = (picture.description).length;
  pictureDescription.querySelector('.picture__likes').textContent = picture.likes;
  picturesElements.appendChild(pictureElement);
});
