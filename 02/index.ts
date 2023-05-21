const fs1 = require('fs');

const leituraArquivo1 = (): unknown => {
    return JSON.parse(fs1.readFileSync('./bd.json'))
}

const escritaArquivo1 = (dados: any): void => {
    fs1.writeFileSync('./bd.json', JSON.stringify(dados));
}

type Endereco1 = {
    cep: string
    rua: string
    complemento?: string
    bairro: string
    cidade: string
}

type Usuario1 = {
    nome: string
    email: string
    cpf: string
    profissao?: string
    endereco: Endereco1 | null
}

const cadastroUsuario1 = (dados: Usuario1): Usuario1 => {
    const bd = leituraArquivo1() as Usuario1[]
    bd.push(dados)
    escritaArquivo1(bd)
    return dados
}

const listarUsuarios1 = (): Usuario1[] => {
    return leituraArquivo1() as Usuario1[]
}

// const hugo1 = cadastroUsuario1({
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

const arislene = cadastroUsuario1({
    nome: 'Arislene',
    email: 'arislene@gmail.com',
    cpf: '30400196813',
    profissao: 'Enfermeira',
    endereco: {
        cep: '08545150',
        rua: 'sergipe',
        bairro: 'kemel',
        cidade: 'sp'
    }
})
const bd1 = leituraArquivo1()
console.log(arislene, bd1);
