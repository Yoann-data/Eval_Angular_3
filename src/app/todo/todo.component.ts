import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() 
  data !: Todo;

  @Output()
  deleteTodo = new EventEmitter<Todo>();

  constructor(private todoService:TodoService){}

  deleteTodoClick(){
    this.deleteTodo.emit(this.data)
  }
}
