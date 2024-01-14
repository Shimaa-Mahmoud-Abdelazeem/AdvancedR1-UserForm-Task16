import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
  // get all users
  getallusers():User[]{

    return this.users;
  }


// get specific by id users
getuserbyid(id:number):User |undefined{

    return this.users.find( user => user.id === id );
}

// delete users
deleteuser(id:number){

 const index = this.users.findIndex((user => user.id === id));
 this.users.splice(index,1);

}
// count users
usercount():number{

  return this.users.length;
}

 nextid = 4;

 // add users
 createuser(user :User){
  user.id = this.nextid++;
  this.users.push(user);
}

// edit users
updateuser(userid:number , updateduser: User ){

  const index  =  this.users.findIndex(  user => user.id === userid);

  this.users[index] = {...updateduser , id : userid   }


}
 //  employees data
  private users :User[]= [

    {
        id:1,
        firstName:"Shimaa",
        lastName:"Mahmoud",
        email:"shimaa@gmail.com",
        address:"minia",
        phone:123456258,
    },
    {
      id:2,
      firstName:"Mahmoud",
      lastName:"Abd Elazeem",
      email:"mahmoud@gmail.com",
      address:"Cairo",
      phone:123456444,
  },
  {
    id:3,
    firstName:"Abd Elazeem",
    lastName:"Mohamed",
    email:"abdelazeem@gmail.com",
    address:"Alex",
    phone:112345632,
},
  ]
}
