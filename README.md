# busy-beaver-project


# Developers
To work on this project install:
* NodeJS 12.11.1 (latest)
* npm (gets installed with NodeJS)

Clone this project, and switch to the right branch (see git workflow for more information.)

Run `npm install` to install all necessary node packages.

## Start server locally
Start backend locally at http://localhost:3000 :
```
node index.js
``` 

Start frontend locally at http://localhost:8081 :
```
npm serve
```

For more commands see the frontend/backend chapter

## Database
We will work with a mongo db database. 

### Work with a local mongodb database
For development purposes you might want to work with a local database. There for go to https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2012plus-4.2.1-signed.msi/download to download the current mongodb server verison. Follow the instructions in the [installation manual](https://docs.mongodb.com/manual/installation/) specific to your OS.
You do not have to install "Compass".

To make it as easy as possible for us we shall name all our local databases used for this project "busybeaverdb"

To learn MongoDB get started [here](https://docs.mongodb.com/manual/tutorial/getting-started/#getting-started)


## Frontend
We are using Vue Js to develop the frontend. See https://vuejs.org/v2/guide/index.html#Getting-Started to learn more about it.

### Frontend: important console commands
Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```

Run your tests
```
npm run test
```

Lints and fixes files
```
npm run lint
```

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Backend
We use expressJS for backend development.