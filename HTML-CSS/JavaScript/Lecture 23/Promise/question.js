let pr1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1 resolved data');
    }, 5000); 
});

let pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise2 resolved data');
    }, 10000); 
});


function fetchData(){
    console.log('Hello')
    pr1
        .then((x)=>{
            console.log(x);
        })
    
        console.log('world');

        pr2
            .then((x)=>{
                console.log(x);
            })
}

console.log('Hii')
fetchData();
console.log('End')