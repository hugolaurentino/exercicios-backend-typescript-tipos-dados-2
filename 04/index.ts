const fs4 = require('fs');

const leituraArquivo4 = (): unknown => {
    return JSON.parse(fs4.readFileSync('./bd.json'))
}

const escritaArquivo4 = (dados: any): void => {
    fs4.writeFileSync('./bd.json', JSON.stringify(dados));
}

type Endereco4 = {
    cep: string
    rua: string
    complemento?: string
    bairro: string
    cidade: string
}

type Usuario4 = {
    nome: string
    email: string
    cpf: string
    profissao?: string
    endereco: Endereco4 | null
}

const cadastroUsuario4 = (dados: Usuario4): Usuario4 => {
    const bd = leituraArquivo4() as Usuario4[]
    bd.push(dados)
    escritaArquivo4(bd)
    return dados
}

const listarUsuarios4 = (): Usuario4[] => {
    return leituraArquivo4() as Usuario4[]
}

const detalharUsuarios4 = (cpf: string): Usuario4 => {
    const bd = leituraArquivo4() as Usuario4[]
    const usuario = bd.find((usuario) => {
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error("Usuario não encontrado");
    }
    return usuario
}

const atualizarUsuario4 = (cpf: string, dados: Usuario4): Usuario4 => {
    const bd = leituraArquivo4() as Usuario4[]
    const usuario = bd.find((usuario) => {
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error("Usuario não encontrado");
    }
    Object.assign(usuario, dados);
    escritaArquivo4(bd)
    return dados
}

const excluirUsuario4 = (cpf: string): Usuario4 => {
    const bd = leituraArquivo4() as Usuario4[]
    const usuario = bd.find((usuario) => {
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error("Usuario não encontrado");
    }
    const exclusao = bd.filter(usuario => {
        return usuario.cpf !== cpf
    })
    escritaArquivo4(exclusao)
    return usuario
}

// const hugo1 = cadastroUsuario4({
//     nome: 'hugo',
//     email: 'hugo@gmail.com',
//     cpf: '30400196811',
//     endereco: {
//         cep: '08545150',
//         rua: 'sergipe',
//         bairro: 'kemel',
//         cidade: 'sp'
//     }
// })

// const arislene = cadastroUsuario4({
//     nome: 'Arislene',
//     email: 'arislene@gmail.com',
//     cpf: '30400196813',
//     profissao: 'Enfermeira',
//     endereco: {
//         cep: '08545150',
//         rua: 'sergipe',
//         bairro: 'kemel',
//         cidade: 'sp'
//     }
// })

// const enrique = cadastroUsuario4({
//     nome: 'Enrique',
//     email: 'enrique@gmail.com',
//     cpf: '30400196815',
//     profissao: '',
//     endereco: {
//         cep: '08545150',
//         rua: 'sergipe',
//         bairro: 'kemel',
//         cidade: 'sp'
//     }
// })

// atualizarUsuario4('30400196815', {
//     nome: 'Enrique',
//     email: 'enrique@gmail.com',
//     cpf: '30400196815',
//     profissao: 'Programador',
//     endereco: {
//         cep: '08545150',
//         rua: 'sergipe',
//         complemento: 'casa a',
//         bairro: 'Arujá',
//         cidade: 'sp'
//     }
// })
// const enrique = detalharUsuarios4('30400196815')
console.log(excluirUsuario4('30400196815'), '\n');

const bd4 = leituraArquivo4()
console.log(bd4);
// console.log(enrique);
