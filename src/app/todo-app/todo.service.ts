import { Injectable } from '@angular/core';
import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[];
  nextId: number;

  constructor() {
    this.todos = [
      new Todo(0, 'Gordie says Hi')
    ];

    this.nextId = 1;
  }

  addTodo(text: string) {
    const todo = new Todo(this.nextId, text);
    this.todos.push(todo);
    this.nextId++;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  setLocalStorageTodo(todos: Todo[]) {
    localStorage.setItem('todos', JSON.stringify({ todos }));
  }
}
