import { FormBuilder, FormGroup } from '@angular/forms';
import { UserserviceService } from './../userservice.service';
import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  updateuserform! : FormGroup;
  userid!:number;


constructor( private formbuilder:FormBuilder ,private userservice :UserserviceService ,private route:ActivatedRoute ){

  this.updateuserform =  this.formbuilder.group({
    firstName:[''],
      lastName :[''],
      email:[''],
      address:[''],
      phone:[''],

  })


}


ngOnInit() {
  this.route.params.subscribe(params => {
    this.userid = +params['id'];
    this.loadUserDetails();
  });
}

loadUserDetails() {
  const userr = this.userservice.getuserbyid(this.userid);

  if (userr) {
    this.updateuserform.patchValue(userr);
  } else {
    // Redirect to the product list if the product is not found

  }
}

updateUser() {
  if (this.updateuserform.valid) {
    const updateduser: User = {
      id: this.userid,
      ...this.updateuserform.value
    };

    this.userservice.updateuser(this.userid, updateduser);

  }
}
}
