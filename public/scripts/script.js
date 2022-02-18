const recipes = document.querySelectorAll('.mostPopularRecipes')

for(let recipe of recipes) {
  recipe.addEventListener('click', function () {
    const recipeId = recipe.getAttribute('id')
    window.location.assign(`/recipe/${recipeId}`)
  })
}