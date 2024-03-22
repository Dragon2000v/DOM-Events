const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Element: ${category.lastElementChild.children.length}`);
});