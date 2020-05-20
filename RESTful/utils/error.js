module.exports = {

    send: (err, req, res, code = 400) => {

        console.log(`error: ${err}`);
        res.status(400).json({ //código para erro

             error: err,

        });

    }

}