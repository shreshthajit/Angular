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
   
   nameAdded(name:any){
    this.newName=name;
    // for(const item of this.newName){
    //   console.log(item.option);
    // }
    this.selectedName.emit(this.newName);
   }
 
   constructor(){}
  ngOnInit(){
  }
}
