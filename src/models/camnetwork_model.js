const mongoose = require('mongoose');

const cameraNetworksSchema = new mongoose.Schema({
  name: String,
  description: String,
  cameras: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Camera'
  }]
},{ timestamps: true });




module.exports = mongoose.model('CameraNetworks', cameraNetworksSchema);


