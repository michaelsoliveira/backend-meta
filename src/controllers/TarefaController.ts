import { Request, Response } from "express";
import tarefaService from "../services/TarefaService";
import { prismaClient } from "../database/prismaClient";

export class TarefaController {
    async store(request: Request, response: Response) : Promise<Response> {
        try {
            const tarefa = await tarefaService.create(request.body);
            return response.json({
                error: false,
                data: tarefa,
                message: `Tarefa ${tarefa.descricao} foi cadastrada com SUCESSO!!!`
            })
        } catch (error: any) {
            console.log(error.message);
            return response.json({
                error: true,
                message: error.message
            });
        }
    }

    async update(request: Request, response: Response) : Promise<any> {
        const { id } = request.params
        try {
            const tarefa = await tarefaService.update(id, request.body);
            return response.json({
                error: false,
                data: tarefa,
                message: `Tarefa ${tarefa.descricao} foi atualizada com SUCESSO!!!`
            })
        } catch (error: any) {
            console.log(error.message);
            return response.json({
                error: true,
                message: error.message
            });
        }
    }
    async findAll(request: Request, response: Response) : Promise<any> {
        try {
            const tarefas = await tarefaService.getAll();
            
            return response.json({
                error: false,
                data: tarefas
            })
        } catch (error: any) {
            return response.json({
                error: true,
                message: error.message
            });
        }
    }

    async delete(request: Request, response: Response) : Promise<any> {
        const { id } = request.params;
        const res: any = await tarefaService.delete(id);
        return response.status(200).json({
            error: res.error,
            message: res.message
        })
    }

    async findOne(request: Request, response: Response) : Promise<any> {
        const { id } = request.params as any;
        try {
            const tarefa = await tarefaService.findById(id);
            return response.status(200).json({
                tarefa
            })
        } catch(e: any) {
            return {
                error: true,
                message: e.message
            }
        }
        
    }
}