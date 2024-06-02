//  3.   - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

function getUsers(response) {
    for (const user of response) {
        let usersDiv = document.getElementById('users');
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let link = document.createElement('a');
        link.innerText = "id: " + user.id + " , " + "name: " + user.name;
        link.id = user.id;
        li.appendChild(link);
        ul.appendChild(li);
        usersDiv.appendChild(ul);
        link.addEventListener('click', ev => {
            ev.preventDefault();
            const id = user.id;
            link.href = `./user-details.html?id=${id}`;
            window.open(link.href);
        });
    }
}
fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json()).then(response => {
    getUsers(response);
});
