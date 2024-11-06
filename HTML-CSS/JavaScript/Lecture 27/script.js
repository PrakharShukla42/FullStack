const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const doublenumber = numbers.map((numbers)=>numbers*2)
console.log(doublenumber)


const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const even = number.filter(number => number % 2 == 0);
console.log(even);


const words = ['apple', 'orange', 'cheery'];
const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
console.log(capitalizedWords);

