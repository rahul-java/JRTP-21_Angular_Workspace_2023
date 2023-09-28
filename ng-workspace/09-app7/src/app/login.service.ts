import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users:User[]=[
    new User("john","john@gmail.com"),
    new User("smith","smith@gmail.com"),
    new User("rohan","rohan@gmail.com"),
    new User("ravi","ravi@gmail.com"),
    new User("rahul","rahul@gmail.com")
  ];

  constructor() { }

    checkUnameAndPwd(username:string, password:string):boolean{
      var count=0;
      for(var i=0;i<this.users.length;i++)
      {
        if(this.users[i].username==username && this.users[i].password==password)
        {
          count++;
        }
      }
      if(count==1)
      {
        return true;
      }
      else{
        return false;
      }
    
    }
  
}
