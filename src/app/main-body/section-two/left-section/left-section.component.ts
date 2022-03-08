import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {

  //  newName:string='';
  newName=[];
   @Output() selectedName=new EventEmitter<any>();
   @Output() selectedStar=new EventEmitter<number>();
   @Output() selectedPrice=new EventEmitter<number>();
   
   nameAdded(name:any){
    this.newName=name;
    // for(const item of this.newName){
    //   console.log(item.option);
    // }
    this.selectedName.emit(this.newName);
   }
   starAdded(cnt:number){
    //  console.log(cnt);
     this.selectedStar.emit(cnt);
   }
   priceAdded(price:number){
    /// console.log(price);
     this.selectedPrice.emit(price);
   }
 
   constructor(){}
  ngOnInit(){
  }
}
