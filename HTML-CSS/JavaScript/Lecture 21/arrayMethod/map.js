var arr = [10,20,30,44,55,61];

arr.map((item , index , array)=>{
    // console.log(item)
    // console.log(index)
    // console.log(array)
})

var y = arr.map((item,ind,arr)=>{
    // return 20;
    // return ind;
    // return ind+5;
    return item*2;

})

console.log(y)
console.log('After My Map Function..')

Array.prototype.mymap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result[i] = callback(this[i]);
    }
    return result;
};

// var x = arr.mymap((item,index=0,arr)=>{
    
//     item = arr[index];
//     index++;
//     console.log(item,index,arr);
// })


let z = arr.mymap((item, ind, arr) => {
    return item * 2;
});

console.log(z); 


// LET CONS













var y = arr.mymap((item,ind,arr)=>{
    return item*2;
})
