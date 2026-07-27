import { Component } from '@angular/core';
import { Header } from '../header/header';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
}
