import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo} from '../model/todo';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private API_URL = "http://localhost:3000/";

  constructor(private http : HttpClient){}
  
  getTodos(): Observable<Todo[]>{

    return this.http.get<Todo[]>(this.API_URL + 'todos').pipe(map((todos) => {
      return todos.map((todo) => {
        return new Todo(todo.id, todo.title, todo.completed);
      });
    })
  );
  }

  deleteTodos(id : number){

    return this.http.delete(this.API_URL + 'todos' + id);
  
  }
}