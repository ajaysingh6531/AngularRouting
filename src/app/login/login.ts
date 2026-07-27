import { Component } from '@angular/core';
import { Header } from '../header/header';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [Header,ReactiveFormsModule,NgIf],
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
    //here fault value will be empyt as ''
    //if you want some default value  then name1:new FormControl('Hello');
    name1:new FormControl('',[Validators.required]),
    password1:new FormControl('',{validators:[
                                    Validators.required,
                                    Validators.minLength(5)
                                      ]}),
    email1:new FormControl('',{validators:[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]})

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

  get n1(){
    return this .profileForm.get('name1');
  }
  get e1(){
    return this .profileForm.get('email1');
  }
  get p1(){
    return this .profileForm.get('password1');
  }
}
