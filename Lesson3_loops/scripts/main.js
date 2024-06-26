// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for ( let i = 0; i < 10; i++){
    let myBlog = `<div style="background-color:powderblue; border:1px solid black; padding: 10px"> I'm Unstoppable today </div>`
    document.write(myBlog);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for ( let i = 1; i <= 10; i++){
    let blokFor = `<div id=${i+1} style="background-color:powderblue; border:1px solid black; padding: 10px"> Have a nice day! ${i}</div>`
    document.write(blokFor);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let j = 20;
while (j > 0){
    const blokWhile = `<div style="background-color:yellow; border:1px solid black; padding: 10px">
                                <h1> Hello, World!</h1>
                               </div>`
    document.write(blokWhile);
    j--;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let k = 1;
while (k <= 20){
    let blokWhile = `<div id=${k} style="background-color:yellow; border:1px solid black; padding: 10px">
                                <h1> Hello, World! ${k}</h1>
                            </div>`
    document.write(blokWhile);
    k++;
}


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
  let listOfItems = ['html','css','javascript','mysql','mongodb','react','angular','node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

document.write(`<ol>`);
for ( let element of listOfItems) {
    document.write(`<li> ${element} </li>`);
}
document.write(`</ol>`);

document.write(`<ul>`);
let i = 0;
while (i < listOfItems.length) {
    console.log(`<li> ${listOfItems[i]} </li>`);
    document.write(`<li> ${listOfItems[i]} </li>`);
    i++;
}
document.write(`</ul>`);
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74.jpg'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
for (const product of products) {
   ` <div class="product-card">`
       document.write(`<h3 class="product-title">${product["title"]}. Price - ${product["price"]}</h3>
                          <img src=${product["image"]} alt="" class="product-image">`);
    `</div>`
}
//
// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

document.write(`<div style="background-color:powderblue; border:1px solid black; padding: 10px; display:flex; justify-content: space-around ">`);
document.write(`<div> <h3>True</h3>`);
for (const user of users) {
    if (user["status"] === true) {
        document.write(`<p>${user.name} ${user.age} ${user.status}</p>`);
    }
}
document.write(`</div>`);
document.write(`<div><h3>False</h3>`);
for (const user of users) {
    if (user["status"] === false) {
        document.write(`<p>${user.name} ${user.age} ${user.status}</p>`);
    }
}
document.write(`</div>`);
document.write(`<div><h3>More 30</h3>`);
for (const user of users) {
    if (user["age"] > 30) {
        document.write(`<p>${user.name} ${user.age} ${user.status}</p>`);
    }
}
document.write(`</div>`);
document.write(`</div>`);