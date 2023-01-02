import { Component } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email:string='';

  constructor(private authservice:AuthserviceService){}
 
  forgotPassword(){
    this.authservice.forgotPassword(this.email);
    this.email = '';
  }


}
