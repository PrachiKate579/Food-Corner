import { Component } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email:string="";
  password:string="";

  constructor(private authservice:AuthserviceService){}

  register(){

    if(this.email == ''){
      alert('Please enter email');
      return;
    }

    if(this.password == ''){
      alert('Please enter password');
      return;
    }

    this.authservice.register(this.email,this.password);
    this.email = '';
    this.password = '';
  }
}
