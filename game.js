//------времена года-------------

// function monthNumbers () {
//     let a = Number(prompt("Введите номер месяца"));
//     const number = Number (a)
//     if (number === 1 || number === 2 || number === 12) {
//         alert ("Зима");
//     } else if (number === 3 || number === 4 || number === 5) {
//         alert ("Весна");
//     } else if (number === 6 || number === 7 || number === 8) {
//         alert ("Лето");
//     } else if (number === 9 || number === 10 || number === 11) {
//             alert ("Осень");
//     } else {
//         alert ("Введен не верный номер месяца");

//     }
// }

// console.log(monthNumbers());



//---------Запомни слова------
function memorization() {
    const wordsToRemember = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    alert('Прочитай и запомни данные слова:\n\nЯблоко, Груша, Дыня, Виноград, Персик, Апельсин, Мандарин\n\nЕсли запомнил нажимай OK');

    let checkingWords = prompt('А теперь напряги память и напиши, что запомнил(а) через пробел');

    if (checkingWords === null || checkingWords.trim() === '') {
        alert('Ты не ввел(а) ни одного слова. Попробуй еще раз!');
        return;
    }

    const userWords = new Set(checkingWords.toLowerCase().split(' '));

    const correctOrder = [...wordsToRemember].every(word => userWords.has(word.toLowerCase()));

    if (correctOrder) {
        alert('Молодец! Правильно!');
    } else {
        alert('Попробуй ещё раз');
    }
}