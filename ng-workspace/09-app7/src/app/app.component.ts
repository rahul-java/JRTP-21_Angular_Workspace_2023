import { Component, Inject } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string="";
  password:string="";
  msg:string="";

  constructor(@Inject(LoginService) private loginService:LoginService){
  }

  checkLogin(text1:any):string{
    if(this.loginService.checkUnameAndPwd(this.username,this.password))
    {
      return this.msg="Login Successful...";
    }else
    {
      return this.msg="Invalid Credentials...";
    }
    text1.focus();
  }
}
