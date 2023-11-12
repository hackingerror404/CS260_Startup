async function loadShelfStats() {
    let localUsername = localStorage.getItem("localLogin");
    let shelfStats = new Map();
    try {
        const response = await fetch(`http://localhost:4000/api/shelfStats/${localUsername}`);
        shelfStats = await response.json();

        if (shelfStats.size === undefined) {
            shelfStats = {
                [localUsername]: {
                    "numberOfFilms": 0,
                    "numberOfPhysFilms": 0,
                    "numberOfDigFilms": 0,
                }
            }
        }
        let shelfStatsObject = {};
        shelfStats.forEach((value, key) => {
            shelfStatsObject[key] = value;
        });
        // Save the shelfStats in case we go offline in the future
        localStorage.setItem("shelfStats", JSON.stringify(shelfStatsObject));
    } catch {
        let shelfStats = JSON.parse(localStorage.getItem("shelfStats")) || false;

        if (shelfStats === false) {
            shelfStats = {
                [localUsername]: {
                    "numberOfFilms": 0,
                    "numberOfPhysFilms": 0,
                    "numberOfDigFilms": 0,
                }
            }
            let shelfStatsObject = {};
            shelfStats.forEach((value, key) => {
                shelfStatsObject[key] = value;
            });
            // Save the shelfStats in case we go offline in the future
            localStorage.setItem("shelfStats", JSON.stringify(shelfStatsObject));
        }
    }
}
async function updateShelfStats(isAdding, movieObj, shelfStats) {
    let localUsername = localStorage.getItem("localLogin");

    if (isAdding) {
        shelfStats = addItemToShelf(movieObj, shelfStats, localUsername);
    } else {
        shelfStats = removeItemFromShelf(movieObj, shelfStats, localUsername);
    }

    try {
        const response = await fetch(`http://localhost:4000/api/shelfStats/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify([...shelfStats]),
          });
        shelfStats = await response.json();
        let shelfStatsObject = {};
        shelfStats.forEach((value, key) => {
            shelfStatsObject[key] = value;
        });
        // Save the shelfStats in case we go offline in the future
        localStorage.setItem("shelfStats", JSON.stringify(shelfStatsObject));
    } catch {
        let shelfStats = JSON.parse(localStorage.getItem("shelfStats"));
    }
}

function addItemToShelf(movieObj, shelfStats, localUsername) {
    let shelfStatItem = shelfStats.get(localUsername);
    shelfStatItem.numberOfFilms++;
    if (movieObj.isPhysical) {
        shelfStatItem.numberOfPhysFilms++;
    }    
    if (movieObj.isDigital) {
        shelfStatItem.numberOfDigFilms++;
    }
    shelfStats.set(localUsername, shelfStatItem);    
    let shelfStatsObject = {};
    shelfStats.forEach((value, key) => {
        shelfStatsObject[key] = value;
    });
    // Save the shelfStats in case we go offline in the future
    localStorage.setItem("shelfStats", JSON.stringify(shelfStatsObject));
    return shelfStats;
}

function removeItemFromShelf(movieObj, shelfStats, localUsername) {
    let shelfStatItem = shelfStats.get(localUsername);
    shelfStatItem.numberOfFilms--;
    if (movieObj.isPhysical) {
        shelfStatItem.numberOfPhysFilms--;
    }    
    if (movieObj.isDigital) {
        shelfStatItem.numberOfDigFilms--;
    }
    shelfStats.set(localUsername, shelfStatItem);
    let shelfStatsObject = {};
    shelfStats.forEach((value, key) => {
        shelfStatsObject[key] = value;
    });
    // Save the shelfStats in case we go offline in the future
    localStorage.setItem("shelfStats", JSON.stringify(shelfStatsObject));
    return shelfStats;
}