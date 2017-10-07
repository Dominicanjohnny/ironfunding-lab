var express = require('express');
var router = express.Router();


// routes/index.js
// ...
const Campaign = require('../models/campaign');
// ...
router.get('/', (req, res, next) => {
  console.log('IN THE / ROUTE!!!~~~~~');
  // New
  Campaign
    .find({})
    .populate('_creator')
    .exec((err, campaigns) => {
      console.log('this is working!!!~~~~~~~~~~~');
      res.render('index', { campaigns });
    });
  // New
});



module.exports = router;
