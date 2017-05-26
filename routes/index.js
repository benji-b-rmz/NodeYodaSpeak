var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var unirest = require('unirest');
// router.use(bodyParser.json({ type: 'text/plain'}));
var mashape_key = "YOUR MASHAPE KEY HERE";

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Yoda Speak Demo' });

});

router.post('/api/yoda_speak', function(req, res){

    var yoda_response = "";
    console.log(req);
    // These code snippets use an open-source library. http://unirest.io/nodejs
    unirest.get("https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.")
        .header("X-Mashape-Key", mashape_key)
        .header("Accept", "text/plain")
        .end(function (result) {
            console.log(result.status, result.headers, result.body);
            yoda_response = result.body;
            res.send(result.body);
        });

});

module.exports = router;
