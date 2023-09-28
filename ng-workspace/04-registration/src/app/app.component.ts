import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '04-registration';

  username:string="";
  password:string="";
  confirmPassword:string="";
  gender:string="";
  country:string="";
  licenseAgreement:string="";

  msg:string="";

  registerClick()
  {
    this.msg="UserName : "+this.username+
             "<br/>Password : "+this.password+
             "<br/>ConfirmPassword : "+this.confirmPassword+
             "<br/>Gender : "+this.gender+
             "<br/>Country : "+this.country+
             "<br/>LicenseAgreement : "+this.licenseAgreement;
  }

}
