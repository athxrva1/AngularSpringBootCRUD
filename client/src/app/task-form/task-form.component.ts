import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<Task>();
  newTask: Task = new Task();

  onSubmit(): void {
    this.addTask.emit(this.newTask);
    this.newTask = new Task(); // Reset the form
  }
}
