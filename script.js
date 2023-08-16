window.addEventListener('DOMContentLoaded', () => {
  const portfolioContainer = document.getElementById('portfolio');

  // Path to the folder containing your images
  const imagePath = 'images/';

  // List of image filenames
  const imageFiles = ['1.png', '2.png', '3.png']; // Add your image filenames here

  imageFiles.forEach(imageFile => {
    const imageElement = document.createElement('img');
    imageElement.src = imagePath + imageFile;
    imageElement.alt = 'Portfolio Image';
    imageElement.classList.add('portfolio-image');

    const imageLink = document.createElement('a');
    imageLink.href = imagePath + imageFile;
    imageLink.target = '_blank'; // Open link in a new tab
    imageLink.appendChild(imageElement);

    portfolioContainer.appendChild(imageLink);
  });
});
