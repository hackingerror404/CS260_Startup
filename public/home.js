document.addEventListener('DOMContentLoaded', async() => {
    await loadShelfStats();
    updateUserInfo();
});

function updateUserInfo() {
    let localUsername = localStorage.getItem("localLogin");
    let shelfStatsData = localStorage.getItem("shelfStats");
    
    let shelfStatsObject = JSON.parse(shelfStatsData);
    let shelfStats = new Map(Object.entries(shelfStatsObject || {})); // Handle the case when shelfStatsObject is null or undefined
    let localShelfStats = shelfStats.get(localUsername);

    let numberOfFilms = document.getElementById("numberOfFilms");
    numberOfFilms.textContent = localShelfStats.numberOfFilms;
    let numberOfPhysFilms = document.getElementById("numberOfPhysFilms");
    numberOfPhysFilms.textContent = localShelfStats.numberOfPhysFilms;
    let numberOfDigFilms = document.getElementById("numberOfDigFilms");
    numberOfDigFilms.textContent = localShelfStats.numberOfDigFilms;

    let shelfUsername = document.getElementById("home-username");
    shelfUsername.innerHTML = `<a href="shelf.html">${localUsername}</a>`;

    generateActivity();
}

const movieTitles = ["Arrival", "Back to the Future", "The Batman", "Batman Begins", "Birdman", "Black Swan",
        "Blade Runner 2049", "The Breadwinner", "Casablanca", "Casino Royale", "Castle in the Sky", "The Cat Returns",
        "The Dark Knight", "Despicable Me", "Django Unchained", "Do the Right Thing", "Dune", 
        "Everything Everywhere All at Once", "The Fablemans", "Fantastic Mr Fox", "Get Out"];
const usernames = ["CyberNinja42", "PixelPioneer", "CodeWarriorX", "DigitalExplorer", "TechWhiz123", "ByteMaster99",
        "WebWizard23", "GameGuru77", "VirtualVoyager", "DataDynamo88"];
const formats = ["DVD", "Blu-Ray", "4K Blu-Ray", "Movies Anywhere", "VUDU", "Apple TV", "Prime Video"];
const decisions = ["added", "removed"];

function selectRandArrayEl(stringArray) {
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
  }, 3000);