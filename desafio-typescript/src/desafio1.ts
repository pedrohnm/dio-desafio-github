//Enunciado:
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//let employee = {};
//employee.code = 10;
//employee.name = "John";


//Resolução:

interface IFuncionario {
    codigo: number,
    nome: string
}

let funcionario1: IFuncionario = {
    codigo: 10,
    nome: 'John'
}