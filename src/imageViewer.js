import big from './assets/Big.jpg';
import small from './assets/Small.jpg';
import './style/imageViewer.css';

const createImage = (image) => {
    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.classList.add('image-viewer-lorem-image');

    document.body.appendChild(imageElement);
};

createImage(big);
createImage(small);