import mongoose from 'mongoose';
import rndString from "randomstring";

var name = require('../package.json');
var db = mongoose.connect('mongodb://localhost/'+name.name);
mongoose.Promise = global.Promise;


var BoardSchema = mongoose.Schema({
   date: {type: String},
   place: {type: String, require: ture},
   title: {type: String, require: ture},
   context: {type: String, require: ture},
   img: [String],
});

require('./err')(BoardSchema, rndString);

var Boards = mongoose.model("Boards", BoardSchema);

exports.Users = Users;

export default db;
