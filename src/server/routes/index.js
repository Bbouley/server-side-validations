var express = require('express');
var router = express.Router();
var emails = ['guy@aol.com', 'girl@yahoo.com', 'goforest@yababy.org','bigpapa@mmmmm.com']
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Form Validation' });
});

router.post('/', function(req, res, next) {
      var opt = req.body.option;
      var email = req.body.email;
      var errors = req.body.option;
      if (emails.indexOf(email) !== -1){
          res.render('index', {
          title: 'some errors',
          errors: ['email already exists']
         })
      }

      if(!opt){
        res.render('index', {title: 'some errors:',
        errors:['No Hate Mail Pls.']
      })
      } else {

    res.status(200).render('index', { title: 'You done a validate.' })
  }
});


module.exports = router;

function validate(body) {
  var errors = [];

  if(( emails.indexOf(email)!== -1 ){
    errors.push('email already exists.')
  }
  if((!body.option)!== -1 ){
    errors.push('email already exists.')
  }
  return errors;
}
