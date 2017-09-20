var express = require('express');
var router = express.Router();
var bittrex = require('node.bittrex.api');
bittrex.options({
  'apikey' : 'API_KEY',
  'apisecret' : 'API_SECRET',
});
/* GET users listing. */
router.get('/marketdata', function(req, res, next) {
  bittrex.getmarketsummaries( function( data, err ) {
    if (err) {
      return console.error(err);
    }
    res.send(data);
    //}
  });
});

router.get('/currencies', function ( req, res, next ) {
  bittrex.sendCustomRequest( 'https://bittrex.com/api/v1.1/public/getcurrencies', function( data, err ) {
    if(err){
      return console.error(err)
    }else{
      res.send(data)
    }
  });
})

module.exports = router;
