// //----------t-1-------------
let text = 'js';
console.log(text.toUpperCase());

//----------t-2-------------

const someFunc = (arrayOfString, prefix) => {
  return arrayOfString.filter((element) => {
    const pref = prefix.toLowerCase();
    const el = element.toLowerCase();

    return el.startsWith(pref);
  });
};
console.log(
    someFunc(["QweRty123", "qwertyytrewq", "qwer", "qwerty00"], "qweRtY"))


//-----------------t-3-----------------
let number = 32.58884;
let roundedDown = Math.floor(number);
let rounderUp = Math.ceil(number);
let rounderNearest = Math.round(number);
console.log('До меньшего целого:', roundedDown);
console.log('До большего целого', rounderUp);
console.log('До ближайщего целого', rounderNearest);

//-------------t-4----------------
let numMaxMin = [52, 53, 49, 77, 21, 32];
let max = Math.max(...numMaxMin);
let min = Math.min(...numMaxMin);
console.log('Максимальное значение:', max);
console.log('Минимальное значение:', min);

//-------------t-5-------------
console.log(Math.round(Math.random() * 10 + 1));

//-------------t-6-------------
function generateRandomArray(num) {
    if (typeof num !== 'number' || !Number.isInteger(num) || num <= 0) {
        return "Введите положительное целое число";
    }
    const arrayLength = num / 2;
    const randomArray = [];
    for (let i = 0; i < arrayLength; i++) {
        randomArray.push(Math.floor(Math.random() * num));
    }
    return randomArray;
}

const inputNumber = 20;
const resultArray = generateRandomArray(inputNumber);
console.log(resultArray);

//--------------t-7---------------
function getRandomNumberInRange(x, y){
    if (!Number.isInteger(x)|| !Number.isInteger(y)){
        return "Введите целые числа";
    }
    if (x > y){
        [x, y] = [y, x];
    }
    const randomNumber = Math.floor(Math.random() * (y - x + 1)) + x;
    return randomNumber;
}
const upshot = getRandomNumberInRange(12, 45);
console.log(upshot);

//---------------t-8--------------
let actualDate = new Date();
console.log(actualDate);

//----------t-9----------------
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
let futureDate = currentDate.toLocaleDateString();

console.log("Дата, которая наступит через 73 дня после текущей:", futureDate);

//----------t-10--------------
function formatDate(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const weekday = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = weekday[date.getDay()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const dateString = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}.`;
    const timeString = `Время: ${hours}:${minutes}:${seconds}`;

    return dateString + '\n' + timeString;
}

const presentDay = new Date();
const formattedDate = formatDate(presentDay);
console.log(formattedDate);
