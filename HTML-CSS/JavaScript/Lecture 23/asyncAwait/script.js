// function fun(){
//     return 'Hello';
// }

// var x = fun();
// console.log(x)

let pr = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise Resolved")
    },3000)
})

// pr.then((res)=>{console.log(res)})

console.log('start')

async function fetch(){
    var x;
    console.log('Hello')
    // pr
    // .then((res)=>{
    //     x=res;
    // })
 x=await pr;
 console.log(x);
 console.log('World')
}

fetch()

console.log('End')