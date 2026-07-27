import { Component } from '@angular/core';
import { Header } from '../header/header';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [Header,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  name=new FormControl();
  //name=new FormControl('deepu);  for default values
  password=new FormControl();

  displayValues(){
    this.name=this.name.value;
    this.password=this.password.value;
  }
 
  setValues(){
    this.name.setValue('peter');
    this.password.setValue('petterr');
  }

  //for form Grouping

  profileForm=new FormGroup({
    name1:new FormControl(),
    password1:new FormControl(),
    email1:new FormControl()

  })
  onSubmit(){
    console.log(this.profileForm.value);
    console.log(this.profileForm.value.email1);
  }
  setval(){
    this.profileForm.setValue({
      name1:'peter',
      password1:'321',
      email1:'peter@gmail.com'
    })
  }
}
