document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedDropdown = document.getElementById('breed-dropdown');
    const dogImageContainer = document.getElementById('dog-image-container');
    const dogBreedsList = document.getElementById('dog-breeds');
  
    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const images = data.message;
        images.forEach(imageUrl => {
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imgElement.alt = 'Random Dog';
          dogImageContainer.appendChild(imgElement);
        });
      });
  
    // Challenge 2: Fetch and display dog breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const breedLi = document.createElement('li');
          breedLi.textContent = breed;
          breedLi.addEventListener('click', () => {
            breedLi.style.color = 'blue'; // Change color on click
          });
          dogBreedsList.appendChild(breedLi);
        });
      });
  
    // Challenge 3: Filter breeds based on selected letter
    breedDropdown.addEventListener('change', (event) => {
      const selectedLetter = event.target.value;
      const breedItems = dogBreedsList.getElementsByTagName('li');
  
      Array.from(breedItems).forEach(item => {
        if (item.textContent[0].toLowerCase() === selectedLetter) {
          item.style.display = 'block'; // Show the breed
        } else {
          item.style.display = 'none'; // Hide the breed
        }
      });
    });
  });
  