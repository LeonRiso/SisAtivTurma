const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

const create = async (req, res) => {
    console.log(req.body);  // Isso vai mostrar no console o que está chegando no req.body
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ erro: "Nome, email e senha são obrigatórios" });
    }

    try {
        const hashedSenha = await bcrypt.hash(senha, 10);

        const professor = await prisma.professor.create({
            data: {
                nome,
                email,
                senha: hashedSenha
            }
        });

        return res.status(201).json(professor);

    } catch (error) {
        console.error("Erro ao criar professor: ", error);
        return res.status(500).json({ erro: "Erro ao criar professor" });
    }
}


const read = async (req, res) => {
    const professores = await prisma.professor.findMany();
    return res.json(professores);
}

const login = async (req, res) => {
    console.log(req.body);
    const { email, senha } = req.body;

    // Validate input
    if (!email || !senha) {
        return res.status(400).json({ erro: "Requisição inválida: {email, senha} são obrigatórios" });
    }

    try {
        // Find the professor by email
        const professor = await prisma.professor.findUnique({
            where: { email: email },
            select: {
                id: true,
                nome: true,
                email: true,
                senha: true 
            }
        });
        
        if (professor) {
            return res.json(professor);
        } else {
            return res.status(404).json({ erro: "Professor não encontrado" }).end();
        }
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        return res.status(500).json({ erro: "Erro interno do servidor" });
    }
};

module.exports = {
    read,
    login,
    create
};