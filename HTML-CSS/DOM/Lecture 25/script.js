// Method 01
const head = document.getElementById('heading')
head.style.border = '2px solid black'
head.style.color = 'green'
console.log(head)

// Method 02
const favCity = document.getElementsByClassName('fav')
for(let city of favCity){
    city.style.border='2px solid yellowgreen'
}
console.log(favCity)

// Method 03
const element = document.getElementsByTagName('p')
console.log(element)

const x = document.querySelector('#heading')
console.log(x)