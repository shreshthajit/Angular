import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  // transform(value: any,searchTerm:any): any {
  //   // console.log(value);//this value will contain the cards
  //   // console.log(searchTerm);
  //   return value.filter(function(search){
  //     // console.log(search.text1);//this search.text1 will contain those cards who's text1 is matching with the card's text1
  //     return search.text1.indexOf(searchTerm) > -1;
  //   });
  
  transform(value: any,filterString:any,propName:string):any {
     
    // for(const item of filterString){
    //   // console.log(filterString.indexOf(item));
    //   console.log(item);
    // }

      if(value.length === 0 || filterString.length===0){ 
        return value;
      }
      
       const resultArray=[];
       for(const item of value){
        //  if(item[propName]=== filterString){
        //    resultArray.push(item);
        //  }
        // const sr:string=item[propName];
        // console.log(sr);
        // console.log(filterString.indexOf(filterString[0]));
        // console.log(filterString.option.indexOf(sr) > -1);
          
        const index = filterString.findIndex(role=> role.option === item[propName]);
          if (index >-1) {
          //  const value= filterString[index].option;
           resultArray.push(item);
          //  console.log(value);
          }

        // if(filterString.indexOf(item[propName]) > -1){
        //   console.log(item[propName]);
        //   resultArray.push(item[propName]);
        // }
       }


      //   for(const item of resultArray){
      //   console.log(item);
      // }
       return resultArray;
  }
  }
