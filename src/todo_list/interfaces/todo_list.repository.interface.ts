import { CreateTaskDto } from '../dto/create_task.dto';
import { ToDoList } from '../entities/todo_list.entity';
import { ToDoStatus } from '../helpers/task_status_enum.helper';

export interface ITodoListRepository {
  createTask(task: CreateTaskDto): Promise<ToDoList>;
  listAllTask(): Promise<ToDoList[]>;
  getTaskByStatus(statusTask: ToDoStatus): Promise<ToDoList[]>;
  getTaskById(id: number): Promise<ToDoList>;
  deleteTaskById(id: number): Promise<void>;
}
