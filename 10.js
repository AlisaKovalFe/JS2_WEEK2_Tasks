/*
В этой задаче вам нужно проанализировать данные — вычислить повторы каждого слова.
Создайте функцию getRepeats с одним параметром. В этот параметр будет приходить массив данных.
Функция должна возвращать объект, в котором указано сколько раз каждое слово встречается в массиве.
*/

const getRepeats = (arr) => {
    let result = {}
    for (let key of arr) {
        if (!result[key]) {
            result[key] = 1
        } else {
            result[key]++
        }
    }
    return result

    //reduce
    // return arr.reduce(function (acc, cur) {
    //     !acc[cur] ? acc[cur] = 1 : acc[cur]++
    //     return acc
    // }, {})


}

console.log(getRepeats(["картошка", "картошка", "кофе", "торт", "салат", "кофе", "торт", "картошка"]));