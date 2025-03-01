import { Request, Response } from "express";
import tarefaService from "../services/TarefaService";

export class TarefaController {
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
}