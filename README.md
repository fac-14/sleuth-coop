[![Build Status](https://travis-ci.com/fac-14/sleuth-coop.svg?branch=master)](https://travis-ci.com/fac-14/sleuth-coop)

# Sleuth Co-operative

An online network connecting local government and SMEs. 

The initial MVP will help SMEs build a profile about their product(s) that provides useful information, in an engaging and easily understood way, for local government to discover.
The aim for this is to speed up innovation in the public sector and increase the market share for SMEs.

### The Team
[Jessie](https://github.com/developess) - Scrum Master | [Joe](https://github.com/thejoefriel) - DevOps | [Dominic](https://github.com/VirtualDOM) - QA | [Emma](https://github.com/SleepySheepy172) - Doc Wizard 

### Tech Stack

| Core | Testing | Other |
| - | -------- | -------- |
|Node|jest|babel
|Express|supertest|parcel-bundler
|React|eslint|pg
|PostgreSQL|react-testing-library|serve-favicon|
|HTML|nodemon|env2|
|CSS|concurrently||
|Sass|||


## Getting Started
How to get a copy of the project up and running on your local machine.

*Please ensure you have this software **installed and running** on your local machine **before** you attempt to run this webapp.*
> **Node** (via nvm recomended)
> see: https://github.com/creationix/nvm

> **PostgreSQL**
> see: https://wiki.postgresql.org/wiki/Detailed_installation_guides

### Setup

#### 1. Clone the repo:
```
$ git clone https://github.com/fac-14/sleuth-coop.git
```
#### 2. Install Dependencies 
```
$ cd sleuth-coop
$ npm i
```

#### 3. Install Dependencies in the `client` folder
```
$ cd client
$ npm i
```

#### 4. Ensure you have the neccesary Environment Variables
Create a `.env` file in the `client` folder.
Add this👇 line to the file.
```
SKIP_PREFLIGHT_CHECK=true
```

#### 5. Setup the Databases
Create the dev and test databases.
```
$ psql (or pgcli)
# CREATE DATABASE sleuth;
# CREATE DATABASE test_sleuth;
# ALTER DATABASE sleuth OWNER TO [your user];
# ALTER DATABASE test_sleuth OWNER TO [your user];
```

#### 6. Ensure you have Databases Environment Variables
Create a `config.env` file in the root.
Add these👇 lines to the file inserting your own psql username and password.
```
DB_URL = postgres://[USER]:[PASSWORD]@localhost:5432/sleuth
TEST_DB_URL = postgres://[USER]:[PASSWORD]@localhost:5432/test_sleuth
```

#### 7. Build the Database
Use this script that runs db_build.js
```
$ npm run build-db
```
OR 
use pgcli to connect to the sleuth database and run the whole script from db_build.sql by copy/pasting into pgcli.

#### 8. Run the Tests
To make sure everything is working as it should.
```
$ npm test
```

#### 9. Run the Server
```
$ npm run dev
```
Wait for a `compiled successfully` message.

#### 10. Have Fun
The webapp should now be running on
```localhost:3000```
Now you can play with the code all you like 🎉

If you notice anything wrong with the instructions or the project isn't running as expected don't hesitate to raise an issue and we'll try to figure it out.
