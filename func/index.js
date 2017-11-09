var multer = require('multer');
var Q = require('q');

var boardupload = (req, res) => {
  var deferred = Q.defer();
  var storage = multer.diskStorage({
  // 서버에 저장할 폴더
    destination: function (req, file, cb) {
      cb(null, "upload/");
    },
        // 서버에 저장할 파일 명
    filename: function (req, file, cb) {

      file.uploadedFile = {
        name: file.mimetype.split('/')[0],
        ext: file.mimetype.split('/')[1]
      };

      cb(null, file.uploadedFile.name + '.' + file.uploadedFile.ext);
    }
  });

  var upload = multer({ storage: storage }).single('file');
    upload(req, res, function (err) {
    if (err) deferred.reject();
    else if (req.file === undefined){
      var token = req.body.token;
      var newName = req.body.newName;

      Users.update({token: token}, {$set: {name: newName}}, function(err, result){
        if(err) res.status(409).send("DB error");
        if(result) res.status(200).json({name: newName});
      });

    }else deferred.resolve(req.file.uploadedFile);

    });
    return deferred.promise;
};


function user_duplicate(message) {
  this.message = (message || "");
}
function ValidationError(message) {
  this.message = (message || "");
}
function paramsError(message) {
  this.message = (message || "");
}

user_duplicate.prototype = new Error();
ValidationError.prototype = new Error();
paramsError.prototype = new Error();

global.user_duplicate = user_duplicate;
global.ValidationError = ValidationError;
global.paramsError = paramsError;
global.boardupload = boardupload;
global.check_param = (req_param, params) =>{
  return
}
