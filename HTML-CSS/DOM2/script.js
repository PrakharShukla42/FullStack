const para = document.createElement('p')

para.innerText = 'Hello HTML' 

const container = document.querySelector('.container')
container.appendChild(para)

const body = document.querySelector('body')
body.style.backgroundColor = 'lightblue'
console.log(para)

// Create an ordered list
const ol = document.createElement('ol');

const items = ['First item', 'Second item', 'Third item'];
items.forEach(itemText => {
    const li = document.createElement('li');
    li.innerText = itemText;
    ol.appendChild(li);
});

// Append the ordered list to the container
const cont = document.querySelector('.container');
cont.appendChild(ol);

// Log the ordered list to the console
console.log(ol);
