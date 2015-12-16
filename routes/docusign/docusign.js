(function(){
  var docusign = require('docusign-node'),
      async = require('async'),
      url = "http://www.goodui.org/",
      templateRoles = [{email: 'tremainekbuchanan@gmail.com', name: 'Monique King', roleName: 'Signer'}];
  /**
   *
   * @param req
   * @param res
   */
  exports.index = function(req, res){
    res.json({message: 'Docusign'});
  };
  /**
   *
   * @param req
   * @param res
   */
  exports.sendDoc = function(req, res){
    //common.docusign_init([{email: req.body.email, name: req.body.name, roleName: req.body.role}]);
    res.json({message: 'Send Docs to email'});
  };
  /**
   *
   * @param req
   * @param res
   */
  exports.sign = function(req, res){
    var integratorKey = process.env.INTEGRATOR_KEY,
        email = process.env.DOCUSIGN_EMAIL,
        password = process.env.DOCUSIGN_PWD;
    async.waterfall([
        /**
         *
         * @param next
         */
          function init (next) {
          docusign.init(integratorKey, 'demo', false, function(err, response) {
            if (err) {
              return next(err);
            }
            if (response.message === 'successfully initialized') {
              console.log(response.message);
              next(null);
            }
          });
        },
        /**
         *
         * @param next
         */
          function createClient (next) {
          docusign.createClient(email, password, function(err, client) {
            if (err) {
              return next(err);
            }
            console.log('Client Created');
            next(null, client);
          });
        },
        function getTemplates(client, next){
          client.admin.getTemplates(function(err, response){
            if(err) return next(err);

            console.log(response.envelopeTemplates[0].templateId)
           // next(null, client, response.envelopeTemplates[0].templateId);
            next(null, client);
          });
        },
        //function sendTemplate(client, templateId, next){
        //  console.log('GetView');
        //  //console.log(client);
        //  client.envelopes.sendTemplate("Test Subject", templateId, templateRoles, {"emailBlurb": "Test Body"},
        //  function(err, response){
        //
        //    next(null, client);
        //  });
        //  //client.envelopes.getView("sign", "Tremaine Buchanan", "tremainekbuchanan@gmail.com", [{}], url, null,
        //  //  function(err, response){
        //  //
        //  //    console.log(response);
        //  //    next(null,client);
        //  //});
        //  //client.envelopes.getTemplateView(templateId, "www.google.com", function(err, response){
        //  //    url = response.url;
        //  //    next(null,client);
        //  //});
        //  //next(null,client);
        // // url = "https://coi-mapping-staging.herokuapp.com/";
        //
        //},
        function logOut (client, next) {
          client.logOut(function (err, response) {
            if (err) return next(err);

            next(null, response);
          });
        }
      ],
      /**
       *
       * @param error
       */
      function complete(error){
        var message = 'Success';
        if(error) message = 'Error';

        res.json({message: url});
        //console.log(message);
      });
  };
})();

