import { Component, Input } from '@angular/core';
import { ToDo } from '../../model/todo.model';
import { TodoListService } from '../../services/todo-list.service';
import { TodoService } from '../../services/todo.service';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
    @Input() todo: ToDo = {} as ToDo;

    constructor(private todoService: TodoService, private todoListService: TodoListService) {}

    public onToggle(): void {
        this.todo.done = true;
        this.todoService.updateTodo(this.todo).subscribe(() => {
            this.todoListService.todoCrudAction$.next();
        });
    }
}
