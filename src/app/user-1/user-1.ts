import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-user-1',
  imports: [],
  templateUrl: './user-1.html',
  styleUrl: './user-1.css',
})
export class User1 {

  // @Input() us:string=""
  @Input() usr:String="";
  @Input() city:String="";
  @Input() us:{ id: number; name: string;age:number;email:string }[] = [];


  @Output() getUsers=new EventEmitter();
  users=['anil','ajay','singh'];

  //automatically send the data once when the component loads.
  // ngOnInit(){
  //   this.getUsers.emit(this.users)
  // }

  loaddata(){
    this.getUsers.emit(this.users)
  }
}
