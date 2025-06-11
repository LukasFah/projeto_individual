var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/historia", function (req, res) {
    dashboardController.historia(req, res);
})

router.get("/obterDados/:fkUsuario", function (req, res) {
   dashboardController.obterDados(req, res);
});

router.get("/kpis/:fkUsuario", function (req, res) {
   dashboardController.kpis(req, res);
});

router.get("/desempenho/:fkUsuario", function (req, res) {
   dashboardController.desempenho(req, res);
});



module.exports = router;