const express = require('express');
const app = express();
const DB = require('./database.js');

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
  let updatedLocalShelfContents = DB.updateShelfStats(requestData);
  res.send(updatedLocalShelfContents);
})

// get shelfStats
apiRouter.get('/shelfStats/:username', async (req, res) => {
  const userShelfStats = await DB.getShelfStats(req.params.username);
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

function getShelfContent(username) {
  let localShelfContent = shelfContents.get(username) || false;
  if (localShelfContent === false) {
    localShelfContent = [];
    shelfContents.set(username, localShelfContent);
  }
  return localShelfContent;
}

function updateShelfStats(newLocalShelfStats) {
  const result = DB.updateShelfStats(newLocalShelfStats)
  return result;
}
