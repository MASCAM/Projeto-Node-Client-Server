const { check, validationResult } = require('express-validator');

module.exports = {

    user:(app, req, res) => {

        app.post([

            check('name').not().isEmpty().withMessage('O nome é obrigatório.'), //para impedir que esses dados estejam em branco
            //check('email', 'O e-mail está inválido.').not().isEmpty().isEmail();

        ], (req, res) => {

            console.log('salve');
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
           
                console.log(res.status(422).json({ errors: errors.array() }));
                return false;
          
            } else {

                return true;

            }

        })

    }

}