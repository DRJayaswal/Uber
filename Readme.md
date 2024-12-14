# Backend API Endpoint Documentation 
# /users/register

This endpoint allows new users to register by providing their details. Upon successful registration, a JWT token is generated for the user.

## HTTP Method
- **POST** `/users/register`

## Request Body
The request body should be a JSON object containing the following fields:

```json
{
  "fullName": {
    "firstName": "string",
    "lastName": "string"
    },
  "email": "string",
  "password": "string",
  "socketId": "string"
}
```
## Example Request
```json
{
    "fullName": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123",
    "socketId": "socket1234"
  }
```

## Response Body
The response body should be a JSON object containing the following fields:

```json
{
  "user": {
        "fullName": {
        "firstName": "string",
        "lastName": "string"
    },
    "email": "string",
    "password": "string",
    "socketId": "string",
    "_id": "string",
    "__v": "number"
    },
  "token": "string"
}
```

## Example Response
```json
{
    "user": {
        "fullName": {
            "firstName": "John",
            "lastName": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "$2b$10$ocpxbyA/OGWon5F9VBJiDOctrJN",
        "socketId": "socket1234",
        "_id": "675d28b3e084cfdc9c4e864f",
        "__v": 0
    },
    "token": {}
}
```

