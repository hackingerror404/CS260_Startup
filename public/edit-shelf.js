document.addEventListener('DOMContentLoaded', function() {
    //loadShelfStats();
    initSearchBox();
    initButtons();
    initCheckboxes();
});

let movieTitleSelected = false;

const movieTitles = ["Arrival", "Back to the Future", "The Batman", "Batman Begins", "Birdman", "Black Swan",
        "Blade Runner 2049", "The Breadwinner", "Casablanca", "Casino Royale", "Castle in the Sky", "The Cat Returns",
        "The Dark Knight", "Despicable Me", "Django Unchained", "Do the Right Thing", "Dune", 
        "Everything Everywhere All at Once", "The Fablemans", "Fantastic Mr Fox", "Get Out"];

function initSearchBox() {
    const searchBox = document.getElementById('movie-name');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('search-results');

    searchBox.addEventListener('input', function() {
        movieTitleSelected = false;
        checkButtonConditions();
    });    

    resultsContainer.innerHTML = '';

    function performSearch() {
        const searchTerm = searchBox.value.toLowerCase();
        resultsContainer.innerHTML = '';

        if (searchTerm.trim() !== '') {
            const filteredResults = movieTitles.filter(item => item.toLowerCase().includes(searchTerm));
            filteredResults.forEach(result => {
                const listItem = document.createElement('li');
                listItem.textContent = result;
                listItem.addEventListener('click', function(event) {
                    movieTitleSelected = true;
                    searchBox.value = result;
                    checkButtonConditions();
                    performSearch();
                });
                resultsContainer.appendChild(listItem);
            });
        }
    }

    searchButton.addEventListener('click', performSearch);

    // Optionally, you can also trigger the search when the user presses Enter in the input field
    searchBox.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
}

function checkButtonConditions() {
    const addButton = document.getElementById("add-button");
    const deleteButton = document.getElementById("delete-button");
    if (movieTitleSelected) {
        deleteButton.removeAttribute('disabled');
        if (atLeastOneCheckbox(`name="formatCheck"`)) {
            addButton.removeAttribute('disabled');
        } else {
            addButton.setAttribute('disabled', true);
        }
    } else {
        addButton.setAttribute('disabled', true);
        deleteButton.setAttribute('disabled', true);
    } 
}

function atLeastOneCheckbox(name) {
    const checkboxes = document.querySelectorAll(`input[${name}]:checked`);
    return checkboxes.length > 0;
}

function preventFormSubmit(event) {
    event.preventDefault();
}

function initButtons() {
    const addButton = document.getElementById("add-button");
    addButton.setAttribute('disabled', true);
    const deleteButton = document.getElementById("delete-button");
    deleteButton.setAttribute('disabled', true);

    let localUsername = localStorage.getItem("localLogin");
    let localUsernameShelf = localStorage.getItem("localLogin") + "_shelf";
    let shelfList = JSON.parse(localStorage.getItem(localUsernameShelf)) || false;

    let shelfStatsData = localStorage.getItem("shelfStats");
    let shelfStatsObject = JSON.parse(shelfStatsData);
    let shelfStats = new Map(Object.entries(shelfStatsObject || {})); // Handle the case when shelfStatsObject is null or undefined
    
    addButton.addEventListener('click', function() {
        const movieObj = createMovieObj();
        if (shelfList == false) {
            shelfList = [];
        }
        shelfList.push(movieObj);
        shelfList.sort((a, b) => a.movieTitle.localeCompare(b.movieTitle));
        localStorage.setItem(localUsernameShelf, JSON.stringify(shelfList));

        updateShelfStats(true, movieObj, shelfStats);

        window.location.href = "shelf.html";
    });

    deleteButton.addEventListener('click', function() {
        const searchBox = document.getElementById('movie-name');
        const movieObj = shelfList.find(obj => obj.movieTitle === searchBox.value) || false;

        if (movieObj === false) {
            alert("Please select a movie in your collection!");
        } else {
            shelfList = shelfList.filter(obj => obj.movieTitle !== searchBox.value);
            shelfList.sort((a, b) => a.movieTitle.localeCompare(b.movieTitle));
            localStorage.setItem(localUsernameShelf, JSON.stringify(shelfList));

            updateShelfStats(false, movieObj, shelfStats);

            window.location.href = "shelf.html";
        }        
    })
}

function createMovieObj() {
    const searchBox = document.getElementById('movie-name');
    const dvdCheck = document.getElementById('dvd');
    const blurayCheck = document.getElementById('bluray');
    const bluray4kCheck = document.getElementById('4k_bluray');
    const moviesAnywhereCheck = document.getElementById('moviesAnywhere');
    const vuduCheck = document.getElementById('vudu');
    const primeVideoCheck = document.getElementById('primeVideo');
    const appleTVCheck = document.getElementById('appleTV');

    const movieToAdd = {
        movieTitle: searchBox.value,
        isPhysical: checkIfPhysical(),
        isDigital: checkIfDigital(),
        isDVD: dvdCheck.checked,
        isBluRay: blurayCheck.checked,
        is4KBluRay: bluray4kCheck.checked,
        isMoviesAnywhere: moviesAnywhereCheck.checked,
        isVUDU: vuduCheck.checked,
        isAppleTV: appleTVCheck.checked,
        isPrimeVideo: primeVideoCheck.checked
    };

    return movieToAdd;
}

function checkIfPhysical() {
    return atLeastOneCheckbox(`id="dvd"`) || atLeastOneCheckbox(`id="bluray"` || atLeastOneCheckbox(`id="4k_bluray"`));
}

function checkIfDigital() {
    return atLeastOneCheckbox(`id="moviesAnywhere"`) || atLeastOneCheckbox(`id="vudu"`) ||
    atLeastOneCheckbox(`id="primeVideo"`) || atLeastOneCheckbox(`id="appleTV"`);
}

function initCheckboxes() {
    const checkboxes = document.querySelectorAll(`input[name="formatCheck"]`);
    for (let box of checkboxes) {
        box.addEventListener('change', function(event) {
            checkButtonConditions();
        });
    }
}
