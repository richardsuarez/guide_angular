import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() closeWindow = new EventEmitter<void>();
  @Input({required:true}) userId!: string ;

  title = '';
  summary = '';
  date = '';

  private taskService = inject(TaskService);

  onCancel(){
    this.closeWindow.emit();
  }

  onSubmit(){
    this.taskService.addTask(
      {
      title: this.title,
      summary: this.summary,
      dueDate: this.date,
      },
      this.userId,
    )
    this.closeWindow.emit();
  }
}
