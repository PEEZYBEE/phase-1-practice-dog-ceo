console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    // Fetch dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const imgContainer = document.getElementById("dog-image-container");
    const breedList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
  
    // Fetch images and display them
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        const images = data.message;
        images.forEach((image) => {
          const img = document.createElement("img");
          img.src = image;
          img.alt = "Random Dog";
          imgContainer.appendChild(img);
        });
      })
      .catch((error) => console.error("Error fetching dog images:", error));
  
    // Fetch dog breeds and display them
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breeds = data.message;
        const breedNames = Object.keys(breeds); // Get an array of breed names
  
        breedNames.forEach((breed) => {
          const li = document.createElement("li");
          li.textContent = breed;
          breedList.appendChild(li);
        });
  
        // Filter breeds based on dropdown selection
        breedDropdown.addEventListener("change", (event) => {
          const selectedLetter = event.target.value;
          filterBreeds(selectedLetter, breedNames);
        });
      })
      .catch((error) => console.error("Error fetching dog breeds:", error));
  
    // Function to filter breeds based on selected letter
    function filterBreeds(letter, breedNames) {
      const filteredBreeds = breedNames.filter((breed) => breed.startsWith(letter));
      breedList.innerHTML = ""; // Clear the list
      filteredBreeds.forEach((breed) => {
        const li = document.createElement("li");
        li.textContent = breed;
        breedList.appendChild(li);
      });
    }
  });
  