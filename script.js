//titulo e conteudo 

const gerenciadorDeNotas = {
    notasAlunos: [
        {aluno: 'Ana', media: 8},
        {aluno: 'Davi', media: 9},
        {aluno: 'Gabriel', media: 10}
    ],
        adicionarNotas: function (alunoNovo, mediaNova) {
            return this.notasAlunos.push ( {aluno: alunoNovo, media: mediaNova} );
        },

        buscarNota: function(aluno) {
            return this.notasAlunos.find ((notasAlunos) => notasAlunos.aluno.includes(aluno));
        }
};

gerenciadorDeNotas.adicionarNotas('Lucas', 7);
gerenciadorDeNotas.adicionarNotas('clara', 7.5);

console.log(gerenciadorDeNotas.buscarNota('Davi'));

//console.log(gerenciadorDeNotas.notasAlunos);