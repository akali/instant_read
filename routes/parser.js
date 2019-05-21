var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    const url = req.query.url;
    const Mercury = require('@postlight/mercury-parser');

    Mercury.parse(url).then(result => {
        // console.log(result);
        res.send(result.content);
    });
});

router.get('/json/', function(req, res, next) {

    const url = req.query.url;
    const Mercury = require('@postlight/mercury-parser');

    Mercury.parse(url).then(result => {
        // console.log(result);
        res.send(result);
    });
});

module.exports = router;
