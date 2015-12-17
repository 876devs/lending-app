(function(){
    var multer = require('multer'),
        express = require('express'),
        router = express.Router(),
        upload = multer({dest: 'uploads/'});

      router.post('/upload', upload.single('file'), function(req, res, next){
          res.json({message: "File Uploaded"});
      }); 

      module.exports = router;
})();

