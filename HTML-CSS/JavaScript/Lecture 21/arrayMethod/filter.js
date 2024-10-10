var arr = [11,20,33,46,48]

// arr.filter((items,ind,arr)=>{
//     console.log(arr)
// })


var FilterdArr = arr.filter((items,ind,arr)=>{
    // if(ind%2==0){
    //     return true;
    // }
    if(items>20){
        return true;
    }
})

console.log(FilterdArr)