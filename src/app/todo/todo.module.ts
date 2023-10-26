import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
    declarations: [TodoPageComponent, TodoListComponent, TodoItemComponent],
    providers: [TodoService],
    imports: [CommonModule, TodoRoutingModule, HttpClientModule],
})
export class TodoModule {}
