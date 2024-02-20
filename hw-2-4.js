
//------t-1-------
do {
    console.log('Привет!');
    console.log('Привет!');
} while (false);

//-----t-2-------

    let d = 1;
     while (d <= 5) {
        console.log(d)
       d++
     };

// ------t-3------
let i = 7;
while (i <= 22) {
   console.log(i)
  i++
};


// ------t-4------
let obj= {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
};
for (let key in obj) { 

    alert(`${key} — зарплата  ${obj[key]} долларов`);
  }

// ------t-5------

let a = 1000, n= 0;
while(a >= 50){
    a = a/2;
  n++;
}
console.log("Итераций: " + n +", получилось число " + a);

// ------t-6------

let nextFridayDayNumber = 2

for(let dayNumber = 1; dayNumber <= 31; dayNumber++){
if(dayNumber === nextFridayDayNumber){
alert(`"Сегодня пятница, ${nextFridayDayNumber}-e число. Необходимо подготовить отчет"`)

nextFridayDayNumber += 7
}
}