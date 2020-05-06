import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../todo.service';
import {Todo} from '../todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  removeTodo() {
    this.todoService.removeTodo(this.todo.id);
  }

}
