// Wait for page to fully load
window.addEventListener('DOMContentLoaded', () => {
  
    // Challenge 1: Load dog images
    const picContainer = document.getElementById('dog-image-container');
    fetch('https://dog.ceo/api/breeds/image/random/4')
      .then(resp => resp.json())
      .then(data => {
        data.message.forEach(img => {
          picContainer.innerHTML += `<img src="${img}" style="max-width: 200px; margin: 10px;">`;
        });
      });
  
    // Challenge 2 & 3: Load breeds and handle clicks
    const breedList = document.querySelector('#dog-breeds');
    let allBreeds = [];
    
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(r => r.json())
      .then(info => {
        allBreeds = Object.keys(info.message);
        allBreeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          breedList.appendChild(li);
        });
      });
  
    // Click handler for color change
    breedList.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        e.target.style.color = '#3498db'; // Nice blue color
      }
    });
  
    // Challenge 4: Breed filtering
    const filter = document.getElementById('breed-dropdown');
    filter.addEventListener('change', function() {
      const letter = this.value.toLowerCase();
      
      // Show/hide breeds based on first letter
      document.querySelectorAll('#dog-breeds li').forEach(li => {
        const firstChar = li.textContent[0].toLowerCase();
        li.style.display = firstChar === letter ? 'block' : 'none';
      });
    });
  });