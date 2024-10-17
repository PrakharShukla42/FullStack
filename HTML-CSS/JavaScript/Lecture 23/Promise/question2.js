function abc(){
    let pr1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
           resolve('promise1 resolved data');
        },5000)
    })
    return pr1;
}
function def(){
    let pr2 = new Promise((resolve, reject) => {
        setTimeout(()=>{
           resolve('promise2 resolved data');
        },10000)
    })
    return pr2
}
function fetchData(){
    console.log('hello')
    abc()
        .then((x)=>{
            console.log(x);
        })
    console.log('world');
    def()
        .then((x)=>{
            console.log(x);
        })
}
console.log('hii');
fetchData();
console.log('end');