import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: any, price: any): any {
    if(value.length === 0 || price=== 0){ 
      return value;
    }
    price+="";//we are strigifying it because indexOf method takes a string not a number 
     return value.filter(function(search){
      return search.totalPrice.indexOf(price) > -1;
    })
  }
}
