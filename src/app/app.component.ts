import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modules';
  activeUser?: string;

  onSelectedUser(id:string){
    this.activeUser = id;
  }
}
