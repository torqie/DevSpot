var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET github jobs listings in Atlanta */
router.get('/jobs', function(req, res, next) {
  axios.get('http://jobs.github.com/positions.json?location=newyork')
  	.then(({data})=>{
  		res.json(data);
  	}).catch((error)=>{
      res.status(500).send(error)
    });

});

/* GET individual github job listing in Atlanta */
router.get('/jobs/:id', function(req, res, next) {
  axios.get('http://jobs.github.com/positions/' + req.params.id + '.json')
  	.then(({data})=>{
      res.json(data);
    }).catch((error)=>{
      res.status(500).send(error)
    });
});

module.exports = router;
