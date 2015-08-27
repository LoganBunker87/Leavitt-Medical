var mongoose = require('mongoose');


var cancerSchema = new mongoose.Schema ({
  name: { type: String }
  age: { type: Number } //do I want string or Number
  cancerType: {
    type: String,
    enum: [ 'skin',
            'breast',
            'colon',
            'brain',
            'lymphoma',
            'thyroid',
            'prostate',
            'other'
          ]
   }
})
