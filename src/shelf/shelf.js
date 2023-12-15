document.addEventListener('DOMContentLoaded', async() => {
    await loadShelfStats();
    await loadShelfContents();
    updateUserInfo();
    updateShelfContents();
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

    const shelfUsername = document.getElementById("shelf-username");
    shelfUsername.innerText = `${localUsername}'s shelf`;
}

function updateShelfContents() {
    let localUsername = localStorage.getItem("localLogin");
    let localShelfContentData = localStorage.getItem(localUsername + "_shelf");
    let localShelfContentWrapper = JSON.parse(localShelfContentData) || false;
    let localShelfContent = localShelfContentWrapper.shelfContent;
    const userShelf = document.getElementById('#table-wrapper');

    userShelf.innerHTML = "";
    if (localShelfContent !== false) {
        for (let shelfItem of localShelfContent) {
            const userShelfRow = document.createElement("tr");
            userShelfRow.className = "shelf-row";
    
            // Movie Title
            const tdMovieTitle = document.createElement("td");
            tdMovieTitle.id = "movie-title";
            tdMovieTitle.innerText = shelfItem.movieTitle;
            userShelfRow.appendChild(tdMovieTitle);
    
            // Format Letter
            const tdFormatWrapper = document.createElement("td");
            const divFormatWrapper = document.createElement("div");
            divFormatWrapper.className = "format-letter";
    
            if (shelfItem.isPhysical) {
                const divFormat = document.createElement("div");
                divFormat.className = "format-letter-P";
                divFormat.innerText = `P`;
                divFormatWrapper.appendChild(divFormat);
            }
            if (shelfItem.isDigital) {
                const divFormat = document.createElement("div");
                divFormat.className = "format-letter-D";
                divFormat.innerText = `D`;
                divFormatWrapper.appendChild(divFormat);
            }
            tdFormatWrapper.appendChild(divFormatWrapper);
            userShelfRow.appendChild(tdFormatWrapper);
    
            // Specific Formats
            const tdFormatWrapper2 = document.createElement("td");
            const divFormatWrapper2 = document.createElement("div");
            divFormatWrapper.className = "multiple-formats";
    
            if (shelfItem.isDVD) {
                const divFormat = document.createElement("div");
                divFormat.className = "physical-format";
                divFormat.innerText = `DVD`;
                divFormatWrapper2.appendChild(divFormat);
            }
            if (shelfItem.isBluRay) {
                const divFormat = document.createElement("div");
                divFormat.className = "physical-format";
                divFormat.innerText = `Blu-Ray`;
                divFormatWrapper2.appendChild(divFormat);
            }
            if (shelfItem.is4KBluRay) {
                const divFormat = document.createElement("div");
                divFormat.className = "physical-format";
                divFormat.innerText = `4K Blu-Ray`;
                divFormatWrapper2.appendChild(divFormat);
            }
            if (shelfItem.isMoviesAnywhere) {
                const divFormat = document.createElement("div");
                divFormat.className = "digital-format";
                divFormat.innerText = `Movies Anywhere`;
                divFormatWrapper2.appendChild(divFormat);
            }
            if (shelfItem.isVUDU) {
                const divFormat = document.createElement("div");
                divFormat.className = "digital-format";
                divFormat.innerText = `VUDU`;
                divFormatWrapper2.appendChild(divFormat);
            }
            if (shelfItem.isAppleTV) {
                const divFormat = document.createElement("div");
                divFormat.className = "digital-format";
                divFormat.innerText = `Apple TV`;
                divFormatWrapper2.appendChild(divFormat);
            }
            if (shelfItem.isPrimeVideo) {
                const divFormat = document.createElement("div");
                divFormat.className = "digital-format";
                divFormat.innerText = `Prime Video`;
                divFormatWrapper2.appendChild(divFormat);
            }
            tdFormatWrapper2.appendChild(divFormatWrapper2);
            userShelfRow.appendChild(tdFormatWrapper2);
    
    
            userShelf.appendChild(userShelfRow);
        }
    }
}
    