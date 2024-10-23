let aluno = {
    "nome" : "yan",
    "idade" : 18,
    "curso" : "computação",
    "matricula" : 248165,
};

for (let propriedade in aluno) {
    if(aluno.idade >= 18)
    {
        console.log(aluno[propriedade]);
    }
    else
    {

    }
}