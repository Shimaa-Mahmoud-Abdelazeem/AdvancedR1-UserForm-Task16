import { Component, inject } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  Users: User[] = [];

  userservice :UserserviceService = inject(UserserviceService);
  constructor() {

    this.Users  = this.userservice.getallusers();

      }

      deleteruser(id:number){
    this.userservice.deleteuser(id);

      }
}
