import { Component, inject } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {
//for data fromurl
route: ActivatedRoute = inject(ActivatedRoute);
// for getting datat from servcie
Userservice = inject(UserserviceService )

user :User |undefined;

constructor() {
const userid = Number(this.route.snapshot.params['id']);
this.user = this.Userservice.getuserbyid(userid);
}
}
