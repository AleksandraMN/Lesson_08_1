'use strict';

const getRandomArray = (x) => {
   const newArray = [];
   const min = Math.ceil(1);
   const max = Math.floor(100);
   for (let i = 0; i < x; i++) {
      newArray.push(Math.floor(Math.random() * (max - min + 1) + min));
   }
      return newArray;
   } 

console.log(getRandomArray(7));




