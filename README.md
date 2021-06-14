# Getting Started with OTP Verification App

This App is built using

# Node.js
# Express.js
# MongoDB
# HTML
# CSS
# Javascript

## Available Scripts

In the project directory, you can run:

### First run `npm install` in backend directory

### Second start backend using `npm run server`

### Start frontend by opening index.html in frontend directory

### `npm run server`
With this command backend and API web service will start at localhost:8000/api/

"tags": [
  {"id": "125", "name": "Environment"},
  {"id": "834", "name": "Water Quality"}
],

### API Documenation ###

### POST request to Generate OTP for new user and old user at :

POST at localhost:8000/api/signup

with data

{
    "email":"user emailID"
}

### 1. API response if data is valid for registered user:

{
    "status": true,
    "data": {
        "OTP": 658094
    },
    "message": "otp sent successfully"
}

### 2. API respone for New User:

{
    "status": true,
    "data": {
        "OTP": 793169
    },
    "message": "User Succesfully Resgistered ! otp sent successfully"
}

### 3. API Respone for Error or Invalid Data:
{
    "status": false,
    "data": {},
    "message": "Must be a valid email address"
}


### POST request to Validate OTP and email at :

POST at localhost:8000/api/signin

with data

{
    "email":"user emailID",
    "otp":"OTP data"
}

### 4. API response if OTP match with OTP saved in MongoDB  :

{
    "status": true,
    "data": {
        "otp": "683693"
    },
    "message": "otp confirmed successfully"
}

### 5. API response if OTP doesn't match with OTP saved in MongoDB  :

{
    "status": false,
    "data": {},
    "message": "Email and OTP does not match."
}


### 6. API response if OTP is field is not entered or less than 6 digit  :

{
    "status": false,
    "data": {},
    "message": "OTP must be at least 6 characters long"
}

### 7. API response if User is not registered or email field is empty :

{
    "status": false,
    "data": {},
    "message": "User with this email does not exist. Please signup."
}

### //VALIDATE GET route mehod to API service , returns error

### 8. //GET at localhost:8000/api/signup

GET at localhost:8000/api/signup

{
    "status": false,
    "data": {},
    "error": "Oops. it seems like you do not have access to this route"
}

### 9. //GET at localhost:8000/api/signin

GET at localhost:8000/api/signin

{
    "status": false,
    "data": {},
    "error": "Oops. it seems like you do not have access to this route"
}


