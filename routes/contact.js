var express = require("express");
var router = express.Router();



router.get('/', function(req,res , next) {
    res.render('contact', { title: 'ContactPage' });
    next();
});


module.exports = router;