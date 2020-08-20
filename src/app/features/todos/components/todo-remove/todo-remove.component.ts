import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/model/todo.interface';

@Component({
  selector: 'app-todo-remove',
  templateUrl: './todo-remove.component.html',
  styleUrls: ['./todo-remove.component.scss']
})
export class TodoRemoveComponent implements OnInit {
  todosFacadeService: any;

  constructor() { }

  ngOnInit(): void {
  }
  undo() {
    this.todosFacadeService.goToTodosHome();
  }

  removeTodo(todo: Todo) {
    this.todosFacadeService.removeTodo(todo);
  }
}
