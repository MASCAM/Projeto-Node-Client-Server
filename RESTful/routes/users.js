const { check, validationResult } = require('express-validator'); 

let NeDB = require('nedb');
let db = new NeDB({

    filename: 'users.db',
    autoload: true,

})

module.exports = (app) => { //função q já recebe o app pelo consign

    let route = app.route('/users');
    route.get((req,res) => { //criando rota para users

        db.find({}).sort({name: 1}).exec((err, users) => { //acha os objetos em db e os lista pelo nome na ordem crescente(1 para crescente e -1 para decrescente)

            if (err){

                app.utils.error.send(err, req, res); //para enviar notificação de erro

            } else {

                res.statusCode = 200; //resposta de conexão efetivada
                res.setHeader('Content-Type', 'application/json');
                res.json({
    
                    users,
    
                });

            }

        }); 
    
    });//fechando rota users
    
    route.post([

        check('name').not().isEmpty().withMessage('O nome é obrigatório.'), //para impedir que esses dados estejam em branco
        check('email').isEmail().withMessage('O e-mail está inválido.'),

    ], (req,res) => { //criando rota postar usuários no db
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           
            return res.status(422).json({ errors: errors.array() });
          
        } 
        db.insert(req.body, (err, user) => { //para inserir os dados enviados via POST no db

            if (err) {

                app.utils.error.send(err, req, res); //para enviar notificação de erro

            } else {

                res.status(200).json(user); //código para sucesso e retorna o json com os dados do usuário

            }

        });
    
    }); //fechando rota post

    let routeId = app.route('/users/:id');

    routeId.get((req,res) => { //rota para procurar um usuário com ID específico

        db.findOne({_id:req.params.id}).exec((err, user) => { //manda solicitação para achar um usuário com o ID especificado

            if (err) {

                app.utils.error.send(err, req, res); //para enviar notificação de erro

            } else {

                res.status(200).json(user); //código para sucesso e retorna o json com os dados do usuário

            }

        });

    }); //fechando rota para procurar usuário por ID

    routeId.put([

        check('name').not().isEmpty().withMessage('O nome é obrigatório.'), //para impedir que esses dados estejam em branco
        check('email').isEmail().withMessage('O e-mail está inválido.'),

    ], (req,res) => { //rota com método para alterar os dados de um usuário específico

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
           
            return res.status(422).json({ errors: errors.array() });
          
        }
        db.update({_id:req.params.id}, req.body, err => { //manda solicitação para alterar os dados do usuário com o ID especificado

            if (err) {

                app.utils.error.send(err, req, res); //para enviar notificação de erro

            } else {

                res.status(200).json(Object.assign(req.params, req.body)); //código para sucesso e retorna o json com os dados do usuário

            }

        });

    }); //fechando rota para atualizar os dados do usuário

    routeId.delete((req,res) => { //rota com método para deletar um usuário pelo ID

        db.remove({_id:req.params.id}, {}, err => {

            if (err) {

                app.utils.error.send(err, req, res); //para enviar notificação de erro

            } else {

                res.status(200).json(req.params); //código para sucesso e retorna o json com os dados do usuário

            }

        });

    }); //fechando routeID.delete

} //fechando módulo