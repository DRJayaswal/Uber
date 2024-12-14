# Backend API Endpoint Documentation 
# /users/register

This endpoint allows new users to register by providing their details. Upon successful registration, a JWT token is generated for the user.

## 1. HTTP Method
- **POST** `/users/register`

## 2. Request Body
The request body should be a JSON object containing the following fields:

```json
{                                   // object
  "fullName": {                     // object
    "firstName": "John",            // string
    "lastName": "Doe"               // string
  },
  "email": "john.doe@example.com",  // string
  "password": "password123",        // string
  "socketId": "socket1234"          // string
}
```

## 3. Response Body
The response body should be a JSON object containing the following fields:

```json
{                                               // object
    "user": {                                   // object
        "fullName": {                           // object
            "firstName": "John",                // string
            "lastName": "Doe"                   // string
        },
        "email": "john.doe@example.com",        // string
        "password": "$2b$10$ocpxbyA/OGWon5F9",  // string
        "socketId": "socket1234",               // string
        "_id": "675d28b3e084cfdc9c4e864f",      // string
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cC"       // string
}
```

# /users/login

## 1. HTTP Method
- **POST** `/users/login`


## 2. Request Body
The request body should be a JSON object containing the following fields:

```json
{                                   // object
  "email": "john.doe@example.com",  // string
  "password": "password123",        // string
}
```

## 3. Response Body
The response body should be a JSON object containing the following fields:

```json
{                                               // object
    "user": {                                   // object
        "fullName": {                           // object
            "firstName": "John",                // string
            "lastName": "Doe"                   // string
        },
        "email": "john.doe@example.com",        // string
        "password": "$2b$10$ocpxbyA/OGWon5F9",  // string
        "socketId": "socket1234",               // string
        "_id": "675d28b3e084cfdc9c4e864f",      // string
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cC"       // string
}
```