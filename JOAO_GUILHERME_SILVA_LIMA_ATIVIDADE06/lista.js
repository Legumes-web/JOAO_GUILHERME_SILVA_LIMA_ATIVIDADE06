let alunos = []

function cadastrar(nome, idade){
    let maioridade = idade >= 18 //tentei fazer por if e else mas tava dando muito erro ent desisti
    let aluno = {
        nome: nome,
        idade: idade,
        maioridade: maioridade
    }
    alunos.push(aluno);
}
function listarAlunos() {
    console.log("Lista de Alunos Cadastrados:");
    alunos.forEach(aluno => {
        let statusIdade = aluno.maioridade ? "Maior de Idade" : "Menor de Idade"; //descobri q ? funciona como se fosse um if, daora dms
        console.log(`Nome: ${aluno.nome}, Idade: ${aluno.idade}, ${statusIdade}`);
    });
}

// Exemplos de como colocar o cadastro
//Add o quanto quiser
cadastrar("Carlos", 17);
cadastrar("Ana", 20);
cadastrar("Julia", 18);
cadastrar("Bruno", 21);
cadastrar("Luiz", 13);
cadastrar("Breno", 16);
listarAlunos();