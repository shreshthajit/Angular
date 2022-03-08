import { Component, OnInit, Output,EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-filter-part-one',
  templateUrl: './filter-part-one.component.html',
  styleUrls: ['./filter-part-one.component.css']
})
export class FilterPartOneComponent implements OnInit {

  @Output() selectedStarSearch=new EventEmitter<number>();
  @Output() selctedPriceSearch=new EventEmitter<number>();

  price=0;
  currentRate=0;
  constructor(){}


  onRateChange(data:number){
  // console.log(data);
  this.selectedStarSearch.emit(data);
  }
  onPriceChange(){
     ///console.log(this.price);
     this.selctedPriceSearch.emit(this.price);
  }
  ngOnInit():void{
  }
}
