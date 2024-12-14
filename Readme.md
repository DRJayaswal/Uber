# Backend API Endpoint Documentation 
# /users/register

This endpoint allows new users to register by providing their details. Upon successful registration, a JWT token is generated for the user.

## 1. HTTP Method
- **POST** `/users/register`

## 2. Request Body
The request body should be a JSON object containing the following fields:

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

## 3. Response Body
The response body should be a JSON object containing the following fields:

```json
{                                               
    "user": {                                   
        "fullName": {                           
            "firstName": "John",                
            "lastName": "Doe"                   
        },
        "email": "john.doe@example.com",        
        "password": "$2b$10$ocpxbyA/OGWon5F9",  
        "socketId": "socket1234",               
        "_id": "675d28b3e084cfdc9c4e864f",      
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cC"       
}
```
# /users/login
This endpoint allows existing users to login by providing their credentials. Upon successful authentication, a JWT token is generated for the user.
## 1. HTTP Method
- **POST** `/users/login`


## 2. Request Body
The request body should be a JSON object containing the following fields:

```json
{                                   
  "email": "john.doe@example.com",  
  "password": "password123",        
}
```

## 3. Response Body
The response body should be a JSON object containing the following fields:

```json
{                                               
    "user": {                                   
        "fullName": {                           
            "firstName": "John",                
            "lastName": "Doe"                   
        },
        "email": "john.doe@example.com",        
        "password": "$2b$10$ocpxbyA/OGWon5F9",  
        "socketId": "socket1234",               
        "_id": "675d28b3e084cfdc9c4e864f",      
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cC"       
}
```