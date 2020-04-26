import './style/imageViewer.css';

const image = document.createElement('img');
image.src = 'http://lorempixel.com/400/400';
image.classList.add('image-viewer-lorem-image');

document.body.appendChild(image);