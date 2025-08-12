'use strict'

import funcionarios from "./funcionarios/funcionarios.json" with {type: "json"}
console.log(funcionarios)




function criarImagem(funcionarios){

    const funcionariosImagem = document.getElementById('funcionarios')

    const imagemFuncionarios = document.createElement('img')
    const nomeFuncionarios = document.createElement('nome')
    const funcionariosCargo = document.createElement('cargo')


    imagemFuncionarios.src = funcionarios.imagem
    nomeFuncionarios.textContent = funcionarios.nome
    funcionariosCargo.textContent = funcionarios.cargo

    funcionariosImagem.appendChild(imagem)
    funcionariosImagem.appendChild(nome)
    funcionariosCargo.appendChild(cargo)

}

function carregarImagens () {
    
    let imagemFuncionarios = []
    carregarImagens(imagemFuncionarios)

}

carregarImagens(imagemFuncionarios)