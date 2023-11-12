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
  const username = req.params.username;
  res.send({name: req.params.username});
});

apiRouter.get('/shelfStats/:username', (req, res) => {
  const userShelfStats = getShelfStats(req.params.username, shelfStats);
  res.send(userShelfStats);
});

// update shelfStats
apiRouter.post('/shelfStats', (req, res) => {
  const requestData = req.body;
  shelfStats = updateShelfStats(requestData, shelfStats);
  console.log("----------------UPDATED SHELF STATS-------------")
  res.send(shelfStats);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateScores considers a new score for inclusion in the high scores.
// The high scores are saved in memory and disappear whenever the service is restarted.
let shelfStats = new Map();

function getShelfStats(username, allShelfStats) {
  let localShelfStats;
  if (allShelfStats.has(username)) {
    localShelfStats = allShelfStats.get(username);
  } else {
    allShelfStats.set(username, {
      "numberOfFilms": 0,
      "numberOfPhysFilms": 0,
      "numberOfDigFilms": 0
    });
    localShelfStats = allShelfStats.get(username);
  }

  return localShelfStats;
}

function updateShelfStats(newShelfStats, allShelfStats) {
  for (const [username, values] of Object.entries(newShelfStats)) {
    const { numberOfFilms, numberOfPhysFilms, numberOfDigFilms } = values;

    if (allShelfStats.has(username)) {
      const existingValues = allShelfStats.get(username);
      existingValues.numberOfFilms = numberOfFilms;
      existingValues.numberOfPhysFilms = numberOfPhysFilms;
      existingValues.numberOfDigFilms = numberOfDigFilms;
    } else {
      allShelfStats.set(username, {
        numberOfFilms,
        numberOfPhysFilms,
        numberOfDigFilms,
      });
    }
  }

  return allShelfStats;
}
