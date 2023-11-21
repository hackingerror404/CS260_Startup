function preventFormSubmit(event) {
    event.preventDefault();
}

window.onload = fillInUsername;

async function fillInUsername() {
    const username = localStorage.getItem('localLogin');
    if (username) {
        document.getElementById("username").value = username;
    }
}

async function loginUser() {
loginOrCreate(`/api/auth/login`);
}

async function createUser() {
loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
    const usernamePossible = document.getElementById("username").value;
    const passwordPossible = document.getElementById("password").value;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ username: usernamePossible, password: passwordPossible }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    });

    if (response.ok) {
        localStorage.setItem('localLogin', usernamePossible);
        window.location.href = 'home.html';
    } else {
        /*const body = await response.json();
        const modalEl = document.querySelector('#msgModal');
        modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
        const msgModal = new bootstrap.Modal(modalEl, {});
        msgModal.show();*/

        alert("Incorrect username or password!");
    }
}

function play() {
    window.location.href = 'home.html';
}

function logout() {
    localStorage.removeItem('localLogin');
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}

function login() {
    const usernameEl = document.getElementById("username");
    if (usernameEl.value === "") {
        alert("Please select a username!");
        return;
    }

    const passwordEl = document.getElementById("password");
    if (passwordEl.value === "") {
        alert("Please select a password!");
        return;
    }

    /*
    let loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || [];

    const usernamePossible = document.getElementById("username");
    const passwordPossible = document.getElementById("password");

    for (let li of loginInfo) {
        if (li.username === usernamePossible.value && li.password === passwordPossible.value) {
            localStorage.setItem("localLogin", usernamePossible.value);
            window.location.href = "home.html";
        }
    }

    alert("Incorrect username or password!");*/

    loginUser();
}

function register() {
    const usernameEl = document.getElementById("username");
    if (usernameEl.value === "") {
        alert("Please select a username!");
        return;
    }

    const passwordEl = document.getElementById("password");
    if (passwordEl.value === "") {
        alert("Please select a password!");
        return;
    }

    /*let loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || [];

    for (let li of loginInfo) {
        if (li.username === usernameEl.value) {
            alert("Username already taken! Please select a new one.");
            return;
        }
    }

    loginInfo.push({username: usernameEl.value, password: passwordEl.value});
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    localStorage.setItem("localLogin", usernameEl.value);
    window.location.href = "home.html";*/

    createUser();
}