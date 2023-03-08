/* Техническое задание
Напишите программу, которая будет находить последний индекс элемента в массиве.
Массив записан в переменную numbers.
Элемент, последний индекс которого надо найти, записан в переменную number.
Создайте переменную lastIndex и записывайте в неё последний индекс числа number. Если числа number в массиве нет, переменная lastIndex должна быть равна -1.
*/


let numbers = [2, 4, 7, 4, 7, 2];
let numberElem = 4;

const lastIndexElement = (arr) => {
    let lastIndex
    for (let i = 0; i < arr.length; i++) {
        lastIndex = arr.lastIndexOf(numberElem)
    }
    return lastIndex

}

console.log(lastIndexElement(numbers));