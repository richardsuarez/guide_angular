import { Component, computed, signal, input, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() avatar!: string;  
  @Input() name!: string;  
  users = DUMMY_USERS;
  @Output() select = new EventEmitter();


  get imagePath(){
    return 'assets/users/' + this.avatar;
  }
  
  onSelectUser(index: number){
    for(let i = 0; i < this.users.length; i++){
      if (this.users[i].active == true){
        DUMMY_USERS[i].active = false;
      }
      if(i == index){
        DUMMY_USERS[i].active = true;
        this.select.emit(this.users[i].id)
      }
    }
  }
}


