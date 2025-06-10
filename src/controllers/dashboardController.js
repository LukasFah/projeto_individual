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

function obterDados(req, res) {

    var fkUsuario = req.params.fkUsuario

    dashboardModel.obterDados(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function kpis(req, res) {

    var fkUsuario = req.params.fkUsuario
   // const limite_linhas = 2;
    // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    dashboardModel.kpis(fkUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    historia,
    obterDados,
    kpis
}