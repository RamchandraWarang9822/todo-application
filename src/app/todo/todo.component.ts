import { Component, Input } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Input() index!: number;
  @Input() toggleDone!: Function;
  @Input() deleteTodo!: Function;
  @Input() toggleStatus!: Function;
}
