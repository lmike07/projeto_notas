//titulo e conteudo 

const gerenciadorDeNotas = {
    notasAlunos: [
        {id: 1, aluno: 'Ana', media: 8},
        {id: 2, aluno: 'Davi', media: 9},
        {id: 3, aluno: 'Gabriel', media: 10}
    ],
        adicionarAluno: function (idNovoAluno, alunoNovo, mediaNova) {
            return this.notasAlunos.push ( {id: idNovoAluno, aluno: alunoNovo, media: mediaNova} );
        },

        buscarAluno: function(aluno) {
            return this.notasAlunos.find ((notasAlunos) => notasAlunos.aluno.includes(aluno));
        },

        buscarAlunos: function (aluno) {
            return this.notasAlunos.filter((notasAlunos) => notasAlunos.aluno.includes(aluno));
        },

        atualizarAluno: function(id, alunoEditado, mediaEditada) {
            const posicao = this.notasAlunos.findIndex((notasAlunos) => notasAlunos.id === id);

            if(posicao < 0) {
                return 'aluno não encontrado';
            }

            gerenciadorDeNotas.notasAlunos[posicao] = {id: id, notasAlunos: alunoEditado, media: mediaEditada};


            return gerenciadorDeNotas.notasAlunos

        },

        excluirAluno: function(id) {
            const posicao = gerenciadorDeNotas.notasAlunos.findIndex((notasAlunos) => notasAlunos.id === id);

            if(posicao < 0) {
                return 'aluno não existe';
            }

            gerenciadorDeNotas.notasAlunos.splice(posicao, 1);

            return gerenciadorDeNotas.notasAlunos;

        }
};

gerenciadorDeNotas.adicionarAluno(4, 'Lucas', 7);
gerenciadorDeNotas.adicionarAluno(5, 'clara', 7.5);

 //console.log(gerenciadorDeNotas.atualizarAluno(3, 'Maycon', 8.9));

 console.log(gerenciadorDeNotas.excluirAluno(3));

//console.log(gerenciadorDeNotas.notasAlunos);