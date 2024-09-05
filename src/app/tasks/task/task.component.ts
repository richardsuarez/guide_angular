import { Component, inject, Input} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task
  private taskService = inject(TaskService);

  onCompleteTask(){
    this.taskService.removeTask(this.task.id)
  }
}
