/**
 * Created by tremaine on 12/12/15.
 */
(function(){
  var docusign = require('docusign-node'),
      async = require('async'),
      moment = require('moment');
      //templateRoles = [{email: 'tremainekbuchanan@gmail.com', name: 'Monique', roleName: 'Signer'}];


  /**
   *
   */
  exports.docusign_init = function(templateRole){
    console.log('Docusign Init');
    var integratorKey = process.env.INTEGRATOR_KEY,
        email = process.env.DOCUSIGN_EMAIL,
        password = process.env.DOCUSIGN_PWD,
        templateRoles = templateRole,
        params = {emailBlurb: "Body of Email", emailSubject: "Please Sign To Complete"};
    /**
     * Login and get templates
     */
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
        /**
         *
         * @param client
         * @param next
         */
      function getTemplates(client, next){
          client.admin.getTemplates(function(err, response){
              if(err) return next(err);

              next(null, client, response.envelopeTemplates[0].templateId);
          });
      },

        /**
         *
         * @param client
         * @param templateId
         * @param next
         */
      //function sendTemplate(client, templateId, next){
      //     client.envelopes.sendTemplate('Sent from a Template', templateId, templateRoles, params,
      //      function (err, response) {
      //        if (err) return next(err);
      //
      //        console.log('The envelope information of the created envelope is: \n' + JSON.stringify(response));
      //        next(null, client);
      //      });
      //},
        /**
         *
         * @param client
         * @param next
         */
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

        console.log(message);
    });
  };
})();



