import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './components/main/todos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { TodosFacadeService } from './services/todos-facade.service';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { TodosNavigationEffects } from './redux/todos-navigation.effects';
import { TodoRemoveComponent } from './components/todo-remove/todo-remove.component';


@NgModule({
  declarations: [TodosComponent, TodoDetailComponent, TodoEditComponent, TodoAddComponent, TodoRemoveComponent],
  providers: [TodosFacadeService],
  imports: [
    SharedModule,
    EffectsModule.forFeature([TodosNavigationEffects]),
    TodosRoutingModule
  ]
})
export class TodosModule { }
