let arr = [
    {firstName:'Govind',lastName:'Jha',age:25},
    {firstName:'Donald',lastName:'Trump',age:67},
    {firstName:'Vimpol',lastName:'Delhi',age:45},
    {firstName:'Deepika',lastName:'Padukone',age:25}
]


//Question-01
var sameage = arr.filter((item,ind) => {
    if (item.age == 25) {
      return true;
    } 
    else {
      return false;
    }
  }).map(item => `${item.firstName} ${item.lastName}`);
  
console.log(sameage);


//Question-02
var ageCount = arr.reduce((acc, item, ind, arr) => {
    if (acc[item.age]) {
        acc[item.age] += 1;
    } 
    else {
        acc[item.age] = 1;
    }
    return acc;
},{});
console.log(ageCount);