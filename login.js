function preventFormSubmit(event) {
    event.preventDefault();
}

window.onload = fillInUsername;

async function fillInUsername() {
    const username = localStorage.getItem('localLogin');
    if (username) {
        setDisplay('notLoggedInControls', 'none');
        setDisplay('loggedInControls', 'flex');
        document.querySelector("#loggedInControls input#username").value = username;
    } else {
        setDisplay('notLoggedInControls', 'flex');
        setDisplay('loggedInControls', 'none');
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
    createUser();
}

function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
      playControlEl.style.display = display;
    }
  }