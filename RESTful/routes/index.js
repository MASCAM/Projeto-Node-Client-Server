module.exports = (app) => {

    app.get('/', (req, res) => { //criando o servidor req = chamadas res = respostas

        res.statusCode = 200; //resposta de conexão efetivada
        res.setHeader('Content-Type', 'text/html'); //para processar o texto abaixo como html
        res.end('<h1>Olá</h1>'); //resposta em html
    
    });

}



