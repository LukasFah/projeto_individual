var dashboardModel = require("../models/dashboardModel");


function historia(req, res) {
    var correta = req.body.corretaServer;
    var errado = req.body.erradoServer;
    var fkUsuario = req.body.fkUsuarioServer;
    var fkQuiz = req.body.fkQuizServer;

    dashboardModel.historia(correta, errado, fkUsuario, fkQuiz)
        .then(
            function (resultado) {
                res.json(resultado);
                console.log("Cheguei na controller historia()");
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao mandar os dados do quiz para o bd! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    historia
}