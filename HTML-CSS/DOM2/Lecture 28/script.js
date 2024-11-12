const head = document.querySelector('#head')

head.style.border = '2px solid black'
head.style.color = 'red'

head.addEventListener('click', (e)=>{
    console.log(e.target);
    e.target.style.color='yellowgreen';
    e.target.style.backgroundColor='blue';

})


const btn = document.getElementById('btn');
btn.addEventListener('click',(e)=>{
    const body = document.querySelector('body');
    body.classList.toggle('mode');
    if(e.target.innerText=="Dark Mode"){
        e.target.innerText="Light Mode";
    }
    else{
        e.target.innerText="Dark Mode";
    }

})