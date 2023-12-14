document.addEventListener('DOMContentLoaded', async function() {
    await loadShelfStats();
    await loadShelfContents();
    initSearchBox();
    initButtons();
    initCheckboxes();
});

let movieTitleSelected = false;
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

function initSearchBox() {
    const searchBox = document.getElementById('movie-name');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('search-results');

    searchBox.addEventListener('input', function() {
        movieTitleSelected = false;
        checkButtonConditions();
    });    

    resultsContainer.innerHTML = '';

    async function performSearch() {
        const searchTerm = searchBox.value.toLowerCase();
        resultsContainer.innerHTML = '';
        let searchList = [];

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGJhYzRiNzdjZDE4ZTk1ZTE2N2JjYmZhOWFiOTVhOCIsInN1YiI6IjY1NTJlOGNlZDRmZTA0MDBjNDIwOTYyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sgf913H7RlowL9qd5q-g3pmbbbx6oMLP2LU8XMxgoTY'
            }
        };
            
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`, options);
            const data = await response.json();
            
            searchList = data;
            let searchCounter = 0;

            searchList.results.forEach(movie => {
                const movieYear = movie.release_date.split('-')[0];
                if (movieYear !== '' && searchCounter < 10) {
                    const listItem = document.createElement('li');
                    listItem.textContent = movie.title + " (" + movieYear + ")";
                    listItem.addEventListener('click', function(event) {
                        movieTitleSelected = true;
                        searchBox.value = movie.title;
                        checkButtonConditions();
                        resultsContainer.innerHTML = '';
                        resultsContainer.appendChild(listItem);
                    });
                    resultsContainer.appendChild(listItem);
                    searchCounter++;
                }
            })
        } catch (err) {
        console.error(err);
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
    let localShelfContentData = localStorage.getItem(localUsername + "_shelf");
    let localShelfContent = JSON.parse(localShelfContentData);

    let localShelfStatsData = localStorage.getItem(localUsername + "_shelfStats");
    let localShelfStats = JSON.parse(localShelfStatsData);
    
    addButton.addEventListener('click', async function() {
        const movieObj = createMovieObj();

        await updateShelfContents(true, movieObj, movieObj.movieTitle, localShelfContent);

        await updateShelfStats(true, movieObj, localShelfStats);

        await sendMessage(localUsername, movieObj, true);

        window.location.href = "shelf.html";
    });

    deleteButton.addEventListener('click', async function() {
        const searchBox = document.getElementById('movie-name');
        const movieObj = localShelfContent.shelfContent.find(obj => obj.movieTitle === searchBox.value) || false;

        if (movieObj === false) {
            alert("Please select a movie in your collection!");
        } else {
            await updateShelfContents(false, movieObj, searchBox.value, localShelfContent);

            await updateShelfStats(false, movieObj, localShelfStats);

            await sendMessage(localUsername, movieObj, false);

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

async function sendMessage(localUsername, movieObj, isAdded) {
    let actionString = "";

    if (isAdded) {
        actionString = "added";
    } else {
        actionString = "removed";
    }

    if (movieObj.isDVD) {
        const message = {
            type: 'chat',
            content: `${localUsername} ${actionString} ${movieObj.movieTitle} on DVD.`
        }
        socket.send(JSON.stringify(message));
    }
    if (movieObj.isBluRay) {
        const message = {
            type: 'chat',
            content: `${localUsername} ${actionString} ${movieObj.movieTitle} on Blu-Ray.`
        }
        socket.send(JSON.stringify(message));
    }
    if (movieObj.is4KBluRay) {
        const message = {
            type: 'chat',
            content: `${localUsername} ${actionString} ${movieObj.movieTitle} on 4K Blu-Ray.`
        }
        socket.send(JSON.stringify(message));
    }
    if (movieObj.isMoviesAnywhere) {
        const message = {
            type: 'chat',
            content: `${localUsername} ${actionString} ${movieObj.movieTitle} on Movies Anywhere.`
        }
        socket.send(JSON.stringify(message));
    }
    if (movieObj.isVUDU) {
        const message = {
            type: 'chat',
            content: `${localUsername} ${actionString} ${movieObj.movieTitle} on VUDU.`
        }
        socket.send(JSON.stringify(message));
    }
    if (movieObj.isAppleTV) {
        const message = {
            type: 'chat',
            content: `${localUsername} ${actionString} ${movieObj.movieTitle} on iTunes.`
        }
        socket.send(JSON.stringify(message));
    }
    if (movieObj.isPrimeVideo) {
        const message = {
            type: 'chat',
            content: `${localUsername} ${actionString} ${movieObj.movieTitle} on Prime Video.`
        }
        socket.send(JSON.stringify(message));
    }
    socket.close();
}

function checkIfPhysical() {
    return atLeastOneCheckbox(`id="dvd"`) || atLeastOneCheckbox(`id="bluray"`) || atLeastOneCheckbox(`id="4k_bluray"`);
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