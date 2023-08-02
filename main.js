function ProfissionalEscolar(nome, idade, genero, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.profissao = profissao;

    this.bio = function() {
    console.log(this.nome + ' tem ' + this.idade + ' anos e se identifica com o gênero ' + this.genero + '. Na escola trabalha como ' + this.profissao + '.');
    }
}

function Professor(nome, idade, genero, profissao, materia) {
    ProfissionalEscolar.call(this, nome, idade, genero, profissao);
    this.materia = materia;

    this.bio = function() {
        console.log(this.nome + ' tem ' + this.idade + ' anos e se identifica com o gênero ' + this.genero + '. Na escola trabalha como ' + this.profissao + ' de ' + this.materia + '.');
    }
}

function Psicologo(nome, idade, genero, profissao, area) {
    ProfissionalEscolar.call(this, nome, idade, genero, profissao);
    this.area = area;

    this.bio = function() {
        console.log(this.nome + ' tem ' + this.idade + ' anos e se identifica com o gênero ' + this.genero + '. Trabalha como ' + this.profissao + ' na área ' + this.area + '.');
    }
}

function ServiçosGerais(nome, idade, genero, profissao, funcao) {
    ProfissionalEscolar.call(this, nome, idade, genero, profissao);
    this.funcao = funcao;

    this.bio = function() {
        console.log(this.nome + ' tem ' + this.idade + ' anos e se identifica com o gênero ' + this.genero + '. Na escola trabalha nos ' + this.profissao + ' com a função da ' + this.funcao + '.');
    }
}

const yasmin = new Professor('Yasmin', 28, 'feminino', 'professora', 'matemática');
yasmin.bio();

const pedro = new ServiçosGerais('Pedro', 35, 'masculino', 'serviços gerais', 'limpeza');
pedro.bio();

const paula = new Psicologo('Paula', 38, 'feminino', 'psicóloga', 'escolar');
paula.bio();

const carlos = new ProfissionalEscolar('Carlos', 40, 'masculino', 'diretor');
carlos.bio();