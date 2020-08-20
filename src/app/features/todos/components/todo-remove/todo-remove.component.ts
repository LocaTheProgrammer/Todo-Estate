import { TodosFacadeService } from './../../services/todos-facade.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from 'src/app/core/model/todo.interface';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, switchMap } from 'rxjs/operators';
import { getTodoById, getCurrentNavigatedTodo } from 'src/app/redux/todos';

@Component({
  selector: 'app-todo-remove',
  templateUrl: './todo-remove.component.html',
  styleUrls: ['./todo-remove.component.scss']
})
export class TodoRemoveComponent {
  get todo(): Observable<Todo>{
    return this.store.pipe(select(getCurrentNavigatedTodo));
  }

  constructor(private todosFacadeService: TodosFacadeService, private store: Store) {
  }
  ngOnInit(): void {
  }
  undo() {
    this.todosFacadeService.goToTodosHome();
  }

  removeTodo(todo: Todo) {
    this.todosFacadeService.removeTodo(todo.id);
  }
}
