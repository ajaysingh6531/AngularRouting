import { Component } from '@angular/core';
import { Header } from '../header/header';
import { CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import {CurrencyConvertorPipe} from '../pipe/currency-convertor-pipe'
import {Product} from '../services/product'
@Component({
  selector: 'app-about',
  imports: [Header,UpperCasePipe,TitleCasePipe,LowerCasePipe,DatePipe,CurrencyPipe,CurrencyConvertorPipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  title="code step by step";
  name="AJAY";
  date=new Date();
  amount=10;

  pdata:{
        name: string;
        brand: string; 
        price: string;
      }[] |undefined

  constructor(private product: Product){

  }
  getPata(){
   this.pdata= this.product.getProductData();
   console.log(this.pdata);
  }
  // ngOnInit(){
  //   this.pdata= this.product.getProductData();
  // }
}
