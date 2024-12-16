# Backend API Endpoint Documentation 

# |---------------------------------------------------|

# /users/register
This endpoint allows new users to register by providing their required details, such as name, email, and password. Upon successful registration, the user’s data is securely stored, and they can proceed to log in and access personalized features.

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
This endpoint enables users to log in by submitting their registered email and password. Upon successful authentication, a token is generated and provided to the user for secure access to their profile and other protected resources.

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

# /users/logout
This endpoint allows authenticated users to securely log out by invalidating the existing token. The token is either cleared from cookies or passed via the authorization header and is subsequently blacklisted to prevent unauthorized reuse.
## 1. HTTP Method
- **GET** `/users/logout`


## 2. Response Body
The response body on successful logout:

```json
{
    "message": "Logged out"
}
```

## 3. Response Body
The response body on already logout state:

```json
{
    "message": "Already logged out"
}
```

# users/profile
This endpoint retrieves the profile information of an authenticated user. The user must provide a valid token, either from cookies or the authorization header, to access their profile data securely. This ensures that only authorized users can view their personalized information.

## 1. HTTP Method
- **GET** `/users/profile`


## 2. Response Body
The response body while user is logged in.
``` json
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
}
```

# |---------------------------------------------------|

# /captains/register
This endpoint allows new captains to register by providing their required details, such as name, email, and password. Upon successful registration, the user’s data is securely stored, and they can proceed to log in and access personalized features.

## 1. HTTP Method
- **POST** `/captains/register`

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
# /captains/login
This endpoint enables captains to log in by submitting their registered email and password. Upon successful authentication, a token is generated and provided to the user for secure access to their profile and other protected resources.

## 1. HTTP Method
- **POST** `/captains/login`


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

# /captains/logout
This endpoint allows authenticated captains to securely log out by invalidating the existing token. The token is either cleared from cookies or passed via the authorization header and is subsequently blacklisted to prevent unauthorized reuse.
## 1. HTTP Method
- **GET** `/captains/logout`


## 2. Response Body
The response body on successful logout:

```json
{
    "message": "Logged out"
}
```

## 3. Response Body
The response body on already logout state:

```json
{
    "message": "Already logged out"
}
```

# captains/profile
This endpoint retrieves the profile information of an authenticated user. The user must provide a valid token, either from cookies or the authorization header, to access their profile data securely. This ensures that only authorized captains can view their personalized information.

## 1. HTTP Method
- **GET** `/captains/profile`


## 2. Response Body
The response body while user is logged in.
``` json
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
}
```

# |---------------------------------------------------|