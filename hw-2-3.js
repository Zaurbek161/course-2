//-----------t-1--------------
    const pass1 = 'пароль'
    let pass2 = prompt('Введите пароль');
 
    if (pass1===pass2 ) {
        alert('Пароль введен верно');
       
    }
   
     if (pass1 !== pass2) {
        alert('Пароль введен неверно.');
       
    }
// -----------t-2---------
let c = 17
c>0 && c<10 ? console.log ('Верно!') : console.log('Неверно!');


// -----------t-3---------
const d = 3;
const e = -2;
d>100 || e>100 ? console.log('Верно!') : console.log('Неверно!');


//--------t-4----------
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));
 

// ---------t-5-------
const monthNumber = 5

switch (monthNumber) {
case 1:
case 2:
case 12:
console.log('Зима')
break;
case 3:
case 4:
case 5:
console.log('Весна')
break;
case 6:
case 7:
case 8:
console.log('Лето')
break;
case 9:
case 10:
case 11:
console.log('Осень')
break;
default:
console.log("Такого месяца не существует")
}

