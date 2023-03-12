/*
Создайте функцию getZippedArrays.
У функции должно быть два параметра. Первый — массив с названиями ключей. Второй — массив со значениями этих ключей.
Функция должна собирать из этих двух массивов объект и возвращать его. Каждому элементу из массива ключей соответствует элемент из массива значений.
*/



const getZippedArrays = (keysArr, valuesArr) => {
    // let result = {}
    // for (let i = 0; i < keysArr.length; i++) {
    //     result[keysArr[i]] = valuesArr[i]
    // }

    // return result

    //reduce 
    return keysArr.reduce(function (acc, key, index) {
        acc[key] = valuesArr[index]
        return acc
    }, {})
}
console.log(getZippedArrays(["color", "height", "weight", "depth"], ["чёрный", "100", "50", "20"]));

