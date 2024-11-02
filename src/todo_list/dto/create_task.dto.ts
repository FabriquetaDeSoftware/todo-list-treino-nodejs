
import {   IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { ToDoStatus } from "../helpers/task_status_enum.helper";
import { ApiProperty } from "@nestjs/swagger";


export class CreateTaskDto { 

    @ApiProperty({description:'Título da tarefa'})
    @IsString()
    @MinLength(4)
    @MaxLength(100)
    @IsNotEmpty()
    title: string;

    @ApiProperty({description: 'Corpo da tarefa'})
    @IsString()
    @MaxLength(1000)
    @IsNotEmpty()
    todo: string;

    @ApiProperty({description:'Status da tarefa', example: 'PENDING'})
    @IsString()
    @IsNotEmpty()
    status: ToDoStatus;
}

