import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'todo-list-enterprise';
  users = DUMMY_USERS

  selectUser(id: string){
    console.log("This user has id: " + id);
  }

  selectedUserWithOutput(id: string){
    console.log("This user has id: " + id);
  }
}
