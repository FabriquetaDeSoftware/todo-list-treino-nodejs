import { Inject, Injectable } from "@nestjs/common";
import { CreateTaskDto } from "../dto/create_task.dto";
import { ToDoList } from "../entities/todo_list.entity";
import { ITodoListRepository } from "../interfaces/todo_list.repository.interface";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TodoListRepository implements ITodoListRepository {
    @Inject()
    private readonly prismaService: PrismaService;

    
    async createTask(task: CreateTaskDto): Promise<ToDoList> {
        return await this.prismaService.toDoList.create({data: task})
    }
    
}