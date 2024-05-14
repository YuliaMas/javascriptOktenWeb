// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//  1   - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const rectangleS = (a,b) => a*b;
console.log(rectangleS(20, 30));

// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
const circleS = (r) => Math.floor(Math.PI*r*r);
console.log(circleS(20));

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinderS = (r, h) => 2 * r * h;
console.log(cylinderS(10,20));

// 4 - створити функцію, яка приймає масив та виводить кожен його елемент
let array = [123, 345, 534, 645, 512];

const allElements = (arr) => {
    console.log(`<ul>`)
    for (const arrElement of arr) {
        console.log(`<li>${arrElement}</li>`);
    }
    console.log(`</ul>`)
}
allElements(array);
// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const p = 'Цикл — різновид керівної конструкції у високорівневих мовах програмування, призначений для організації ' +
    'багаторазового виконання набору інструкцій (команд). Також циклом може називатися будь-яка багатократно виконувана ' +
    'послідовність команд, організована будь-яким чином (наприклад, із допомогою умовного переходу).';
const createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph(p);

// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const list1 = (text) => {
    document.write(
            `<ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`);
}
list1(p);

// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
const list2 = (text, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
list2(p, 2);

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrElements = [ 123, true, 'like', 'bad', '', 'a'*3 , undefined, 0, false];
const takeArray = (arr) => {
    document.write(`<ul>`);
    for (const arrElement of arr) {
        if (!arrElement){
            return null;
        } else {
            document.write(`<li>${arrElement}</li>`);
        }
    }
    document.write(`</ul>`);
}
takeArray(arrElements);

//  9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного
// об'єкту окремий блок.
const arrItems = [ {id: 123, name:'duet',age: 22, status: true},  {id: 124, name:'rest', age: 31, status: false},  {id: 125, name:'like', age: 35, status: true}]
const takeArrObj = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
        document.write(`
            <div style="margin-bottom: 20px"> 
            <ul>`);
        for (const key in arrElement) {
            document.write(`<li>${key} : ${arrElement[key]}</li>`)
        }
         document.write(`</ul></div>`);
    }
}
takeArrObj(arrItems);

// 10 - створити функцію яка повертає найменьше число з масиву
const arrOfNumbers = [22, 33, 11, 23, 12, 34, 89, 12, 23,12, 9, 152, 0 , 12, 1, 16];
const minOfArray = (arr) => {
    let min = arr[0];
    for (const num of arr) {
        if (min > num) {
            min = num;
            }
    }
    return(`min: ${min}`);
}
console.log(minOfArray(arrOfNumbers));
// 11 - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
const sumNumbers = (arr) => {
    let sum= 0;
    arr.map((num) => sum += num)
    return sum;
}
console.log(sumNumbers([1,2,10]));

// 12 - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
const swap = (arr, index1, index2) => {
    const num1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num1;
    return arr;
}
console.log(swap([11,22,33,44],0,1));
// 13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let value = 0;
    for (const currencyValue of  currencyValues) {
        if(exchangeCurrency === currencyValue.currency){
            value = sumUAH / currencyValue.value;
            document.write(`<h3>${exchangeCurrency}: ${Math.round(value)}</h3>`)
        }
    }
    return value ? Math.round(value) : false;
}
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR');
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EU'));