import { afterEveryRender, afterNextRender, Component, ViewChild } from '@angular/core';
import { Header } from '../header/header';
import { Lifechild } from '../lifechild/lifechild';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-life',
  imports: [Header,Lifechild,NgIf],
  templateUrl: './life.html',
  styleUrl: './life.css',
})
export class Life {
  @ViewChild('child') Lifechild:any

  constructor(){
    //if any thing change in child component then afterrender works
    afterEveryRender(()=>{
      console.log('after render',this.Lifechild.counter);
    })
    //this will be called once
    afterNextRender(()=>{
      console.log('afterNextRender',this.Lifechild.counter);
    })

    
  }

  counter=0;
  updateCounter(){
    this.counter++;
  }
}


