import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Router, RouterLink } from '@angular/router';
import { User1 } from '../user-1/user-1';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [RouterLink,Header,User1,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router:Router){}

  goToProfile(n:String){
    this.router.navigate(['profile'],{queryParams:{name:n}})
  }

  users=[
    {
      id:1,
      name:'ajay Singh',
      age:28,
      email:'ajay@gmail.com'
    },
     {
      id:2,
      name:'deepu Singh',
      age:29,
      email:'deepu@gmail.com'
    },
     {
      id:3,
      name:'saurav Singh',
      age:28,
      email:'saurav@gmail.com'
    }

  ]
  username="bruce";

  onUserChange(u:string){
    this.username=u;
  }
  selectedUser: string = "anil";

  student:undefined | String[];
  handleusers(u:string[]){
    this.student=u;
  }
}
