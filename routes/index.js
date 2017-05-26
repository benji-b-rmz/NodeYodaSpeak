var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var mashape_key = "YOUR MASHAPE KEY HERE";

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Yoda Speak Demo' });

});

router.post('/api/yoda_speak', function(req, res){

    // format the string replacing all spaces with '+' for input to the API
    var input_text = req.body.str.replace( / /g , '+' );
    console.log(input_text);

    // These code snippets use an open-source library. http://unirest.io/nodejs
    unirest.get("https://yoda.p.mashape.com/yoda?sentence=" + input_text)
        .header("X-Mashape-Key", mashape_key)
        .header("Accept", "text/plain")
        .end(function (result) {
            console.log(result.status, result.headers, result.body);
            res.send(result.body);
        });

});

module.exports = router;
