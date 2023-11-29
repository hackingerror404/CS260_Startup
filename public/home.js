document.addEventListener('DOMContentLoaded', async() => {
    await loadShelfStats();
    updateUserInfo();
});

function updateUserInfo() {
    let localUsername = localStorage.getItem("localLogin");
    let localShelfStatsData = localStorage.getItem(localUsername + "_shelfStats");
    let localShelfStats = JSON.parse(localShelfStatsData);

    let numberOfFilms = document.getElementById("numberOfFilms");
    numberOfFilms.textContent = localShelfStats.numberOfFilms;
    let numberOfPhysFilms = document.getElementById("numberOfPhysFilms");
    numberOfPhysFilms.textContent = localShelfStats.numberOfPhysFilms;
    let numberOfDigFilms = document.getElementById("numberOfDigFilms");
    numberOfDigFilms.textContent = localShelfStats.numberOfDigFilms;

    let shelfUsername = document.getElementById("home-username");
    shelfUsername.innerHTML = `<a href="shelf.html">${localUsername}</a>`;

    let chatText = document.querySelector('.live-activity-feed-subdivision');
    if (localUsername == "" || localUsername == null) {
        chatText.innerHTML = "";
    }
}

let socket = configureWebSocket();

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

    // Display that we have opened the webSocket
    socket.onopen = (event) => {
        console.log("Connection opened!");
    };

    return socket;
}

socket.onmessage = async (event) => {
    const text = await event.data.text();
    const chat = JSON.parse(text);
    displayMessage(chat);
};

function displayMessage(chat) {
    const chatText = document.querySelector('.live-activity-feed-subdivision');
    let divChildren = chatText.querySelectorAll('p').length;

    if (divChildren === 0) {
        chatText.innerHTML = `<p>${chat.content}</p>`;
    }

    else if (divChildren >= 1 && divChildren < 11) {
        const newElement = document.createElement('p');
        newElement.innerHTML = `${chat.content}`;

        chatText.insertBefore(newElement, chatText.firstChild);
        
        if (divChildren === 10) {
            chatText.removeChild(chatText.lastElementChild);
        }
    }

    else {
        chatText.removeChild(chatText.lastElementChild);
        const newElement = document.createElement('p');
        newElement.innerHTML = `${chat.content}`;

        chatText.insertBefore(newElement, chatText.firstChild);
    }
}

socket.onclose = (event) => {
    console.log("Connection closed.");
};