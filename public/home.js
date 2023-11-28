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
    } else {
        // generateActivity();
    }
}

function appendMsg(cls, from, msg) {
    const chatText = document.querySelector('.live-activity-feed-subdivision');
    let divChildren = chatText.querySelectorAll('p').length; 
}

/*function selectRandArrayEl(stringArray) {
    let randomIndex = Math.floor(Math.random() * stringArray.length);
    return stringArray[randomIndex];
}

function generateActivity() {
    const chatText = document.querySelector('.live-activity-feed-subdivision');
    let divChildren = chatText.querySelectorAll('p').length;

    if (divChildren === 0) {
        chatText.innerHTML = 
            `<p>${selectRandArrayEl(usernames)} ${selectRandArrayEl(decisions)} <em>
            ${selectRandArrayEl(movieTitles)}</em> on ${selectRandArrayEl(formats)}.</p>`;
    }

    else if (divChildren >= 1 && divChildren < 11) {
        const newElement = document.createElement('p');
        newElement.innerHTML = `${selectRandArrayEl(usernames)} ${selectRandArrayEl(decisions)} <em>
            ${selectRandArrayEl(movieTitles)}</em> on ${selectRandArrayEl(formats)}.`;

        chatText.insertBefore(newElement, chatText.firstChild);
        
        if (divChildren === 10) {
            chatText.removeChild(chatText.lastElementChild);
        }
    }

    else {
        chatText.removeChild(chatText.lastElementChild);
        const newElement = document.createElement('p');
        newElement.innerHTML = `${selectRandArrayEl(usernames)} ${selectRandArrayEl(decisions)} <em>
          ${selectRandArrayEl(movieTitles)}</em> on ${selectRandArrayEl(formats)}.`;

        chatText.insertBefore(newElement, chatText.firstChild);
    }
}

setInterval(() => {
    generateActivity();
  }, 3000);*/