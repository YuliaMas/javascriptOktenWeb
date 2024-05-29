// 1. - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

let baseUrl1 = 'https://dummyjson.com';
let requestUrl1 = baseUrl1 + '/carts';
fetch(requestUrl1).then(res => res.json()).then(({carts}) => {
    let cartsDiv = document.createElement('div');
    cartsDiv.classList.add('carts');
    for (const cart of carts ) {
        let divCart = document.createElement('div');
        divCart.classList.add('cart');
        for (const cartEl in cart) {
            let p = document.createElement('p');
            p.classList.add('product');
                if (cartEl === 'products') {
                    cart['products'].forEach((products) => {
                        let div = document.createElement('div');
                        let h3 = document.createElement('h3');
                        h3.innerText = products['title'];
                        let ul = document.createElement('ul');
                        for (const product in products) {
                            let li = document.createElement('li');
                            if (product === 'thumbnail'){
                                let img = document.createElement('img');
                                img.src = products[product];
                                li.appendChild(img);
                            } else {
                                li.innerText = product + ":  "+ products[product];
                            }
                            ul.appendChild(li);
                        }
                        div.append(h3, ul);
                        p.appendChild(div);
                        p.classList.add('products');
                    })
                } else {
                    p.innerText = cartEl + cart[cartEl];
                }
            divCart.append(p);
         }
        cartsDiv.appendChild(divCart);
    }
    document.body.appendChild(cartsDiv);
});

//  2.  - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

let baseUrl2 = 'https://dummyjson.com';
let requestUrl2 = baseUrl2 + '/recipes';
fetch(requestUrl2).then(res => res.json()).then(({recipes}) => {
    let div = document.createElement('div');
    div.classList.add('recipes');
    recipes.forEach(recipe => {
        let divCard = document.createElement('div');
        divCard.classList.add('card');
        div.appendChild(divCard);
        let img = document.createElement('img');
        divCard.append(img);
        for (const keyRecipe in recipe) {
            img.src = recipe['image'];
            let p = document.createElement('p');
            if(recipe[keyRecipe] === recipe['name']  ){
                let h3 = document.createElement('h3');
                h3.innerText = "Name: " + recipe['name'].toUpperCase();
                p.append(h3);
            } else if(recipe[keyRecipe] === recipe['ingredients'] ){
                let ul = document.createElement('ul');
                let h3 = document.createElement('h3');
                h3.innerText = 'Ingredients: ';
                for (const ingredient of recipe['ingredients']) {
                    let li = document.createElement('li');
                    li.innerText = ingredient;
                    ul.append(li);
                }
                p.append(h3, ul);
            } else {
                p.innerText =  keyRecipe.slice(0, 1).toUpperCase() + keyRecipe.split(/(?=[A-Z])/).join(' ').toLowerCase().slice(1) + ":  " +  recipe[keyRecipe];
            }
            divCard.append(p);
        }
    })
    document.body.appendChild(div);
});

//  3.   - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

let baseUrl3 = 'http://jsonplaceholder.typicode.com';
let requestUrl3 =  baseUrl3 +  '/users';
function users(response) {
    console.log(response);
    for (const responseEl of response) {
        console.log("id: " + responseEl.id + " , " + "name: " + responseEl.name);
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.innerText = "id: " + responseEl.id + " , " + "name: " + responseEl.name;
        ul.appendChild(li);
        document.body.appendChild(ul);
    }
}
fetch(requestUrl3).then(res => res.json()).then(response => {
    users(response);
});
