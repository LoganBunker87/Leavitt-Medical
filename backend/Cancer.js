var mongoose = require('mongoose');


var cancerSchema = new mongoose.Schema({

personal: {

  name: {
      type: String
    },
    age: {
      type: Number
    },
    sex: {
      type: String,
      enum: ['Male', //////make capital or lowercase options available
        'Female'
      ]
    },
    cancerType: {
      type: String,
      enum: ['Skin',
        'Breast',
        'Colon',
        'Brain',
        'Lymphoma',
        'Thyroid',
        'Prostate',
        'Other'
      ]
    }
  },
  Mother: 
    {

      name: {
          type: String
        },
        age: {
          type: Number
        },
        sex: {
          type: String,
          enum: ['Male', //////make capital or lowercase options available
            'Female'
          ]
        },
        cancerType: {
          type: String,
          enum: ['Skin',
            'Breast',
            'Colon',
            'Brain',
            'Lymphoma',
            'Thyroid',
            'Prostate',
            'Other'
          ]
        }
      }
  ,
  Father:
    {

      name: {
          type: String
        },
        age: {
          type: Number
        },
        sex: {
          type: String,
          enum: ['Male', //////make capital or lowercase options available
            'Female'
          ]
        },
        cancerType: {
          type: String,
          enum: ['Skin',
            'Breast',
            'Colon',
            'Brain',
            'Lymphoma',
            'Thyroid',
            'Prostate',
            'Other'
          ]
        }
      },

  child: [
    {

      name: {
          type: String
        },
        age: {
          type: Number
        },
        sex: {
          type: String,
          enum: ['Male', //////make capital or lowercase options available
            'Female'
          ]
        },
        cancerType: {
          type: String,
          enum: ['Skin',
            'Breast',
            'Colon',
            'Brain',
            'Lymphoma',
            'Thyroid',
            'Prostate',
            'Other'
          ]
        }
      }
  ],
  sibling: [
    {

      name: {
          type: String
        },
        age: {
          type: Number
        },
        sex: {
          type: String,
          enum: ['Male', //////make capital or lowercase options available
            'Female'
          ]
        },
        cancerType: {
          type: String,
          enum: ['Skin',
            'Breast',
            'Colon',
            'Brain',
            'Lymphoma',
            'Thyroid',
            'Prostate',
            'Other'
          ]
        }
      }
  ],
  relative: [
    {

      name: {
          type: String
        },
        age: {
          type: Number
        },
        sex: {
          type: String,
          enum: ['Male', //////make capital or lowercase options available
            'Female'
          ]
        },
        cancerType: {
          type: String,
          enum: ['Skin',
            'Breast',
            'Colon',
            'Brain',
            'Lymphoma',
            'Thyroid',
            'Prostate',
            'Other'
          ]
        }
      }
  ]
});

module.exports = mongoose.model('Cancer', cancerSchema);
