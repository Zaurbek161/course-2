///--------------t-1--------

const people1 = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

function agePeople(people1, people2) {
    return people1.age - people2.age;
}

console.log(people1.sort(agePeople));

///----------------t-2------
function isPositive(num) {
    return num > 0;
}
    function isMale(person) {
        return person.gender === 'male';
    }
    
    function filter(arr, ruleFunction) {
        const filteredArray = [];
    
        for (let i = 0; i < arr.length; i++) {
            if (ruleFunction(arr[i])) {
                filteredArray.push(arr[i]);
            }
        }
    
        return filteredArray;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people2 = [
        { name: 'Глеб', gender: 'male' },
        { name: 'Анна', gender: 'female' },
        { name: 'Олег', gender: 'male' },
        { name: 'Оксана', gender: 'female' }
    ];
    console.log(filter(people2, isMale));

///------------t-3--------

function printCurrentDate() {
    const currentDate = new Date();
    console.log(currentDate);
}
const intervalId = setInterval(printCurrentDate, 3000);
setTimeout(() => {
    clearInterval(intervalId);
    console.log("30 секунд прошло");
}, 30000);

///-----------t-4-------

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

///------------t-5---------

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));

