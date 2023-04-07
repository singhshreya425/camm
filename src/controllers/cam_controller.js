const Camera = require('../models/cam_model');

///////////////////////////////////////////////////////////// CREATE a new camera/////////////////////////////////////////////////////////////////

//The createCamera function creates a new camera document in the database using the request body parameters.
// If the creation is successful, it returns a JSON response with the new camera object and a 201 status code. 
//If an error occurs, it returns a JSON response with a 400 status code and an error message.

const createCamera=async function (req, res) {
  const camera = new Camera({
    name: req.body.name,
    description: req.body.description,
    url: req.body.url
  });
  try {
    const newCamera = await camera.save();
    res.status(201).json(newCamera);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}


///////////////////////////////////////////////////////////////// GET all cameras///////////////////////////////////////////////////

//The getAllCameras function retrieves all camera documents from the database and returns them as a JSON response with a 200 status code if successful. 
//If an error occurs, it returns a JSON response with a 500 status code and an error message.

const  getAllCameras=async function(req, res) {
  try {
    const cameras = await Camera.find();
    res.status(200).json(cameras);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


/// /////////////////////////////////////////////////////////GET camera by ID////////////////////////////////////////////////////////////

//The getCameraById function retrieves a single camera document from the database by ID specified in the request parameters. 
//If the camera is found, it returns a JSON response with the camera object and a 200 status code. 
//If the camera is not found, it returns a JSON response with a 404 status code and an error message.
// If an error occurs, it returns a JSON response with a 500 status code and an error message.

const getCameraById=async function (req, res) {
  try {
    const camera = await Camera.findById(req.params.id);
    if (camera) {
      res.status(200).json(camera);
    } else {
      res.status(404).json({ message: 'Camera not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


/////////////////////////////////////////////////////////// UPDATE a camera by ID////////////////////////////////////////////

//The updateCamera function updates an existing camera document in the database by ID specified in the request parameters using the request body parameters. 
//If the camera is found and updated successfully, it returns a JSON response with the updated camera object and a 200 status code.
// If the camera is not found, it returns a JSON response with a 404 status code and an error message.
// If an error occurs, it returns a JSON response with a 400 status code and an error message.

const updateCamera=async function (req, res) {
  try {
    const camera = await Camera.findById(req.params.id);
    if (camera) {
      camera.name = req.body.name || camera.name;
      camera.description = req.body.description || camera.description;
      camera.url = req.body.url || camera.url;
      const updatedCamera = await camera.save();
      res.status(200).json(updatedCamera);
    } else {
      res.status(404).json({ message: 'Camera not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}


////////////////////////////////////////////////////// DELETE a camera by ID////////////////////////////////////////////////////////////

//The deleteCamera function deletes an existing camera document in the database by ID specified in the request parameters.
// If the camera is found and deleted successfully, it returns a JSON response with a 200 status code and a success message.
// If the camera is not found, it returns a JSON response with a 404 status code and an error message. 
//If an error occurs, it returns a JSON response with a 500 status code and an error message.

const deleteCamera=async function (req, res) {
  try {
    const camera = await Camera.findById(req.params.id);
    if (camera) {
     // await camera.remove();
      res.status(200).json({ message: 'Camera deleted' });
    } else {
      res.status(404).json({ message: 'Camera not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  getAllCameras,
  getCameraById,
  createCamera,
  updateCamera,
  deleteCamera
};
