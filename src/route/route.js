const express = require('express');
const router = express.Router();
const cameraController = require('../controllers/cam_controller');
const cameraNetworksController = require('../controllers/camnetwork_controller');
const { validateNetworkId } =require('../middleware/cam_middleware')


// CREATE a new camera
router.post('/createcam', cameraController.createCamera);

// GET all cameras
router.get('/getcam', cameraController.getAllCameras);

// GET camera by ID
router.get('/getcam/:id', cameraController.getCameraById);

// UPDATE a camera by ID
router.put('/updatecam/:id', cameraController.updateCamera);

// DELETE a camera by ID
router.delete('/deletecam/:id', cameraController.deleteCamera);

// Camera Networks routes

//Create a new network
router.post('/networks', cameraNetworksController.createNetwork);

//Get network
router.get('/networkss', cameraNetworksController.getNetworks);

//Get network by ID
router.get('/networks/:id', validateNetworkId,cameraNetworksController.getNetworkById);

//Update network by ID
router.put('/networks/:id',  validateNetworkId,cameraNetworksController.updateNetwork);

//Delete network by ID
router.delete('/networks/:id',  validateNetworkId,cameraNetworksController.deleteNetwork);




module.exports = router;
