import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TodoListService {
    public todoCrudAction$: Subject<void> = new Subject<void>();

    constructor() {}
}
