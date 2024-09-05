import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './tasks.service';
import { Task } from './task/task.model';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) user!: string;

  isAddingTask = false;  //this is used top show or not the window that contain the form 
  // to add a new task

  constructor(private tasksService: TaskService){}

  onSelectedUser() {
    return this.tasksService.getUserTasks(this.user) ;
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  closeWindow() {
    this.isAddingTask = false;
  }

  addTask(newTask: Task) {
    this.tasksService.addTask(newTask, this.user)
  }
}
