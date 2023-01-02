import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'search/:searchItem',component:HomeComponent
  },
  {
    path:'tag/:tag',component:HomeComponent
  },
  {
    path:'food/:id',component:FoodPageComponent
  },
  {
    path:'cart-page',component:CartPageComponent
  },
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'forgot-password',component:ForgotPasswordComponent
  },
  {
    path:'verify-email',component:VerifyEmailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
