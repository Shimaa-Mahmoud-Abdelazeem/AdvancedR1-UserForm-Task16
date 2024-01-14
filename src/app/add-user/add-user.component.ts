import { Component, inject } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user! : User[];


  userservice :UserserviceService = inject(UserserviceService);


  userform! : FormGroup;



  constructor(private formbuilder: FormBuilder) {

    this.userform =  this.formbuilder.group({
      firstName:['', [Validators.required ,
        Validators.minLength(3) ,Validators.maxLength(50)]],
      lastName :['', [Validators.required ,
        Validators.minLength(3) ,Validators.maxLength(50)]],
      email:['', [Validators.email] ],
      address:['', [Validators.required ,
        Validators.minLength(3) ,Validators.maxLength(100)]],
      phone:['', [Validators.required ,
        Validators.minLength(11) ,Validators.maxLength(15)]],

    })

    this.user =  this.userservice.getallusers();

  }

  adduser(){

  const user :User = this.userform.value;
  this.userservice.createuser(user);
  console.log(user);

  }

submit(){

  }
}
