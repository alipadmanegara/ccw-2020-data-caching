# ccw-2020-data-caching
Data caching using Redis and NodeJs

Requirement:\
• Node.js should be installed on your system\
• MongoDB should be installed on your system\
• Redis should be installed on your system


### Running in local

Install the dependencies.

```sh
$ npm install
```

Start the server.

```sh
$ npm run start
```

### Endpoints

• Insert data to DB

```sh
method = POST
url = http://localhost:3000/api/user-data
body = {
          "userId": "johnDoe",
          "accountNumber": "12345",  
          "accountName": "tabungan rumah"
       }
```

• Find data (case 1), direct call to db, no caching

```sh
method = GET
url = http://localhost:3000/api/user-data/user-id/johndoe/case-1
```

• Find data (case 2), direct call to db, slow response time

```sh
method = GET
url = http://localhost:3000/api/user-data/user-id/johndoe/case-2
```


• Find data (case 3), db slow response time but added caching

```sh
method = GET
url = http://localhost:3000/api/user-data/user-id/johndoe/case-3
```
