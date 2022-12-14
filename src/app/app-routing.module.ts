import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { FactorialComponent } from './factorial/factorial.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

const routes: Routes = [
  {path:"add",component:AdditionComponent},
  {path:"sub",component:SubtractionComponent},
  {path:"fact",component:FactorialComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
