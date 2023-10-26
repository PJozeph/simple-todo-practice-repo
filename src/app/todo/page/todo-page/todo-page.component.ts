import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../../model/todo.model';
import { TodoListService } from '../../services/todo-list.service';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent {
    todos: ToDo[] = [];
    completedTodos: ToDo[] = [];

    todos$: Observable<ToDo[]> = this.todoService.getTodos();

    constructor(private todoService: TodoService, private todoListService: TodoListService) {}

    ngOnInit(): void {
        this.getTodos();
        this.todoListService.todoCrudAction$.subscribe(() => {
            this.getTodos();
        });
    }

    private getTodos(): void {
        this.todoService.getTodos().subscribe(todos => {
            this.todos = todos.filter(todo => !todo.done);
            this.completedTodos = todos.filter(todo => todo.done);
        });
    }
}
