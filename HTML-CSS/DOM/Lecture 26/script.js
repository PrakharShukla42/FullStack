// const spclPara = document.getElementById('spclPara');
// console.log(spclPara);

const spclPara = document.querySelector('#spclPara');
spclPara.style.color='red';
spclPara.style.backgroundColor='blue';
spclPara.style.padding='20px';
spclPara.style.width='60px';

const para = document.querySelectorAll('.para')
console.log(para)
for (let i of para){
    i.style.border=('2px red solid')
}


const img = document.querySelector('img');
img.style.height='50vh';

//SET ATTRIBUTE
img.setAttribute('src', 'https://tse2.mm.bing.net/th?id=OIP.9EfdRThsp25nAVRZHA5O2wAAAA&pid=Api&P=0&h=180');


//REMOVE ATTRIBUTE
img.removeAttribute('src','https://tse2.mm.bing.net/th?id=OIP.9EfdRThsp25nAVRZHA5O2wAAAA&pid=Api&P=0&h=180')

img.setAttribute('src','https://tse2.mm.bing.net/th?id=OIP.9EfdRThsp25nAVRZHA5O2wAAAA&pid=Api&P=0&h=180')

// GET ATTRIBUTE
var x = img.getAttribute('src');
console.log(x);