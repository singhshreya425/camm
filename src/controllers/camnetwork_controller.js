const CameraNetworks = require('../models/camnetwork_model');


/////////////////////////////////////////////////////// POST a new camera network/////////////////////////////////////////////

//createNetwork handles the creation of a new camera network.

const createNetwork = async function(req, res) {
    try {
      const network = new CameraNetworks(req.body);
      await network.save();
      res.status(201).json(network);
    } catch (err) {
      res.status
      (404).json({ error: 'Network not found' });
  }
  };
  

////////////////////////////////////////////////// GET all camera networks///////////////////////////////////////////////////////////////////

//getNetworks retrieves all camera networks with the populate method to include associated cameras in the response.

const getNetworks = async function (req, res)  {
  try {
    const networks = await CameraNetworks.find({}).populate('cameras');
    res.json(networks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


/////////////////////////////////////////////////////////////////// GET a camera network by ID///////////////////////////////////////////////////////

//getNetworkById retrieves a specific camera network by its ID with associated cameras.

const getNetworkById = async function(req, res)  {
  try {
    const network = await CameraNetworks.findById(req.params.id).populate('cameras');
    res.json(network);
  } catch (err) {
    res.status(404).json({ error: 'Network not found' });
  }
};


/////////////////////////////////////////////// Update an existing Camera Network by ID/////////////////////////////////////////////////////////////////

//updateNetwork updates an existing camera network with the specified ID.

const updateNetwork = async function(req, res) {
    try {
      const updatedNetwork = await CameraNetworks.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
  
      if (!updatedNetwork) {
        return res.status(404).json({ message: 'Camera Network not found' });
      }
  
      res.status(200).json(updatedNetwork);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  //////////////////////////////////// Delete an existing Camera Network by ID///////////////////////////////////////////////////
  
  //deleteNetwork deletes a camera network by its ID.

  const deleteNetwork = async function(req, res)  {
    try {
      const deletedNetwork = await CameraNetworks.findByIdAndDelete(req.params.id);
  
      if (!deletedNetwork) {
        return res.status(404).json({ message: 'Camera Network not found' });
      }
  
      res.status(200).json(deletedNetwork);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports={getNetworks,getNetworkById,createNetwork,updateNetwork,deleteNetwork}
