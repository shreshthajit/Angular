import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starFilter'
})
export class StarFilterPipe implements PipeTransform {

  transform(value: any,starcnt:any): any {

    if(value.length === 0 || starcnt=== 0){ 
      return value;
    }
    starcnt+="";

     return value.filter(function(search){
       
      return search.starCnt.indexOf(starcnt) > -1;
    })
  }
}
