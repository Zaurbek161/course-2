//--------------t-1--------------

// const numbs = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i <= numbs.length; i++) {
// 	if (numbs[i] == 10) break;
// 	console.log(numbs[i]);
// }


//-----------t-2---------------------

// const arr = [1, 5, 4, 10, 0, 3]
// const i = arr.indexOf(4)
// console.log(i)

//----------вариант 2 задачи 2 ------
// let arr = [1, 5, 4, 10, 0, 3];

// for (i = 0; i < arr.length; i++) {

//     if (arr[i] === 4) {
//         console.log(i);
//         break;
//     }
// }

//-------------t-3----------------
// const elements = [1, 3, 5, 10, 20];
// console.log(elements.join(' '));

//------------t-4--------------------

// let arr = [
//     [1, 1, 1], 
//     [1, 1, 1], 
//     [1, 1, 1],
// ];
// for (let arrIn of arr) {
//        console.log(arrIn);
// }

//----------------t-5-----------------

// const numbers = [1, 1, 1]
//     numbers.push (2, 2, 2);
//     console.log(numbers);

//--------------t-6-----------------

// const numbers = [9, 8, 7, 'a', 6, 5]
// numbers.sort();
// numbers.splice(5)
// console.log(numbers);

//---------------t-7-----------
// const arr = [9, 8, 7, 6, 5];

// let numb = 0;

// let userNumber = Number(prompt(`Угадай число`));
//     for (let i = 0; i < arr.length; i++) {
//      numb = arr[i]; 
// }
//     if (userNumber === numb) {
//     alert(`Угадал`)
// }   
//     else {
//     alert(`Не угадал`)
// }


//-------------t-8--------------
// const str = 'abcdef';
// const strToArr = str.split('');
// strToArr.reverse();
// const newStr = strToArr.join('');
// console.log(newStr);

//------------t-9-------------

// const nine = [
//     [1, 2, 3,],
//     [4, 5, 6]
// ]
//   const flat = nine.flat()
//   console.log(flat);

//-------t-10-----------
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = 0;
// for (let i = 0; i < array.length-1; i++) {
//   console.log(array[i]+array[i+1]);
// }
// console.log(result);


///примеры
// const arr = [1, 2, 3, 4];
// const result = arr.reduce ((intermediate, value)=> internediate + value);
// console.log(result);


// const array1 = [1, 2, 3, 4, 5];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);


//--------t-11-------
// const num = [2, 4, 6, 8, 10];
// const result = num.map(el =>el **2);
// console.log(result);

//---------t-12-------------

// const words = ['привет', 'пока', 'нормально' ];
// const wordsLenght = (words)=> {return words.map ((word, index) => {
//     return word.length
// })}
// console.log(wordsLenght (words)); 
// ---------t-13-----
// const numNeg = [10, -5, 12, -7, 4];
// const neg = (array) => {return array.filter((el) => el < 0 )   

// }
// console.log(neg(numNeg));

//------------t-14----------
// const array = []

// for(let i = 0; i < 10; i++){
// const floatNumber = Math.random() * 10
// const integerNumber = Math.floor(floatNumber)

// array.push(integerNumber)
// }

// const someFunctionName = (kakoitoArray) => {
// return kakoitoArray.filter((kakoetoChislo) => {
// return kakoetoChislo % 2 === 0
// })
// }

// console.log(array)
// console.log(someFunctionName(array))


//----t-15----
// const array = []

// for(let i = 0; i < 6; i++){
// const floatNumber = Math.random() * 10
// const integerNumber = Math.floor(floatNumber)

// array.push(integerNumber)
// }
// const result = array.reduce ((intermediate, value)=> intermediate + value);
// console.log(result / array.length);
