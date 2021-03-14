const express = require('express');
const redis = require('redis');

const subscriber = redis.createClient();

const app = express();

subscriber.on("message",(channel,message) => {

    if(channel === 'user-added') {
      console.log(`Received data : ${message}`);
    }
    
})

subscriber.subscribe("user-added");

app.get('/',(req,res) => {
    res.send("Subscriber Server V1");
})

app.listen(3006,() => {
    console.log("server is listening", process.cwd());
})