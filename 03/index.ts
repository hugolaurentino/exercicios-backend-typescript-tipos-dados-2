const fs2 = require('fs');

const leituraArquivo2 = (): unknown => {
    return JSON.parse(fs2.readFileSync('./bd.json'))
}

const escritaArquivo2 = (dados: any): void => {
    fs2.writeFileSync('./bd.json', JSON.stringify(dados));
}

type Endereco2 = {
    cep: string
    rua: string
    complemento?: string
    bairro: string
    cidade: string
}

type Usuario2 = {
    nome: string
    email: string
    cpf: string
    profissao?: string
    endereco: Endereco2 | null
}

const cadastroUsuario2 = (dados: Usuario2): Usuario2 => {
    const bd = leituraArquivo2() as Usuario2[]
    bd.push(dados)
    escritaArquivo2(bd)
    return dados
}

const listarUsuarios2 = (): Usuario2[] => {
    return leituraArquivo2() as Usuario2[]
}

const detalharUsuarios2 = (cpf: string): Usuario2 => {
    const bd = leituraArquivo2() as Usuario2[]
    const usuario = bd.find((usuario) => {
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error("Usuario não encontrado");
    }
    return usuario
}

const atualizarUsuario2 = (cpf: string, dados: Usuario2): Usuario2 => {
    const bd = leituraArquivo2() as Usuario2[]
    const usuario = bd.find((usuario) => {
        return usuario.cpf === cpf
    })
    if (!usuario) {
        throw new Error("Usuario não encontrado");
    }
    Object.assign(usuario, dados);
    escritaArquivo2(bd)
    return dados
}

// const hugo1 = cadastroUsuario2({
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

// const arislene = cadastroUsuario2({
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

// const enrique = cadastroUsuario2({
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

atualizarUsuario2('30400196815', {
    nome: 'Enrique',
    email: 'enrique@gmail.com',
    cpf: '30400196815',
    profissao: 'Programador',
    endereco: {
        cep: '08545150',
        rua: 'sergipe',
        complemento: 'casa a',
        bairro: 'kemel',
        cidade: 'sp'
    }
})
// const enrique = detalharUsuarios2('30400196815')
const bd2 = leituraArquivo2()
console.log(bd2);
// console.log(enrique);
