"use strict";
let allNumbers = [],
    evenNumbers = [],
    oddNumbers = [];

let sumEvenNum, sumOddNum;

function checkPromocode(promocode) {
  promocode = (prompt("Введите Ваш промокод")).split();

  for (let i = 0; i = promocode; i++) {
    allNumbers.push(promocode % 10);
    promocode = parseInt(promocode / 10);
  }
  allNumbers.reverse();

  if (allNumbers.every(item => typeof (item) === 'number') && allNumbers.length == 8) {

    allNumbers.forEach(function(item) {
      if (item % 2 === 0) {
        evenNumbers.push(item);
      } else {
        oddNumbers.push(item);
      }
    });

    sumEvenNum = evenNumbers.reduce((accumulator, current) => accumulator + current);
    sumOddNum = oddNumbers.reduce((accumulator, current) => accumulator + current);

    if (sumEvenNum > sumOddNum && oddNumbers.length == 4 && oddNumbers[0] < oddNumbers[1] && oddNumbers[2] < oddNumbers[3]) {
      alert("Ваш бонусный счет пополнен на 2000 грн");
    } else if (sumEvenNum > sumOddNum && oddNumbers.length == 4) {
      alert("Ваш бонусный счет пополнен на 1000 грн");
    } else if (sumEvenNum > sumOddNum) {
      alert("Ваш бонусный счет пополнен на 100 грн");
    } else {
      alert("Промокод не действителен");
    }
  } else {
    alert("Промокод введен некоректно, обновите страницу и повторите попытку");
  }
}

checkPromocode();