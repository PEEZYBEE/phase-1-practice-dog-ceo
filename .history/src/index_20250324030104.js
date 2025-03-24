// Wait till page loads
window.addEventListener('DOMContentLoaded', function() {

    // Part 1 - Dog pics
    let dogPicsDiv = document.querySelector('#dog-image-container');
    
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(response) {
      return response.json();
    })
    .then(function(picData) {
      picData.message.forEach(function(imgLink) {
        dogPicsDiv.innerHTML += `<img src="${imgLink}" class="dog-pic">`;
      });
    });
  
    // Part 2 - Breed list
    let breedUl = document.getElementById('dog-breeds');
    let dogBreeds = [];
    
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(breedData => {
      dogBreeds = Object.keys(breedData.message);
      dogBreeds.forEach(function(breed) {
        let newLi = document.createElement('li');
        newLi.textContent = breed;
        breedUl.appendChild(newLi);
      });
    });
  
    // Click handler for blue color
    breedUl.addEventListener('click', function(e) {
      if(e.target.tagName === 'LI') {
        e.target.style.color = '#0000ff';
      }
    });
  
    // Breed filter
    let filterSelect = document.querySelector('#breed-dropdown');
    filterSelect.onchange = function() {
      let selected = this.value.toLowerCase();
      
      Array.from(breedUl.children).forEach(li => {
        let firstChar = li.textContent[0].toLowerCase();
        li.style.display = firstChar === selected ? 'list-item' : 'none';
      });
    };
  
  });