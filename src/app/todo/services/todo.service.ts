import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../model/todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    constructor(private httpClient: HttpClient) {}

    public getTodos(): Observable<ToDo[]> {
        return this.httpClient.get<ToDo[]>('http://localhost:3000/todo');
    }

    public updateTodo(todo: ToDo): Observable<ToDo> {
        return this.httpClient.put<ToDo>(`http://localhost:3000/todo/${todo.id}`, todo);
    }

    //delete
    public deleteTodoById(id: number): Observable<ToDo> {
        return this.httpClient.delete<ToDo>(`http://localhost:3000/todo/${id}`);
    }

    //create
    public createTodoById(todo: ToDo): Observable<ToDo> {
        return this.httpClient.post<ToDo>(`http://localhost:3000/todo`, todo);
    }
}
