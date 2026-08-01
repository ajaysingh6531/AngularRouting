import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifechild',
  imports: [],
  templateUrl: './lifechild.html',
  styleUrl: './lifechild.css',
})
export class Lifechild {

  @Input() c=0
  name="ajay";
  constructor(){
    console.log('hello lifechild');
    this.name="singh"
    //console.log(this.name);
  }
  ngOnInit(){
    console.log('ngoninit');
    this.name="saurav"
    console.log(this.name);
  }
  ngOnDestroy(){
    console.log('ng on destroy')
  }
  ngOnChanges(){
    console.log('ng value change');
  }
}
