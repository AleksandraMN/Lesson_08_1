'use strict';

const getArrayYear = (n, m) => {
   let min = Math.min(n, m);
   let max = Math.max(n, m);
   const arr = [];
   while (min <= max) {
      arr.push(min);
      min++;
   };
   const newArr = arr.filter((i) => {
      return i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0);
   })
   return newArr;
}

console.log(getArrayYear(2050, 2008));
