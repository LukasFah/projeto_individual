var database = require("../database/config")


function historia(correta, errado, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n\n function quiz():", fkUsuario,  correta, errado);

    var instrucaoSql = `
        INSERT INTO resultado (fkUsuario, acertos, erros)
        VALUES (${fkUsuario}, ${correta}, ${errado});
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}