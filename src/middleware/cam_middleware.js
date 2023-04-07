const CameraNetworks = require('../models/camnetwork_model');

//"Export middleware function to validate Camera Network ID in request parameters".

const validateNetworkId = async function (req, res, next) {
  const { id } = req.params;
  try {
    const network = await CameraNetworks.findById(id);
    if (!network) {
      return res.status(404).json({ error: 'Invalid Camera Network ID' });
    }
    req.network = network;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { validateNetworkId };
