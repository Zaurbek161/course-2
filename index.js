//-----------t-1--------------
let a = 10;
alert(a);
a = 20;
alert(a);

//-----------t-2--------------
const yearFirstIPhone = 2007;
alert(yearFirstIPhone);

//--------------t-3-----------
const nameCreatorJavaScript = 'Брендан Эйх';
alert(nameCreatorJavaScript);

//---------------t-4------------
let number1 = 10;
let number2 = 2;
let summa = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient = number1 / number2;
alert("Сумма number1 и number2 равна " + summa + ";\n" + "Разность number1 и number2 равна " + difference + ";\n" +
"Произведение number1 и number2 равно " + product + ";\n" + "Кратное при делении number1 на number2 равно" +
quotient);

 //-------------t-5-----------
let result = 2 ** 5;
alert(result);

//--------------t-6---------------
a = 9;
let b = 2;
alert(a % b);

//-------------t-7--------------
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//-------------t-8-------------
let age = prompt('Сколько вам лет?');
alert(age);

//------------t-9.0-------------
let user = {
name: "Заур",
age: 30,
usAdmin: true};

//-----------t-9.1--------------
user['city of residence'] = 'Murmansk region';

//-----------t-9.2--------------
user['age'] = 8;

//-----------t-9.3--------------
delete user['city of residence'];

//------------t-9.4-----------
let info = prompt('Какую информацию хотите узнать о пользователе?', 'name');
alert(user[info]);

//-----------t-10-----------
let whatsYourName = prompt('Введите Ваше имя');
alert('Привет, ' + whatsYourName.toUpperCase() + '!');