import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css']
})
export class LeftSectionComponent implements OnInit {

   newName:string='';
   @Output() selectedName=new EventEmitter<string>();
   
   nameAdded(name:string){
    this.newName=name;
    this.selectedName.emit(this.newName);
   }
 
   constructor(){}
  ngOnInit(){
  }
}
