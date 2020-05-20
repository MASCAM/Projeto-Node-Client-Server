var express = require('express');
var assert = require('assert');
var restify = require('restify-clients'); //requerimento dos módulos
var router = express.Router();

// Creates a JSON client

var client = restify.createJSONClient({ //cria meu client na porta 4000

  url: 'http://localhost:4000/',

});



/* GET users listing. */
router.get('/', function(req, res, next) {

  client.get('/users', function (err, request, response, obj) { //para chamar a rota /users

    assert.ifError(err);
    res.end(JSON.stringify(obj, null, 2));

  })

});

module.exports = router;
