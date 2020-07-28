
import { Component, OnInit } from '@angular/core';
// we import both the interface Todo as well as the TodoService
import { Todo, TodosService } from '../shared/todos.service';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.css']
    })

export class FormComponent implements OnInit {
// title will be bound to the title input of the form
title: string = '';

// we use dependancy injection to inject the TodosService
constructor(private todosService: TodosService) { }

ngOnInit() {

}

addTodo() {
//construct todo object and add it using the service
const todo: Todo = {
id: Date.now(),
title: this.title,
complete: false,
}
this.todosService.addTodo(todo);
}
}