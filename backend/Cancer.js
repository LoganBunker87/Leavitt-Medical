var mongoose = require('mongoose');


var cancerSchema = new mongoose.Schema ({
  name: { type: String },
  age: { type: Number },
  sex: {
    type: String,
    enum: ['Male', //////make capital or lowercase options available 
           'Female'
          ]
  },
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
