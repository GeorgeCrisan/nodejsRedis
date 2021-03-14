An example of pub/sub using nodeJS and Redis


serverPublisher files is the file containing the endpoit for adding an user name

```
  /addUser?name=Alex
```

1. This route will publish a JSON string with an unique id and an user name 

2. Inside subs directory resides two exaample of client servers that subscribe to channel initiated in serverPublisher "user-added"