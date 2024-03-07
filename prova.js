let chamadaDeAlunos = [
    {
nome: "Roberto",
idade: 16,
materias: [
{
nome: "Tecnologias em Inteligência Artificial",
presenca: 75,
nota: 10
},
{
nome: "Programação para Dispositivos Móveis",
presenca: 90,
nota: 10
    },
],
numeroChamada: 1221
    },
    {
nome: "Ivone",
idade: 17,
materias: [
{
nome: "BD1",
presenca: 100,
nota: 10
    },
        {
            nome: "Programação para Dispositivos Móveis",
            presenca: 90,
            nota: 7.5
        },
    ],
        numeroChamada: 1222
},
{
     nome: "Sergio",
idade: 20,
materias: [
    {
        nome: "Tecnologias em Inteligência Artificial",
        presenca: 79,
        nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
        },
    ],
        numeroChamada: 1223
},
{
    nome: "Jorjao",
    idade: 19,
    materias: [
        {
            nome: "Tecnologias em Inteligência Artificial",
            presenca: 100,
            nota: 10
        },
        {
            nome: "Programação para Dispositivos Móveis",
            presenca: 79,
            nota: 10
        },
    ],
        numeroChamada: 1224
},
{
    nome: "Samantha",
    idade: 18,
    materias: [
        {
            nome: "BD2",
            presenca: 74,
            nota: 10
        },
        {
            nome: "BD1",
            presenca: 90,
            nota: 7
        },
    ],
        numeroChamada: 1225
},
]

function mostrarNomeENota(alunos) {
    for (let aluno of alunos) 
    {    
    console.log(`${aluno.nome}: ${aluno.materias.map(materia => `${materia.nome} - Nota: ${materia.nota}`).join(', ')}\n`);
}
}

function mostrarAprovados(materia) {
    return materia.filter(aluno => aluno.materias.every(materia => materia.nota >= 6 && materia.presenca >= 75));
}

function mostrarReprovados(alunos) {
    return alunos.filter(aluno => aluno.materias.some(materia => materia.nota < 6 || materia.presenca < 75));
}

function mostrarMaioresNotas(alunos) {
    const sortedAlunos = alunos.sort((a, b) => {
    const notasA = a.materias.map(materia => materia.nota);
    const notasB = b.materias.map(materia => materia.nota);
    return Math.max(...notasB) - Math.max(...notasA);
});

    return sortedAlunos.slice(0, 3);
}

function mostrarMenoresNotas(alunos) {
    const sortedAlunos = alunos.sort((a, b) => {
    const notasA = a.materias.map(materia => materia.nota);
    const notasB = b.materias.map(materia => materia.nota);
    return Math.min(...notasA) - Math.min(...notasB);
});

    return sortedAlunos.slice(0, 3);
    
}

console.log("NomeseNotas:");
mostrarNomeENota(chamadaDeAlunos);

console.log("\nAprovados:");
console.log(mostrarAprovados(chamadaDeAlunos));

console.log("\nReprovados:");
console.log(mostrarReprovados(chamadaDeAlunos));

console.log("\nMaioresNotas:");
console.log(mostrarMaioresNotas(chamadaDeAlunos));

console.log("\nMenoresNotas:");
console.log(mostrarMenoresNotas(chamadaDeAlunos));
