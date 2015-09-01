var mongoose = require('mongoose');


var cancerSchema = new mongoose.Schema ({
  name: { type: String },
  age: { type: Number }, //do I want string or Number
  cancerType: {
    type: String,
    enum: [ 'Skin',
            'Breast',
            'Colon',
            'Brain',
            'Lymphoma',
            'Thyroid',
            'Prostate',
            'Other'
          ]
   }
});

module.exports = mongoose.model('Cancer', cancerSchema);
