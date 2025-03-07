import { Tarefa } from "@prisma/client";
import { prismaClient } from "../database/prismaClient";

class TarefaService {
    async getAll(): Promise<TarefaType[]> {
        const tarefas = await prismaClient.tarefa.findMany()

        return tarefas;
    }

    async create(data: any): Promise<Tarefa> {
        const tarefaExists = await prismaClient.tarefa.findFirst({
            where: {
                descricao: data.descricao
            }
        });

        if (tarefaExists) {
            throw new Error("Já existe uma tarefa cadastrada com este nome.");
        }

        const tarefa = await prismaClient.tarefa.create({
            data: {
                descricao: data.descricao
            }
        });

        return tarefa;
    }

    async update(id: string, data: any) : Promise<Tarefa> {
        const tarefa = await prismaClient.tarefa.update({
            where: {
                id
            },
            data
        });

        return tarefa;
    }

    async findById(id: string): Promise<any> {
        const tarefa = await prismaClient.tarefa.findUnique({
            where: { id }
        });

        return tarefa;
    }

    async delete(id: any) : Promise<any> {
        try {
            return await prismaClient.tarefa.delete({
                where: { id }
            }).then(() => {
                return {
                    error: false,
                    message: 'Tarefa Deletada com Sucesso!'
                }
            }).catch((e) => {
                return {
                    error: true,
                    message: e.message
                }
            });
        } catch(e: any) {
            console.log(e);
            return {
                error: true,
                message: e.message
            }
        }
    }
}

export default new TarefaService;