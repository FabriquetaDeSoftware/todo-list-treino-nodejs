import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create_task.dto';
import { ToDoList } from '../entities/todo_list.entity';
import { ITodoListRepository } from '../interfaces/todo_list.repository.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import { ToDoStatus } from '../helpers/task_status_enum.helper';

@Injectable()
export class TodoListRepository implements ITodoListRepository {
  @Inject()
  private readonly prismaService: PrismaService;

  async createTask(task: CreateTaskDto): Promise<ToDoList> {
    const result = await this.prismaService.toDoList.create({
      data: { ...task },
    });

    return { ...result, status: result.status as ToDoStatus };
  }
}
