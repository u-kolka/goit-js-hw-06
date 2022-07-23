const listEl = document.querySelector('#categories');
console.log(`Number of categories: ${listEl.children.length}`);


const itemEl = document.querySelectorAll('.item');
for (const elem of itemEl) {
const titleEl = elem.querySelector('.item h2');
const amountItem = elem.querySelectorAll('.item li');
console.log(`Category: ${titleEl.textContent}
Elements: ${amountItem.length}`);
};

