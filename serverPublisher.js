const express = require('express');
const redis = require('redis');
const { v4: uuidv4 } = require('uuid');

const publisher = redis.createClient();

const app = express();

app.get('/addUser', (req,res) => {

  console.log('request parameters', req.query);

  if (!req.query.name) {
    res.send(`No name received`);
  }

  const userID = uuidv4();

  const user = {
    id: userID,
    userName:  req.query.name
  };

  publisher.publish("user-added", JSON.stringify(user));

  res.send(`Event published using Redis ${user.name} and id ${userID} `);

});

app.listen(3008, () => {
  console.log('server is up port 3008 from', process.cwd());
});