"use strict"
// 1. Задача про обчислення різниці часу

/*function durationBetweenDates(startDate, endDate, dimension) {
   const startDateObj = new Date(startDate); // конвертуємо рядки початкової та кінцевої дат в об'єкти типу Date
   const endDateObj = new Date(endDate);

   const timeDifference = endDateObj - startDateObj; // різниця між кінцевою та початковою датою в мілісекундах

   if (dimension === 'seconds') {
      return timeDifference / 1000 + 'seconds';
   } else if (dimension === 'days') {
      const millisecondsInADay = 24 * 60 * 60 * 1000;
      return Math.abs(timeDifference / millisecondsInADay) + 'days';
   } else if (dimension === 'hours') {
      const millisecondsInAnHour = 60 * 60 * 1000;
      return Math.abs(timeDifference / millisecondsInAnHour) + 'hours';
   } else if (dimension === 'minutes') {
      const millisecondsInAMinute = 60 * 1000;
      return Math.abs(timeDifference / millisecondsInAMinute) + 'minutes';
   }
}
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); // поверне: '86400 seconds'
console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); // поверне: '362 days'
console.log(durationBetweenDates('12 Jul 1998', '21 Jul 2023', 'days')); // поверне: '9140 days'
console.log(durationBetweenDates('12 Jul 1998', '21 Jul 2023', 'hours')); // поверне: '219360 hours'
console.log(durationBetweenDates('12 Jul 1998', '21 Jul 2023', 'minutes')); // поверне: '13161600 minutes'
*/


// 2. Задача про перетворення об'єкту

/* const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
  Pineapple: '55.589',
};

function optimizer(data) {
  const updatedData = {};

  // використовуємо метод Object.keys() для отримання масиву ключів з об'єкту data
  // перебираємо масив ключів за допомогою методу forEach() і виконуємо дії для кожного ключа
  Object.keys(data).forEach(key => {
     const lowerCaseKey = key.toLowerCase(); // перетворюємо ключ у нижній регістр
     const roundedPrice = Number(data[key]).toFixed(2); // округлюємо значення до двох знаків після коми

     updatedData[lowerCaseKey] = roundedPrice;
  });

  return updatedData;
}
let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
*/

// 3. Задача про рекурсію

/*function recursiveOddSumTo(number) {
  if (number <= 0) {
     // якщо число менше 0 або дорівнює 0, повертаємо 0, тобто зупиняємо рекурсію
     return 0;
  } else if (number % 2 === 0) {
     // якщо число парне, викликаємо функцію для попереднього непарного числа
     return recursiveOddSumTo(number - 1);
  } else {
     // якщо число непарне, викликаємо функцію для попереднього непарного числа та додаємо до нього саме число
     return recursiveOddSumTo(number - 2) + number;
  }
}

console.log(recursiveOddSumTo(1)); // 1
console.log(recursiveOddSumTo(9)); // 9+7+5+3+1=25
console.log(recursiveOddSumTo(18)); // 17+15+13+11+9+7+5+3+1=81
*/

// 4. Задача про ітерацію

/* function iterativeOddSumTo(number) {
   let sum = 0;
   for (let i = 1; i <= number; i += 2) {
      sum += i;
   }
   return sum;
}

console.log(iterativeOddSumTo(1)); // 1, так як єдине непарне число від 1 до 1 - це саме 1
console.log(iterativeOddSumTo(10)); // 25, сума непарних чисел від 1 до 10: 1 + 3 + 5 + 7 + 9 = 25
console.log(iterativeOddSumTo(11)); // 36, сума непарних чисел від 1 до 11: 1 + 3 + 5 + 7 + 9 + 11 = 36
*/