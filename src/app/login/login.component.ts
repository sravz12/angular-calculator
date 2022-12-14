import { Component } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form=new FormGroup(
    {
      Username:new FormControl("",[Validators.required]),
      Password:new FormControl("",[Validators.required])
    }
  )

  get Username(){
    return this.form.get("Username")

  }
  get Password(){
    return this.form.get("Password")
  }
  login(){
    console.log(this.form.value);
    
  }
}
