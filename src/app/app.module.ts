import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';


//we import httpclientmodule to be able to perform http requests
import { HttpClientModule } from '@angular/common/http';

// we import forms module to be able to use 2-way [(binding)]
import { FormsModule } from '@angular/forms';
import { FormComponent } from './todo-form/todo-form.component';

@NgModule({
declarations: [
AppComponent,
TodosComponent,
FormComponent
],

schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
// and place it (FormsModule) inside modules to be visible by all derived services and componenets
imports: [
BrowserModule,
HttpClientModule,
FormsModule // we add into imports the formsmodule to be accessible by the components
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }