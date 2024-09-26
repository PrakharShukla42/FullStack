// var x = 10;
// console.log(x);

// console.log(p);

// var p = 20;

// function fun(){
//     var a = 50;
//     console.log(p)
// }
// fun();

// console.log(a);
// console.log('END');
// console.log(p);

// console.log(y);




var x = 10;
x++;
function inner(){
    console.log(x);
    function innermost(){
        console.log(p);
        console.log(x);
        var x = 32;
    }
    innermost();
    var p = 50;
}
inner();


