//  3.   - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

let baseUrl3 = 'http://jsonplaceholder.typicode.com';
let requestUrlUsers =  baseUrl3 +  '/users';
let id = new URLSearchParams(window.location.search).get('id');
let requestUrlUserId = requestUrlUsers + '/' + id;

function users(response) {
    for (const user of response) {
        let usersDiv = document.getElementById('users');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.innerText = "id: " + user.id + " , " + "name: " + user.name;
        link.id = `userId${user.id}`;
        link.target = '_blanc';
        li.appendChild(link);
        ul.appendChild(li);
        usersDiv.appendChild(ul);
        link.addEventListener('click', ev => {
            ev.preventDefault();
            id = user.id;
            link.href = `./user-details.html?id=${user.id}`;
            window.open(link.href);
        });
    }
}

function getPageAboutUser(user) {
    let ul = document.createElement('ul');
    for (const item of Object.entries(user)) {
        let li = document.createElement('li');
        if(typeof item[1] === "object"){
            let ul2 = document.createElement('ul');
            for (const itemEl of Object.entries(item[1])) {
                let li2 = document.createElement('li');
                if(typeof itemEl[1] === "object"){
                    let ul3 = document.createElement('ul');
                    for (const itemEl2 of Object.entries(itemEl[1])) {
                        let li3 = document.createElement('li');
                        li3.innerText = itemEl2.join(": ");
                        ul3.appendChild(li3);
                    }
                    li2.innerText = itemEl[0];
                    li2.appendChild(ul3);
                } else {
                    li2.innerText = itemEl.join(": ");
                }
                ul2.appendChild(li2);
            }
            li.innerText = item[0];
            li.appendChild(ul2);
        } else {
            li.innerText = item.join(": ");
        }
        ul.appendChild(li);
    }
        document.body.appendChild(ul);
}
fetch(requestUrlUsers).then(res => res.json()).then(response => {
    users(response);
});
fetch(requestUrlUserId).then(res => res.json()).then((user) => {
    getPageAboutUser(user);
});