var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/application', function(req, res){
  console.log(req.body);
  res.end();
});

// router.get('/', function(req, res){
//   res.redirect('/');
// });

// router.get('*', function(req, res){
// 	res.render('index', { title: 'Test'});
// });

router.get('/partials/:name', function(req, res){
	res.render('partials/' + req.params.name, { title: 'Express' });
});

//router.get('*', function(req, res){
//	res.render('index', { title: 'Express' });
//});

module.exports = router;
