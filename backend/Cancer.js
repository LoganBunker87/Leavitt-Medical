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
  parent: [
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

//   personal.name: {
//       type: String
//     },
//     personal.age: {
//       type: Number
//     },
//     personal.sex: {
//       type: String,
//       enum: ['Male', //////make capital or lowercase options available
//         'Female'
//       ]
//     },
//     personal.cancerType: {
//       type: String,
//       enum: ['Skin',
//         'Breast',
//         'Colon',
//         'Brain',
//         'Lymphoma',
//         'Thyroid',
//         'Prostate',
//         'Other'
//       ]
//     }
// });
// ////////////////////Parents//////////////
// parent.name: {
//     type: String
//   },
//   parent.age: {
//     type: Number
//   },
//   parent.sex: {
//     type: String,
//     enum: ['Male', //////make capital or lowercase options available
//       'Female'
//     ]
//   },
//   parent.cancerType: {
//     type: String,
//     enum: ['Skin',
//       'Breast',
//       'Colon',
//       'Brain',
//       'Lymphoma',
//       'Thyroid',
//       'Prostate',
//       'Other'
//     ]
//   }
// });
//
// ///////////////////Siblings//////////////////
// sibling.name: {
//     type: String
//   },
//   sibling.age: {
//     type: Number
//   },
//   sibling.sex: {
//     type: String,
//     enum: ['Male', //////make capital or lowercase options available
//       'Female'
//     ]
//   },
//   sibling.cancerType: {
//     type: String,
//     enum: ['Skin',
//       'Breast',
//       'Colon',
//       'Brain',
//       'Lymphoma',
//       'Thyroid',
//       'Prostate',
//       'Other'
//     ]
//   }
// });
//
// ///////////////////Child///////////////
//
// child.name: {
//     type: String
//   },
//   child.age: {
//     type: Number
//   },
//   child.sex: {
//     type: String,
//     enum: ['Male', //////make capital or lowercase options available
//       'Female'
//     ]
//   },
//   child.cancerType: {
//     type: String,
//     enum: ['Skin',
//       'Breast',
//       'Colon',
//       'Brain',
//       'Lymphoma',
//       'Thyroid',
//       'Prostate',
//       'Other'
//     ]
//   }
// });
//
// /////////////////////Relatives///////////////////
//
// relative.name: {
//     type: String
//   },
//   relative.age: {
//     type: Number
//   },
//   relative.sex: {
//     type: String,
//     enum: ['Male', //////make capital or lowercase options available
//       'Female'
//     ]
//   },
//   relative.cancerType: {
//     type: String,
//     enum: ['Skin',
//       'Breast',
//       'Colon',
//       'Brain',
//       'Lymphoma',
//       'Thyroid',
//       'Prostate',
//       'Other'
//     ]
//   }
// });
//
//
module.exports = mongoose.model('Cancer', cancerSchema);
