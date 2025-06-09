var database = require("../database/config")


function historia(correta, errado, fkUsuario, fkQuiz) {
    console.log("ACESSEI O USUARIO MODEL \n\n function quiz():", fkUsuario, fkQuiz, correta, errado);

    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario,fkQuiz, acertos, erros)
        VALUES (${fkUsuario},${fkQuiz}, ${correta}, ${errado});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    historia
};