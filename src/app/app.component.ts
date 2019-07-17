import { Component } from '@angular/core';
import { User } from './models/user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUser: User = new User();
  userArray: User[] = [
    {
      id: 1,
      username: 'Jhooomn',
      country: 'Colombia'
    },
    {
      id: 2,
      username: 'Raul',
      country: 'Brasil'
    },
    {
      id: 3,
      username: 'Maverick',
      country: 'Rusia'
    }
  ];
  addOrEdit() {
    if (this.selectedUser.id == 0) {
      this.selectedUser.id = this.userArray.length + 1;
      this.userArray.push(this.selectedUser);
    }
    this.selectedUser = new User();
  }
  toEdit(user: User) {
    this.selectedUser = user;
  }
  delete() {
    if (confirm('Are you sure you want to delete this guy?')) {
      this.userArray = this.userArray.filter(x => x != this.selectedUser);
      this.selectedUser = new User();
    }
  }

}
