const Camera = require('../models/cam_model');

// GET all cameras
const  getAllCameras=async function(req, res) {
  try {
    const cameras = await Camera.find();
    res.status(200).json(cameras);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// GET camera by ID
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

// CREATE a new camera
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

// UPDATE a camera by ID
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

// DELETE a camera by ID
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
