'use strict';

const getRandomArr3 = (x, n, m, str) => {
   const newArray = [];
   let min = Math.ceil(Math.min(n, m));
   let max = Math.floor(Math.max(n, m));
   
   while(newArray.length < x) {
      let elem = Math.floor(Math.random() * (max - min + 1) + min);
      if (str === 'even' && elem % 2 === 0) {
         newArray.push(elem);
      }
      if (str === 'odd' && elem % 2 !== 0) {
         newArray.push(elem);
      }
   } 
   return newArray;
}
console.log(getRandomArr3(4, 1, 100, 'odd'));
