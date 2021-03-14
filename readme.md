An example of pub/sub using nodeJS and Redis

Make sure you have Redis running on your machine
Make sure you have node installed

serverPublisher files is the file containing the endpoit for adding an user name

![message1](https://user-images.githubusercontent.com/16696844/111068059-fe4c5480-84be-11eb-8add-3dda454741e1.png)


```
  /addUser?name=Alex
```

1. This route will publish a JSON string with an unique id, an user name and a message

2. Inside subs directory resides two examples of client servers that subscribe to the channel initiated in serverPublisher "user-added"

<img width="1384" alt="Screenshot at Mar 14 12-14-07" src="https://user-images.githubusercontent.com/16696844/111068075-17550580-84bf-11eb-96bb-052dc7678cdf.png">
