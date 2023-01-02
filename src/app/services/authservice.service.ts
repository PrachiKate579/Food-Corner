import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }

  //login method

  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then((res) => {
     localStorage.setItem('token','true');
     
     if(res.user?.emailVerified == true){
      this.router.navigate(['home']);
     }
     else{
      this.router.navigate(['/verify-email']);
     }
    }, (err:any) => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

//register method

register(email:string,password:string){
 this.fireauth.createUserWithEmailAndPassword(email,password).then((res) => {
  alert('Registration Successfull');
  this.router.navigate(['/login']);
  this.sendEmailForVerification(res.user);
 }, err => {
  alert(err.message);
      this.router.navigate(['/register']);
 })
}

//logout

logout(){
  this.fireauth.signOut().then(()=>{
  localStorage.removeItem('token');
  this.router.navigate(['/login'])
  },err =>{
    
    alert(err.message)
  })
}

forgotPassword(email:string){
this.fireauth.sendPasswordResetEmail(email).then(()=>{
this.router.navigate(['/verify-email']);
},err=>{
  alert(err.message)
})

}
sendEmailForVerification(user:any){
  // user.sendEmailForVerification().then((res:any)=>{
  //  this.router.navigate(['/verify-email'])
  this.fireauth.currentUser.then(u=>{
  u?.sendEmailVerification().then(()=>{
    this.router.navigate(['/verify-email'])
  })
  }
  ,(err:any)=>{
    alert('Something went wrong. Not able to send mail to your email')
  })
}

}
