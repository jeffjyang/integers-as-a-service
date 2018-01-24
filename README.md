# integers-as-a-service

## To start the server:
1. Download the repo, and navigate to the server directory in terminal (Mac)
1. Install the dependencies: `npm install`
1. Start the server: `node server`
1. Server will be running on port 3000

## Backend:
#### Design choices:
- All data stored in an SQLite database
    - Since I have worked with SQLite before, I am more comfortable with it compared
    to a different DBMS
    - Schema:
        - `CREATE TABLE users (email VARCHAR(255), pwhash VARCHAR(255), num INT,
        jwt VARCHAR(255));`
        - NOTE:
            - pwhash could have been declared as `CHAR(60)`
            - JWT does not necessarily have to be stored in the database, so
             this column can be omitted

- JSON Web Token (JWT)
    - JWT used as the API key

- bcrypt
    - Used to hash user passwords

#### Endpoints:
- /register
    - Register a new user
    - Method: POST
    - Data Params:
        - `{"email": "string", "password": "string"}`
    - Response:
        - `{"num": int, "jwt": "string"}`
- /login
    - Login a user
    - Method: POST
    - TODO reset password or show some stats? 
- /getCurrentNum
    - Fetch the current number for a user
    - Method: POST
    - Data Params:
        - `{"jwt": "string"}`
    - Response:
        - `{"num": int}`
- /getNextNum
    - Fetch the next number for a user, increment said user's number in the server
    - Method: POST
    - Data Params:
        - `{"jwt": "string"}`
    - Response:
        - `{"num": int}`
- /setNum
    - Sets the number for a user
    - Method: POST
    - Data Params:
        - `{"jwt": "string", "num": int}`
    - Response:
        - `{"num": int}`



## Front-end:  
- TODO
