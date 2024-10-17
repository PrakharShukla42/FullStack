let pr = new Promise((res, rej)=>{
    setTimeout(()=>{
        rej('Promise State Rejected')
        // res('Promise Resolved Data')
    },3000)
})

// console.log(pr)

// var x = fetch('google.com/api')

console.log("Start")

pr 
    .then((res)=>{
        console.log(res)
    })
    .catch((res)=>{
        console.log(res)
    })

console.log('End')