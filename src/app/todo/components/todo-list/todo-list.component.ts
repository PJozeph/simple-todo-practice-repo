import { Component, inject, Input, OnInit } from '@angular/core';
import { ToDo } from '../../model/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {

    @Input() todos: ToDo[] = [];
}
