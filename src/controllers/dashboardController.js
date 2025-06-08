var dashboardModel = require("../models/dashboardModel");


function historia(req, res) {
   var correta = req.body.corretaServer;
    var errado = req.body.erradoServer;
    var fkUsuario = req.body.fkUsuarioServer;
        dashboardModel.historia(correta, errado, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
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