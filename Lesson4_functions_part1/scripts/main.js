// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function triangleSquare(a, b, c) {
    const p = (a + b + c)/2;
    const S = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log('S triangle: '+ Math.floor(S));
    return(document.write('S triangle: '+ Math.floor(S)));
}

triangleSquare(40, 20, 40) ;
// 2 - створити функцію яка обчислює та повертає площу круга з радіусом r
function circleSquare(l, r) {
    const pi = 3.14;
    const S = pi * r * r;
    console.log('S circle: ' + S );
    return (document.write('.   S circle: ' + S ));
}

circleSquare(40, 20) ;
// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderSquare(r, h) {
    return(2 * r * h);
}
console.log(`S cylinder:  ${cylinderSquare(20, 30)}`);
document.write(`.  S cylinder:  ${cylinderSquare(20, 30)}`);

// 4 - створити функцію яка приймає масив та виводить кожен його елемент
function array(arr){
    document.write(`<ul>`)
     for(const item of arr) {
          console.log(`<li>${item}</li>`);
         document.write(`<li>${item}</li>`)
     }
    document.write(`</ul>`)
}

let arrayItems = [ 123, 345, 534, 645, 512];
array(arrayItems);

// 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const p = 'Цикл — різновид керівної конструкції у високорівневих мовах програмування, призначений для організації ' +
    'багаторазового виконання набору інструкцій (команд). Також циклом може називатися будь-яка багатократно виконувана ' +
    'послідовність команд, організована будь-яким чином (наприклад, із допомогою умовного переходу).';
function createParagraph(text) {
    console.log(text);
    document.write(`<p>${text}</p>`);
}
createParagraph(p);

//  6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function  easyList(text) {
        document.write(
            `<ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>`);
    }
easyList(p);

function list(text){
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
list(p);


// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(text, repeat){
    document.write(`<ul>`);
    for (let i = 0; i < repeat; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

const p1 = 'Площа поверхні циліндра утворена з площі бічної поверхні і площі основ циліндра. Площа бічної поверхні циліндра.' +
    ' S(біч.) = 2πRH ,. де R — радіус циліндра';

list2(p1, 5);

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrElements = [ 123, true, 'like', 'bad', '', 'a'*3 , undefined, 0, false];
let arrItems = [ {id: 123, name:'duet',age: 22, status: true},  {id: 124, name:'rest', age: 31, status: false},  {id: 125, name:'like', age: 35, status: true}]
function takeArray(arr) {
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

// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного
// об'єкту окремий блок.
function arrObjects(...arr){
    for (const arrElement of arr) {
        console.log(arrElement);
        for (const item of arrElement) {
            document.write(`
            <div style="margin-bottom: 20px">
                 <ul>
                    <li>${item.id}</li>
                    <li>${item.name}</li>
                    <li>${item.age}</li>
                 </ul>
            </div>`);
        }
    }
}
arrObjects(arrItems);

// 10 - створити функцію яка повертає найменьше число з масиву
const arrOfNumbers = [22, 33, 11, 23, 12, 34, 89, 12, 23,12, 9];
function minNum(arrOfNumbers) {
    let min = arrOfNumbers[0];
    console.log(min);
    for (let i = 1; i < arrOfNumbers.length; i++) {
        if (min > arrOfNumbers[i]) {
             min = arrOfNumbers[i];
             console.log(min);
        } else {
            console.log(min);
        }
    }
    console.log("Hайменьше число:" + " " + min);
}
minNum(arrOfNumbers);

// 11 - створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr) {
    let sum = 0;
    for (const arrElement of arr) {
       sum +=  arrElement;
    }
    console.log(sum);
}
sum([4,2,10]);

// 12 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap1(arr, index1, index2){
    let newIndex1 = arr[index2] ;
    let newIndex2 = arr[index1];
    arr[index1] = newIndex1;
    arr[index2] = newIndex2;
    return(arr);
}
console.log(swap1([11,22,33,44],0,1));

function swap2(arr, index1, index2) {
    let newIndex1 = arr[index2] ;
    let newIndex2 = arr[index1];
    let newArr = [];
    for (let i = 0 ; i < arr.length; i++){
        if (i === index1) {
            newArr.push(newIndex1);
        } else if ( i === index2) {
            newArr.push(newIndex2);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(swap2([11,22,33,44],1,3));

// 13 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency){
    let value = 0;
    for (const currencyValue of  currencyValues) {
        if(exchangeCurrency === currencyValue.currency){
         value = sumUAH / currencyValue.value;
         console.log(value);
         document.write(`<h3>${exchangeCurrency}: ${Math.round(value)}</h3>`)
        }
    }
    return value ? Math.round(value) : false;
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'));
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EU'));