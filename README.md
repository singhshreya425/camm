# CAMM

# BACK-END ASSIGNMENT :

# Getting Started

 Clone the repository.

Install the dependencies using npm install.

# Camera Entity

The Camera entity consists of the following fields:


# cam_model

name: The name of the Camera.

description: A description of the Camera (optional).

url: The URL or IP address of the Camera.

createdAt: The timestamp when the Camera was created.

updatedAt: The timestamp when the Camera was last updated.


# cam_controller

REST API Endpoints (CRUD)
The following endpoints are available for performing CRUD operations on the Camera entity:

POST /createcam: Creates a new Camera.

GET /getcam: Retrieves a list of all Cameras.

GET /getcam:id: Retrieves a single Camera by ID.

PUT /cameras/:id: Updates an existing Camera by ID.

DELETE /deletecam/:id: Deletes an existing Camera by ID.


# Camera Networks

A Camera Network is a group of Cameras that can be mutually inclusive. The Camera Network entity consists of the following fields:

# camnetwork_model

name: The name of the Camera Network.

description: A description of the Camera Network.

cameras: An array of Camera IDs that belong to this Camera Network.

createdAt: The timestamp when the Camera Network was created.

updatedAt: The timestamp when the Camera Network was last updated.


# camnetwork_controller

=>REST API Endpoints (CRUD)

The following endpoints are available for performing CRUD operations on the Camera Network entity:

POST /networks: Creates a new Camera Network.

GET /networkss: Retrieves a list of all Camera Networks.

GET /networks/:id: Retrieves a single Camera Network by ID.

PUT /networks/:id: Updates an existing Camera Network by ID.

DELETE /networks/:id: Deletes an existing Camera Network by ID.


# cam_middleware

=>Middleware

The middleware function is used in the following routes to ensure that the Camera Network ID in the request is valid:

GET /networks/:id

PUT /networks/:id

DELETE /networks/:id


=>Camera Network Cameras

When a Camera is deleted, any references to it in the Camera Networks entity should be removed automatically.
This is implemented through a middleware function that listens for pre-delete events on the Camera model. 
When a Camera is deleted, the middleware function removes any references to it from the Camera Networks entity.


# Technologies Used

The REST API is implemented using Node.js and Express.js, 
and the data is stored in a MongoDB database using the Mongoose ODM. 
The API supports JSON as the data format for requests and responses.

# Response Formats

The API returns responses in JSON format. 
Successful responses have a status field with a value of "success" and a data field with the requested data. 
Error responses have a status field with a value of "error" and an error field with a description of the error.








