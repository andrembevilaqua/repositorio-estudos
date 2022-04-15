const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C'
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2A'
    },
];


function alunosAprovados(arr, media){
    let aprovados = [];
    
    for (let i = 0; i < arr.length; i++){
        const {nome, nota} = arr[i];
    
        if (nota >= media){
            aprovados.push(nome);
        }
    }     
    
    /*
    for (let i = 0; i < arr.length; i++){
        if (arr[i].nota >= media){
            aprovados.push(arr[i].nome);
        }
    }*/

    return aprovados;
}

console.log(alunosAprovados(alunos,7));