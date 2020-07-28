import { Component, OnInit, Input } from '@angular/core';
import { TodosService, Todo } from '../shared/todos.service';
import { Observable } from 'rxjs';

@Component({
selector: 'app-todos',
templateUrl: './todos.component.html',
styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

constructor(private todosService: TodosService) { }
fetchData$: Observable<boolean>;
todos$: Observable<Todo[]>;

// receive the limit from the parent(appcomponent) via input
@Input() limit: number;

ngOnInit() {
// initialize the both observables
this.fetchData$ = this.todosService.getTodos(this.limit);
this.todos$ = this.todosService.todos$;
}

// call the service
onChange(id: number) {
this.todosService.onToggle(id);
}

// call the service
removeTodo(id: number) {
this.todosService.removeTodo(id);
}

}
