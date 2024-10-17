function check(kalmilneaayega){
    let pr = new Promise((res, rej)=>{
         setTimeout(()=>{
            if(kalmilneaayega){
                res('Mai tumko Party Dunga')
            }
            else{
                rej('Tum aaye hi nhi bhaii')
            }
        },5000)
    })
    return pr;
}

check(true)
    .then((res)=>{
        console.log(res);
    })
    .catch((rej)=>{
        console.log(rej)
    })