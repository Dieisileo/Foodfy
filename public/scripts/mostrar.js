var btn = document.querySelector('.showOrRide');
var description = document.querySelector('.descriptionRecipes');

btn.addEventListener('click', function() {
  if(description.style.display === 'block') {
    description.style.display = 'none';
  } else {
    description.style.display = 'block';
  }
});