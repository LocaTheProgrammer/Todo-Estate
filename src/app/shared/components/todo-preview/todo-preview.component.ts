import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/model/todo.interface';
import { removeTodo } from 'src/app/redux/todos/todos.actions';
import { TodoRemoveComponent } from 'src/app/features/todos/components/todo-remove/todo-remove.component';


@Component({
  selector: 'app-todo-preview',
  templateUrl: './todo-preview.component.html',
  styleUrls: ['./todo-preview.component.scss']
})
export class TodoPreviewComponent {

  @Input()
  todo: Todo;

  @Output()
  detailEvent: EventEmitter<void> = new EventEmitter();
  
  constructor(private removeTodo: TodoRemoveComponent) { }

  detailClick() {
    this.detailEvent.emit();
  }
  
  removeClick(){
    this.removeTodo.removeTodo(this.todo);
  }

}
