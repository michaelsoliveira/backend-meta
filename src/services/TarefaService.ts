import { prismaClient } from "../database/prismaClient";

class TarefaService {
    async getAll(): Promise<TarefaType[]> {
        const tarefas = await prismaClient.tarefa.findMany()

        return tarefas;
    }
}

export default new TarefaService;