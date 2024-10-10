function fun(y) {
    console.log('inside fun function')
    y()
}

var x = ()=> {
    console.log('inside x function')
}

fun(x);