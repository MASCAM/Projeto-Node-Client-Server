//nodemon index para iniciar o server
const express = require('express'); //carregando o módulo http
const consign = require('consign');
const bodyParser = require('body-parser'); //carregando todos os pacotes do package.json


let app = express(); //chamando o módulo express pro aplicativo
app.use(bodyParser.urlencoded({extended: false})); //para poder carregar url codificada?
app.use(bodyParser.json()); //carregando o método json do bodyParser pra aplicação


consign().include('routes').include('utils').into(app); //incluir todos os arquivos de routes pro aplicativo

/*let routesIndex = require('./routes/index'); //carregando as rotas dos arquivos nas variáveis
let routesUsers = require('./routes/users');

app.use(routesIndex);
app.use('/users', routesUsers); //chamando as rotas index e users*/ // resquício de código para exemplo sem consign

app.listen(4000, '127.0.0.1', () => { //cria um listener na porta 3000 no ip indicado

    console.log('servidor rodando!');

});


