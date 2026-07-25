import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [RouterLink,Header],
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
}
