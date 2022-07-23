const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsCreateList = document.querySelector('#ingredients');

const newEl = ingredients.map((ingredient) => {
  const itemIngredients = document.createElement('li');
  itemIngredients.classList.add("item");
  itemIngredients.textContent = ingredient;

  return itemIngredients;
});


ingredientsCreateList.append(...newEl);
console.log(ingredientsCreateList);