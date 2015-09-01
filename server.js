var express = require('express');
var cors = require('cors');
var mongo = require('mongo');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var sessions = require('sessions');
var passport = require('passport');
var facebook = require('passport-facebook');


var CancerCtrl = require('./backend/CancerCtrl');
/////////////express/////////////
var app = express();
/////////////middleware//////////
app.use(express.static('Public'));
app.use(bodyParser.json());
app.use(cors());

/////////////endpoints//////////
app.post('/api/Cancer', CancerCtrl.create);
app.get('/api/Cancer', CancerCtrl.read);
app.put('/api/Cancer', CancerCtrl.update);
app.delete('/api/Cancer', CancerCtrl.delete);
////////////connections/////////
var port = 8001
var mongoUri = 'mongodb://localhost:27017/LeavittMedical';

mongoose.set('debug', true);
mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log('connected to mongoDB at: ', mongoUri);
});


app.listen(port, function(){
  console.log('cool cat port', port);
});
