function preventFormSubmit(event) {
    event.preventDefault();
}

function login() {
    let loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || [];

    const usernamePossible = document.getElementById("username");
    const passwordPossible = document.getElementById("password");

    for (let li of loginInfo) {
        if (li.username === usernamePossible.value && li.password === passwordPossible.value) {
            localStorage.setItem("localLogin", usernamePossible.value);
            window.location.href = "home.html";
        }
    }

    alert("Incorrect username or password!");
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

    let loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || [];

    for (let li of loginInfo) {
        if (li.username === usernameEl.value) {
            alert("Username already taken! Please select a new one.");
            return;
        }
    }

    loginInfo.push({username: usernameEl.value, password: passwordEl.value});
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
    localStorage.setItem("localLogin", usernamePossible.value);
    window.location.href = "home.html";
}