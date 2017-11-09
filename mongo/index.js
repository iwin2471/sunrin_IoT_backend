import mongoose from 'mongoose';
import rndString from "randomstring";

var name = require('../package.json');
var db = mongoose.connect('mongodb://localhost/'+name.name);
mongoose.Promise = global.Promise;


var BoardSchema = mongoose.Schema({
   date: {type: String},
   place: {type: String, require: true},
   title: {type: String, require: true},
   context: {type: String, require: true},
   img: [String],
});

require('./err')(BoardSchema, rndString);

var Boards = mongoose.model("Boards", BoardSchema);

exports.Boards = Boards;

export default db;
