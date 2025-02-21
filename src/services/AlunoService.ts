class AlunoService {
    async getAll(): Promise<AlunoType[]> {
        const alunos = await prismaClient.aluno.findMany()

        return alunos
    }
}

interface AlunoType {
    id: String;
    nome: String;
}