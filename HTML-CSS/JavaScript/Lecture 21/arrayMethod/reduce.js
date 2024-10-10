var arr = [11,20,33,46,48]

var x = arr.reduce((acc,item,ind,arr)=>{
    // console.log(acc)
    return acc+item;

})

console.log(x)

// Map and filter returns array while reduce returns a single value