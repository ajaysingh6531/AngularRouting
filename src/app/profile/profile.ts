import { Component } from '@angular/core';
import { Header } from '../header/header';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [Header],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  username:string|null="";

  constructor(private route:ActivatedRoute){

  }

    ngOnInit(){
      //this.username=this.route.snapshot.paramMap.get('name');
      //console.log(username);

      //line 20-21 for routerLink method  

      this.route.queryParams.subscribe(params=>{
        //console.log(params['name']);
        this.username=params['name']
      })
    }
  
}
