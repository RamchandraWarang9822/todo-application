import { Component } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  inputTitle: string = '';
  inputDescription: string = '';
  inputDueDate: Date = new Date(); 
  todos: Todo[] = [];

  ngOnInit() {
    // Retrieve the todo items from local storage
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  toggleStatus(id: number) {
    if (this.todos[id]) {
      this.todos[id].status = !this.todos[id].status;
      this.updateLocalStorage();
    }
  }
  

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    this.updateLocalStorage();
  }

  addTodo() {
    if (this.inputTitle.trim().length === 0 || this.inputDescription.trim().length === 0 || !this.inputDueDate) {
      return;
    }

    const newTodo: Todo = {
      title: this.inputTitle,
      description: this.inputDescription,
      dueDate: this.inputDueDate,
      status: false
    };

    this.todos.push(newTodo);
    this.updateLocalStorage();
    this.inputTitle = '';
    this.inputDescription = '';
    this.inputDueDate = new Date(); // Reset the due date to the current date and time after adding a todo
  }

  deleteAllToDos() {
    this.todos = [];
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
