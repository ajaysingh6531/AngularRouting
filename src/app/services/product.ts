import { Service } from '@angular/core';

@Service()
export class Product {

    constructor(){
        console.log('product service');
    }
    getProductData(){
        return [
            {
                name:'mobile',brand:'samsung',price:'2000'
            },
             {
                name:'laptop',brand:'dell',price:'10000'
            },
             {
                name:'washing',brand:'LG',price:'70000'
            }
        ]
    }
}
