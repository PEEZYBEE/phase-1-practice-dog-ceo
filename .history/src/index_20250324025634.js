// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
  
    // Dog pictures section
    let imgDiv = document.getElementById('dog-image-container');
    fetch('https://dog.ceo/api/breeds/image/random/4')
      .then(res => res.json())
      .then(info => {
        info.message.forEach(pic => {
          imgDiv.innerHTML += `<img src="${pic}" alt="cute doggo">`;
        });
      });
  
    // Breed list stuff
    let breedList = document.getElementById('dog-breeds');
    let allBreeds = [];
    
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        allBreeds = Object.keys(data.message);
        allBreeds.forEach(breed => {
          let li = document.createElement('li');
          li.textContent = breed;
          breedList.append(li);
        });
      });
  
    // Click color change
    breedList.addEventListener('click', function(e) {
      if(e.target.tagName === 'LI') {
        e.target.style.color = 'blue';
      }
    });
  
    // Filter dropdown
    let selectMenu = document.getElementById('breed-dropdown');
    selectMenu.addEventListener('change', function() {
      let letter = this.value.toLowerCase();
      
      Array.from(breedList.children).forEach(li => {
        let firstLetter = li.textContent[0].toLowerCase();
        li.style.display = (firstLetter === letter) ? '' : 'none';
      });
    });
  });