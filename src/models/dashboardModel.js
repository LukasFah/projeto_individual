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


function obterDados(fkUsuario) {
    var instrucaoSql = `
       SELECT q.nome AS nomeQuiz,
	SUM(r.acertos) AS totalAcertos,
    SUM(r.erros) AS totalErros
FROM resultado r JOIN quiz q ON r.fkQuiz = q.idQuiz
WHERE r.fkUsuario = ${fkUsuario}
GROUP BY q.nome;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function kpis(fkUsuario) {

    var instrucaoSql = `SELECT 
         fkQuiz,
        SUM(acertos) AS totalAcertos,
        SUM(erros) AS totalErros,
        COUNT(*) AS totalQuizzes
        FROM resultado
        WHERE fkUsuario = ${fkUsuario}
        GROUP BY fkQuiz;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    historia,
    obterDados,
    kpis
};