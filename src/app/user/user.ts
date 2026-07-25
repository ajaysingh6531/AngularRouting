import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  name:string |null="";
  i:number=0;
  constructor(private route:ActivatedRoute){

  }
  ngOnInit(){
    this.route.params.subscribe((x)=>{
      //console.log(x);
      // here uno comes from app.routes.ts file
      this.name=x['uno'];
      this.i=x['idno'];
    })
  }
}
