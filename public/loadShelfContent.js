async function loadShelfStats() {
    let localUsername = localStorage.getItem("localLogin");
    let localShelfStats = new Object();
    try {
        let response = await fetch(`/api/shelfStats/${localUsername}`);
        if(!response.ok) throw new Error('Fetch failed');
        let data = await response.json();
        localShelfStats = data;
        
        if (localShelfStats === undefined) {
            localShelfStats = {
                "numberOfFilms": 0,
                "numberOfPhysFilms": 0,
                "numberOfDigFilms": 0,
            }
        }
        
        localStorage.setItem("shelfStats", JSON.stringify(localShelfStats));
    } catch (error) {
        console.error('Error:', error);

        let localShelfStats = JSON.parse(localStorage.getItem("shelfStats")) || false;

        if (localShelfStats === false) {
            localShelfStats = {
                "numberOfFilms": 0,
                "numberOfPhysFilms": 0,
                "numberOfDigFilms": 0,
            }
            localStorage.setItem("shelfStats", JSON.stringify(localShelfStats));
        }
    }
}
async function updateShelfStats(isAdding, movieObj, localShelfStats) {
    let localUsername = localStorage.getItem("localLogin");

    if (isAdding) {
        localShelfStats = addItemToShelfStats(movieObj, localShelfStats);
    } else {
        localShelfStats = removeItemFromShelfStats(movieObj, localShelfStats);
    }

    try {
        const response = await fetch(`/api/shelfStats/${localUsername}`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(localShelfStats),
        });
    
        const shelfStatsContent = await response.json();

        if (!response.ok) throw new Error('Fetch failed');

        localStorage.setItem("shelfStats", JSON.stringify(shelfStatsContent));
        
    } catch (error) {
        console.error('Fetch failed:', error);
        localStorage.setItem("shelfStats", localShelfStats);
    }
}

function addItemToShelfStats(movieObj, localShelfStats) {
    localShelfStats.numberOfFilms++;
    if (movieObj.isPhysical) {
        localShelfStats.numberOfPhysFilms++;
    }    
    if (movieObj.isDigital) {
        localShelfStats.numberOfDigFilms++;
    }
    
    return localShelfStats;
}

function removeItemFromShelfStats(movieObj, localShelfStats) {
    localShelfStats.numberOfFilms--;
    if (movieObj.isPhysical) {
        localShelfStats.numberOfPhysFilms--;
    }    
    if (movieObj.isDigital) {
        localShelfStats.numberOfDigFilms--;
    }
    
    return localShelfStats;
}

async function loadShelfContents() {
    let localUsername = localStorage.getItem("localLogin");
    let localShelfContent = [];
    try {
        let response = await fetch(`/api/shelf/${localUsername}`);
        if(!response.ok) throw new Error('Fetch failed');
        let data = await response.json();
        localShelfContent = data;

        localStorage.setItem("shelf", JSON.stringify(localShelfContent));
    } catch (error) {
        console.error('Error:', error);

        let localShelfContents = JSON.parse(localStorage.getItem("shelf")) || false;

        if (localShelfContents === false) {
            localShelfContents = [];
            localStorage.setItem("shelf", JSON.stringify(loadShelfContents));
        }
    }    
}

async function updateShelfContents(isAdding, movieObj, movieTitle, localShelfContent) {
    let localUsername = localStorage.getItem("localLogin");

    if (isAdding) {
        localShelfContent = addItemToShelf(movieObj, localShelfContent);
    } else {
        localShelfContent = removeItemFromShelf(movieTitle, localShelfContent);
    }

    try {
        const response = await fetch(`/api/shelf/${localUsername}`, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(localShelfContent),
        });

        const shelfContentResponse = await response.json();

        if (!response.ok) throw new Error('Fetch failed');

        localStorage.setItem("shelf", shelfContentResponse);
    } catch (error) {
        console.error('loadShelfContent fetch failed:', error);
        localStorage.setItem("shelf", JSON.stringify(localShelfContent));
    }
}

function addItemToShelf(movieObj, localShelfContent) {
    localShelfContent.push(movieObj);
    localShelfContent.sort((a, b) => a.movieTitle.localeCompare(b.movieTitle));
    localStorage.setItem("shelf", JSON.stringify(localShelfContent));

    return localShelfContent;
}

function removeItemFromShelf(movieTitle, localShelfContent) {
    localShelfContent = localShelfContent.filter(obj => obj.movieTitle !== movieTitle);
    localShelfContent.sort((a, b) => a.movieTitle.localeCompare(b.movieTitle));
    localStorage.setItem("shelf", JSON.stringify(loadShelfContents));

    return localShelfContent;
}