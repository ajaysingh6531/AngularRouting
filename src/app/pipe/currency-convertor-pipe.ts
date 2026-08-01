import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor',
})
export class CurrencyConvertorPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    //here value is  <h5>{{amount | currencyConvertor}}</h5> amount 

    if(args.length>0){
      //data is argument in <h5>{{amount | currencyConvertor:12}}</h5> like 12 here
      let [data] =args
      return value*data;
    }
    else{
      return value*85
    }
  }
}
