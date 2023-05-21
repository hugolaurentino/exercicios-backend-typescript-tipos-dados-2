const fs = require('fs');

const leituraArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('./bd.json'))
}

const escritaArquivo = (dados: any): void => {
    fs.writeFileSync('./bd.json', JSON.stringify(dados));
}

// const dados = leituraArquivo() as string[];
// dados.push('Arislene')
// escritaArquivo(dados)
// console.log(leituraArquivo());

type Endereco = {
    cep: string
    rua: string
    complemento?: string
    bairro: string
    cidade: string
}

type Usuario = {
    nome: string
    email: string
    cpf: string
    profissao?: string
    endereco: Endereco | null
}

const cadastroUsuario = (dados: Usuario): Usuario => {
    const bd = leituraArquivo() as Usuario[]
    bd.push(dados)
    escritaArquivo(bd)
    return dados
}

// const victor = cadastroUsuario({
//     nome: 'Victor',
//     email: 'victor@gmail.com',
//     cpf: '30400196811',
//     endereco: {
//         cep: '08545150',
//         rua: 'sergipe',
//         bairro: 'kemel',
//         cidade: 'sp'
//     }
// })

const listarUsuarios = (filtro?: string): Usuario[] => {
    const bd = leituraArquivo() as Usuario[]
    const usuarios = bd.filter(usuario => {
        if (filtro) {
            return usuario.profissao === filtro
        }
        return usuario
    })
    return usuarios
}


const detalharUsuarios = (cpf: string): Usuario => {
    const bd = leituraArquivo() as Usuario[]
    const usuario = bd.find((usuario) => {
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error("Usuario não encontrado");
    }
    return usuario
}

const atualizarUsuario = (cpf: string, dados: Usuario): Usuario => {
    const bd = leituraArquivo() as Usuario[]
    const usuario = bd.find((usuario) => {
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error("Usuario não encontrado");
    }
    Object.assign(usuario, dados);
    escritaArquivo(bd)
    return dados
}


const excluirUsuario = (cpf: string): Usuario => {
    const bd = leituraArquivo() as Usuario[]
    const usuario = bd.find((usuario) => {
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error("Usuario não encontrado");
    }
    const exclusao = bd.filter(usuario => {
        return usuario.cpf !== cpf
    })
    escritaArquivo(exclusao)
    return usuario
}



// atualizarUsuario('30400196813', {
//     nome: 'Arislene Nascimento',
//     email: 'arislene@gmail.com',
//     cpf: '30400196813',
//     profissao: 'backend',
//     endereco: {
//         cep: '08545150',
//         rua: 'sergipe',
//         complemento: 'casa 51',
//         bairro: 'kemel',
//         cidade: 'sp'
//     }
// })

// cadastroUsuario({
//     nome: 'Enrique Tomaz',
//     email: 'enrique@gmail.com',
//     cpf: '30400196809',
//     profissao: 'backend',
//     endereco: {
//         cep: '08545150',
//         rua: 'sergipe',
//         bairro: 'kemel',
//         cidade: 'sp'
//     }
// })

// const bd = leituraArquivo()
// console.log(victor, bd);
// const bd = leituraArquivo()
const bd = listarUsuarios('fullstack')
console.log(bd);
