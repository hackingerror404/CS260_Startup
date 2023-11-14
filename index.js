const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

let cors = require('cors');
app.use(cors());

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// getShelf
apiRouter.get('/shelf/:username', (req, res) => {
  const userShelfContent = getShelfContent(req.params.username);
  res.send(userShelfContent);
});

// updateShelf
apiRouter.post('/shelf/:username', (req, res) => {
  const requestData = req.body;
  let updatedLocalShelfContents = updateShelfContents(requestData, req.params.username);
  res.send(updatedLocalShelfContents);
})

// get shelfStats
apiRouter.get('/shelfStats/:username', (req, res) => {
  const userShelfStats = getShelfStats(req.params.username);
  res.send(userShelfStats);
});

// update shelfStats
apiRouter.post('/shelfStats/:username', (req, res) => {
  const requestData = req.body;
  let updatedLocalShelfStats = updateShelfStats(requestData, req.params.username);
  res.send(updatedLocalShelfStats);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

let shelfContents = new Map();
let shelfStats = new Map();

function getShelfContent(username) {
  let localShelfContent = shelfContents.get(username) || false;
  if (localShelfContent === false) {
    localShelfContent = [];
    shelfContents.set(username, localShelfContent);
  }
  return localShelfContent;
}

function updateShelfContents(moviesArray, username) {
  shelfContents.set(username, moviesArray);
  return shelfContents.get(username);
}

function getShelfStats(username) {
  if (!shelfStats.has(username)) {
    shelfStats.set(username, {
      "numberOfFilms": 0,
      "numberOfPhysFilms": 0,
      "numberOfDigFilms": 0
    });
  }

  return shelfStats.get(username);
}

function updateShelfStats(newLocalShelfStats, username) {
  const { numberOfFilms, numberOfPhysFilms, numberOfDigFilms } = newLocalShelfStats;

  if (shelfStats.has(username)) {
    const existingValues = shelfStats.get(username);
    existingValues.numberOfFilms = numberOfFilms;
    existingValues.numberOfPhysFilms = numberOfPhysFilms;
    existingValues.numberOfDigFilms = numberOfDigFilms;
  } else {
    shelfStats.set(username, {
      numberOfFilms,
      numberOfPhysFilms,
      numberOfDigFilms,
    });
  }

  return shelfStats.get(username);
}
