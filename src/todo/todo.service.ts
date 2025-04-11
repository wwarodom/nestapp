import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private readonly todoModel: typeof Todo,
  ) { }

  async create(createTodoDto: CreateTodoDto) {
    return await this.todoModel.create(createTodoDto as Partial<Todo>);
  }

  async findAll() {
    return await this.todoModel.findAll({
      order: [['id', 'desc']],
    });
  }

  async findOne(id: number) {
    return await this.todoModel.findByPk(id);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.todoModel.update(updateTodoDto, {
      where: { id: id },
    });
  }

  async remove(id: number) {
    // destroy -> return number of record
    return await this.todoModel.destroy({
      where: { id: id },
    });
  }
}
