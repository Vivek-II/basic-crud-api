\# Basic CRUD API (Node.js + Express)



This is a simple REST API built using Node.js and Express to perform CRUD operations on users.



\## Features

\- Create a user

\- Get all users

\- Get user by ID

\- Update user

\- Delete user



\## How to run this project



1\. Open terminal inside the project folder

2\. Run:



   npm install

   node index.js



3\. Server will start at:

   http://localhost:3000



\## API Endpoints



\### 1. Create User

POST /users

Body (JSON):

{

  "id": 1,

  "name": "Vivek",

  "age": 22

}



\### 2. Get All Users

GET /users



\### 3. Get User By ID

GET /users/1



\### 4. Update User

PUT /users/1

Body:

{

  "name": "Vivek Kumar",

  "age": 23

}



\### 5. Delete User

DELETE /users/1



\## Testing

API was tested using browser DevTools and Fetch API.

