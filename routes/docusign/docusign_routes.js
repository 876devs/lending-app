/**
 * Created by tremaine on 12/12/15.
 */
/**
 * Endpoints to handle sending documents
 * to clients.
 */
(function(){
  var express = require('express');
  var router = express.Router();
  var Docusign = require('./docusign');

  router.get('/docusign', Docusign.index);
  //router.post('/send', Docusign.sendDoc);
  //router.get('/esign', Docusign.sign);

  module.exports = router;
})();
