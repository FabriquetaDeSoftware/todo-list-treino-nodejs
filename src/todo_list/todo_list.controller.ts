import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateTaskUseCase } from './use_cases/create_task.use_case';
import { CreateTaskDto } from './dto/create_task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ToDoList')
@Controller('task')
export class TodoListController {

    @Inject()
    private readonly createTaskUseCase: CreateTaskUseCase;

    @Post('create')
    createTask(@Body() task: CreateTaskDto){
        console.log(task)
        return this.createTaskUseCase.execute(task);
    }

    
}



