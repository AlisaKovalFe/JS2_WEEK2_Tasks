/* Техническое задание
Напиши программу, которая определяет сколько цифр в одном числе.
Само число записано в переменную number.
Найди количество цифр в этом числе и запиши результат в переменную quantity.
*/

let number = 123;
let quantity = 0;

const findNumber = (number) => {
    quantity = number.toString().length
    return quantity
}

console.log(findNumber(number));