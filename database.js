const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');
const shelfStatsCollection = db.collection('shelfStats');
const shelfCollection = db.collection('shelf');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function getShelfStats(usernameToFind) {
  const query = { username: usernameToFind };

  try {
    const userShelfStats = await shelfStatsCollection.findOne(query);
    if (userShelfStats !== null) {
      return userShelfStats;
    } else {
      const addShelfStats = {
        username: usernameToFind,
        numberOfFilms: 0,
        numberOfPhysFilms: 0,
        numberOfDigFilms: 0,
      };

      const result = await shelfStatsCollection.insertOne(addShelfStats);
      return result.ops; // Return the inserted document(s)
    }  
  } catch (err) {
    console.error('Error finding/inserting user shelfStats:', err);
    return null;
  }
}

async function updateShelfStats(localShelfStats) {
  const query = { username: localShelfStats.username };
  const update = {
    $set: {
      username: localShelfStats.username,
      numberOfFilms: localShelfStats.numberOfFilms,
      numberOfPhysFilms: localShelfStats.numberOfPhysFilms,
      numberOfDigFilms: localShelfStats.numberOfDigFilms,
    },
  };

  const options = {
    upsert: true,
  };
  
  shelfStatsCollection.updateOne(query, update, options, (err, result) => {
    if (err) {
      console.error('Error updating/inserting user shelfStats:', err);
      return null;
    } else {
      return result; 
    }
  });
}

async function updateShelfContent(localShelfContent) {
  const query = { username: localShelfContent.username };
  const update = {
    $set: {
      username: localShelfContent.username,
      shelfContent: localShelfContent.shelfContent
    }
  };

  const options = {
    upsert: true,
  };

  try {
    const result = await shelfCollection.updateOne(query, update, options);
    return localShelfContent;
  } catch {
    console.error('Error updating/inserting user shelfContents:', err);
    return null;
  }
}

async function getShelfContent(usernameToFind) {
  const query = { username: usernameToFind};

  try {
    const userShelfContent = await shelfCollection.findOne(query);
    if (userShelfContent !== null) {
      return userShelfContent;
    } else {
      const addShelfContent = {
        username: usernameToFind,
        shelfContent: []
      };

      const result = await shelfCollection.insertOne(addShelfContent);
      return result.ops; // Return the inserted document(s)
    }
  } catch (err) {
    console.error('Error finding/inserting user shelfContents:', err);
    return null;
  }
}

module.exports = { updateShelfStats, getShelfStats, updateShelfContent, getShelfContent };