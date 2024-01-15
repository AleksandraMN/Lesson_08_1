'use strict';

const getRandomArr = (x, n, m) => {
   const newArray = [];
   let min = Math.ceil(Math.min(n, m));
   let max = Math.floor(Math.max(n, m));
   for (let i = 0; i < x; i++) {
      newArray.push(Math.floor(Math.random() * (max - min + 1) + min));
   }
      return newArray;
   } 

console.log(getRandomArr(7, -1, -100));
