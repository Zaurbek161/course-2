// //----t-1------------
// let a = prompt (`введите первое число`);
// let b = prompt (`Введите второе число`);

// function numbers(a, b) {
//     return a < b ? a : b;
// }
// console.log(numbers(a, b));

// //-------t-2------------
// function checkNumber() {
//   const number = prompt("Введите число");
//   if (Number(number)) {
//     if (Number(number) % 2 == 0) {
//       return("Число четное");
//     } else {
//       return("Число нечетное");
//     }
//   } else {
//     return("Это не число");
//   }
// }
// console.log(checkNumber()); 

// //----------t-3-------------

// function squareOfTheNumber(inputNumber) {
//     console.log(inputNumber ** 2);
//   }

//   squareOfTheNumber(4);

//   function returnSquareOfTheNumber(inputNumber) {
//     return inputNumber ** 2;
//   }

// //   //------------t-4------------

//   function sayHello() {
//     const age = prompt(`Сколько Вам лет?`);
//     if (age < 0) {
//       alert(`Вы ввели неправильное значение`);
      
//     } else if (age <= 12) {
//       alert(`Привет друг!`);
//     } else {
//       alert(`Добро пожаловать!`);
//     }
//   }

//   sayHello();

// //----------------t-5----------------

function isNumber(a, b) {

    if (
      typeof a !== 'number'||
      typeof b !== 'number'||
      isNaN(a) || isNaN(b)) {
      return 'Одно или оба значения не являются числом'
    }
      return a * b
  }

  console.log(isNumber(``, `нет`));

  console.log(isNumber(2, 4));
  console.log(isNumber('',''));
  console.log(isNumber(null));

// //-------------------t-6-------------

// function cube() {
//     let qwerty = Number(prompt(`Введите число`));
//     if (isNaN (Number(qwerty))){
    
//       return `Переданный параметр не является числом`;
//     } else {
//       return `${qwerty} в кубе равняется ${qwerty ** 3}`
//     }
//   }
//   console.log(cube()); 

// // -------------t-7---------
// let circle1 = { radius: 5, getArea, getPerimeter };
// let circle2 = { radius: 8, getArea, getPerimeter };

// function getArea() {
//   return Math.PI * this.radius ** 2
// }

// function getPerimeter() {
//   return 2 * Math.PI * this.radius
// }

// console.log(circle1.getArea());

// console.log(circle1.getPerimeter());

// console.log(circle2.getArea());

// console.log(circle2.getPerimeter());

// //---------t-8---------
// function monthNumbers () {
//     let number = prompt("Введите номер месяца");
//     if (number === 1 || number === 2 || number === 12) {
//         return "Зима";
//     } else if (number === 3 || number === 4 || number === 5) {
//         return "Весна";
//     } else if (number === 6 || number === 7 || number === 8) {
//         return "Лето";
//     } else if (number === 9 || number === 10 || number === 11) {
//             return "Осень";
//     } else {
//         return "Введен не верный номер месяца";

//     }
// }

// console.log (monthNumbers());



