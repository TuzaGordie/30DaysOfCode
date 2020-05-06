import { Component, OnInit, Input } from '@angular/core';
import {TodoService} from './todo.service';
import {Todo} from './todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(public todoService: TodoService) {
  }

  ngOnInit() {
  }
}
