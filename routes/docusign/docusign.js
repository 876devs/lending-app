(function(){
  //
// to run this sample
//  1. copy the file in your own directory - say, example.js
//  2. change "***" to appropriate values
//  3. install async and request packages
//     npm install async
//     npm install request
//  4. execute
//     node example.js
  var   	async = require("async"),		// async module
  request = require("request"),		// request module
    email = "876devs@gmail.com",				// your account email
    password = "Jamaica1#",			// your account password
    integratorKey = "DEVS-09e9f13a-7aaf-4b8e-bc16-fa10929e2d4b",
    recipientName = "Monique King",			// recipient (signer) name
    templateId = "d0458f62-ae0d-414d-837f-2af9fcc8ec0a",			// provide valid templateId from a template in your account
    templateRoleName = "Signer",		// template role that exists on template referenced above
    baseUrl = "",				// we will retrieve this
    envelopeId = "";			// created from step 2

exports.index = function(req, res){
    async.waterfall(
    [
      //////////////////////////////////////////////////////////////////////
      // Step 1 - Login (used to retrieve accountId and baseUrl)
      //////////////////////////////////////////////////////////////////////
      function(next) {
        var url = "https://demo.docusign.net/restapi/v2/login_information";
        var body = "";	// no request body for login api call

        // set request url, method, body, and headers
        var options = initializeRequest(url, "GET", body, email, password);

        // send the request...
        request(options, function(err, res, body) {
          if(!parseResponseBody(err, res, body)) {
            return;
          }
          baseUrl = JSON.parse(body).loginAccounts[0].baseUrl;
          next(null); // call next function
        });
      },

      //////////////////////////////////////////////////////////////////////
      // Step 2 - Send envelope with one Embedded recipient (using clientUserId property)
      //////////////////////////////////////////////////////////////////////
      function(next) {
        var url = baseUrl + "/envelopes";
        var body = JSON.stringify({
          "emailSubject": "DocuSign API call - Embedded Sending Example",
          "templateId": templateId,
          "templateRoles": [{
            "email": "tremainekbuchanan@gmail.com",
            "name": recipientName,
            "roleName": templateRoleName,
            "clientUserId": "1001"	// user-configurable
          }],
          "status": "sent"
        });

        // set request url, method, body, and headers
        var options = initializeRequest(url, "POST", body, email, password);

        // send the request...
        request(options, function(err, res, body) {
          if(!parseResponseBody(err, res, body)) {
            return;
          }
          // parse the envelopeId value from the response
          envelopeId = JSON.parse(body).envelopeId;
          next(null); // call next function
        });
      },

      //////////////////////////////////////////////////////////////////////
      // Step 3 - Get the Embedded Signing View (aka the recipient view)
      //////////////////////////////////////////////////////////////////////
      function(next) {
        var url = baseUrl + "/envelopes/" + envelopeId + "/views/recipient";
        var method = "POST";
        var body = JSON.stringify({
          "returnUrl": "http://localhost:3000/#/submit",
          "authenticationMethod": "email",
          "email": "tremainekbuchanan@gmail.com",
          "userName": recipientName,
          "clientUserId": "1001",	// must match clientUserId in step 2!
        });

        // set request url, method, body, and headers
        var options = initializeRequest(url, "POST", body, email, password);

        // send the request...
        request(options, function(err, res, body) {
          if(!parseResponseBody(err, res, body))
            return;
          else
            console.log("\nNavigate to the above URL to start the Embedded Signing workflow...");
        });
      }
    ]);

//***********************************************************************************************
// --- HELPER FUNCTIONS ---
//***********************************************************************************************
  function initializeRequest(url, method, body, email, password) {
    var options = {
      "method": method,
      "uri": url,
      "body": body,
      "headers": {}
    };
    addRequestHeaders(options, email, password);
    return options;
  }

///////////////////////////////////////////////////////////////////////////////////////////////
  function addRequestHeaders(options, email, password) {
    // JSON formatted authentication header (XML format allowed as well)
    dsAuthHeader = JSON.stringify({
      "Username": email,
      "Password": password,
      "IntegratorKey": integratorKey	// global
    });
    // DocuSign authorization header
    options.headers["X-DocuSign-Authentication"] = dsAuthHeader;
  }

///////////////////////////////////////////////////////////////////////////////////////////////
  function parseResponseBody(err, res, body) {
    console.log("\r\nAPI Call Result: \r\n", JSON.parse(body));
    if( res.statusCode != 200 && res.statusCode != 201)	{ // success statuses
      console.log("Error calling webservice, status is: ", res.statusCode);
      console.log("\r\n", err);
      return false;
    }
    return true;
  }
  res.end();
}

})();
