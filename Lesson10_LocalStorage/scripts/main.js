// 1. Стоврити форму з трьома полями для name, lastname, age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт
// в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let first = document.getElementById('first');
let form = document.createElement('form');
let inputName = document.createElement('input');
let inputLastName = document.createElement('input');
let inputAge = document.createElement('input');
let btn = document.createElement('button');
let blockText = document.createElement('div');
let p = document.createElement('p');

btn.innerText = 'Submit';
btn.name = 'submit';
function addFieldsToInput(input, str, type){
   return ([ input.name = str, input.type = type, input.placeholder = ' Enter ' + str]);
}
addFieldsToInput(inputName, 'name' , 'text');
addFieldsToInput(inputLastName, 'lastname', 'text');
addFieldsToInput(inputAge, '[ 0-120 ] age' , 'number');

form.append(inputName, inputLastName, inputAge, btn);
blockText.appendChild(p);
first.append(form, blockText);

// ==========================

form.onsubmit = function(e) {
    e.preventDefault();
    let userObj = {name: inputName.value, lastname: inputLastName.value};
    // p.innerText = JSON.stringify(obj);
    localStorage.setItem('user', JSON.stringify(userObj));
}

//  6. - створити інпут який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту
//     та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
btn.addEventListener('click', (e)=> {
    e.preventDefault();
    if(+inputAge.value && +inputAge.value > 0 && +inputAge.value <= 120) {
        console.log(+inputAge.value);
        inputAge.style.border = '1px solid black';
        const obj= JSON.stringify({name: inputName.value, lastname: inputLastName.value, age: inputAge.value});
        p.style.color = 'black';
        p.innerText = obj;
        console.log(p.outerText);
        console.log(JSON.parse(obj))
        if(+inputAge.value < 18){
            p.style.color = 'red';
            p.innerText = `Warning! You are not an adult! `;
        }
    } else {
        inputAge.style.border = '1px solid red';
    }
});

// ==========================

// 2. є сторінка, на якій є блок, якому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let num = 0;
let h2 = document.querySelector('h2');
window.onload = function (e){
    e.preventDefault();
    // console.log(localStorage.getItem('num'));
    num = Number(sessionStorage.getItem('num')) + 1;
    h2.innerText = num;
    sessionStorage.setItem('num', num);
}

// ==========================

// 3. Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час
// відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про
// відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
window.addEventListener('load', (e) => {
    e.preventDefault();
    let data = new Date();
    console.log(data);
    let date = data.toLocaleDateString();
    console.log(date);
    let time = data.toLocaleTimeString();
    console.log(time);
    let dateTime =  data.toLocaleString();
    console.log(dateTime);

    let objTime = {date, time};
    let dataFromStorageArr = localStorage.getItem('sessions');
    console.log(dataFromStorageArr);
    if(!dataFromStorageArr){
        localStorage.setItem('sessions', JSON.stringify([objTime]));
    }
    if(dataFromStorageArr){
        let sessionsArr = JSON.parse(dataFromStorageArr);
        sessionsArr.push(objTime);
        localStorage.setItem('sessions', JSON.stringify(sessionsArr));
    }
    localStorage.setItem('date', data.toLocaleDateString());
    localStorage.setItem('time', data.toLocaleTimeString());
});

// 5. - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку
// зникав елемент з id="text".

let text = document.getElementById('text');
let removeBtn = document.getElementById('remove');
removeBtn.addEventListener('click', function (e){
    e.preventDefault();
    console.log(text);
    text.classList.toggle('hidden');
})


// 7.  *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let rowInput = document.getElementById('row');
let columnInput = document.getElementById('column');
let tableTextInput = document.getElementById('tableText');
let tableBtn = document.getElementById('tableBtn');
let tableBlock = document.getElementById('table-block')

tableBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let numRow = rowInput.value;
    console.log(numRow);
    let numColumn = columnInput.value;
    let textValue = tableTextInput.value;
    const splitText = textValue.split("/");
    console.log(textValue);
    let table = document.createElement('table');
    const tblBody = document.createElement("tbody");

    for (let i = 0; i < numRow; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < numColumn; j++) {
            let column = document.createElement('td');
            let text = document.createTextNode(splitText[j]);
            column.appendChild(text);
            row.appendChild(column);
        }
        tblBody.appendChild(row);
    }
    table.appendChild(tblBody);
    tableBlock.append(table);

});


// (Додаткова частина для завдання)
// 8.  *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, всередині якого є значення "100грн"
// при перезавантаженні сторінки до значення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

let second = document.getElementById('second');
let h1 = document.createElement('h1');
let sum = 100;
h1.innerText = `${sum}грн`;
second.appendChild(h1);
function updateSum(){
    sum = Number(localStorage.getItem('sum')) + 10;
    h1.innerText = `${sum}грн`;
    localStorage.setItem('sum', sum);
}
window.addEventListener('load', function (e){
    e.preventDefault();
    let newSum =  localStorage.getItem('sum') || sum ;
    localStorage.setItem('sum', newSum);
    h1.innerText =  `${newSum}грн`;
    setTimeout(updateSum, 10000);
})