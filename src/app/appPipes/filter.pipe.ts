import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any,searchTerm:any): any {
    // console.log(value);//this value will contain the cards
    // console.log(searchTerm);
    return value.filter(function(search){
      // console.log(search.text1);//this search.text1 will contain those cards who's text1 is matching with the card's text1
      return search.text1.indexOf(searchTerm) > -1;
    });
  }
}
