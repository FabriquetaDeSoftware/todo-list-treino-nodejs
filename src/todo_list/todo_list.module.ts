import { Module } from '@nestjs/common';
import { TodoListController } from './todo_list.controller';
import { TodoListRepository } from './repository/todo_list.repository';
import { CreateTaskUseCase } from './use_cases/create_task.use_case';
import { FindTaskByStatusUseCase } from './use_cases/find_task_by_status.use_case';
import { DeleteTaskByIdUseCase } from './use_cases/delete_task_by_id.use_case';
import { GetTaskByIdUseCase } from './use_cases/get_task_by_id.use_case';
import { ListAllTasksUseCase } from './use_cases/list_all_tasks.use_case';

@Module({
  controllers: [TodoListController],
  providers: [
    FindTaskByStatusUseCase,
    TodoListRepository,
    {
      provide: 'ITodoListRepository',
      useExisting: TodoListRepository,
    },
    CreateTaskUseCase,
    DeleteTaskByIdUseCase,
    GetTaskByIdUseCase,
    ListAllTasksUseCase,
  ],
})
export class TodoListModule {}
