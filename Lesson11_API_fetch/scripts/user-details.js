const baseUrl3 = 'http://jsonplaceholder.typicode.com';
const requestUrlUsers = baseUrl3 + '/users';
const id = new URLSearchParams(window.location.search).get('id');
const requestUrlUserId = requestUrlUsers + '/' + id;

function getPageAboutUser(user) {
    const div = document.getElementById('user-info');
    const ul = document.createElement('ul');
    for (const item of Object.entries(user)) {
        const li = document.createElement('li');
        if(typeof item[1] === "object"){
            const ul2 = document.createElement('ul');
            for (const itemEl of Object.entries(item[1])) {
                const li2 = document.createElement('li');
                if(typeof itemEl[1] === "object"){
                    const ul3 = document.createElement('ul');
                    for (const itemEl2 of Object.entries(itemEl[1])) {
                        const li3 = document.createElement('li');
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
    div.appendChild(ul);
}

fetch(requestUrlUserId).then(res => res.json()).then((user) => {
    console.log(user);
    getPageAboutUser(user);
});