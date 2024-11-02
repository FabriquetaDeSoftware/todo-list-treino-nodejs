import { CreateTaskDto } from '../dto/create_task.dto';
import { ToDoList } from '../entities/todo_list.entity';

export interface ITodoListRepository {
  createTask(task: CreateTaskDto): Promise<ToDoList>;
}
