import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../model/todo'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  displayData!:Array<Todo>
  todos: Todo[] = [];

  constructor(private todoService:TodoService){

    this.todoService.getTodos().subscribe((todoArray) => { 
      this.todos = todoArray; 

    })
  }

}
