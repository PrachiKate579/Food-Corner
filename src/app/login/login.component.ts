import { Component } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string="";
  password:string="";

  constructor(private authservice:AuthserviceService){}

  login(){

    if(this.email == ''){
      alert('Please enter email');
      return;
    }

    if(this.password == ''){
      alert('Please enter password');
      return;
    }

    this.authservice.login(this.email,this.password);
    this.email = '';
    this.password = '';
  }

}
