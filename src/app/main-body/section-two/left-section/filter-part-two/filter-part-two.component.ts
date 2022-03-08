import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-part-two',
  templateUrl: './filter-part-two.component.html',
  styleUrls: ['./filter-part-two.component.css']
})
export class FilterPartTwoComponent implements OnInit {

  @Output() selectedNameSearch=new EventEmitter<string>();

  selected:boolean=false;
  name:string;
  nameSearch:string="";

 
   
  FreeBiesData=[
    {
     id:1,
     option:"salad",
     isChecked:false
   },
   {
     id:1,
     option:"sandwich",
     isChecked:false
   },
   {
     id:1,
     option:"bread",
     isChecked:false
   },
   {
     id:1,
     option:"steak",
     isChecked:false
   },
   {
     id:1,
     option:"fish",
     isChecked:false
   },
  ]
 
  getselected(option:string){
    if(!this.selected){
      this.nameSearch=option;
      this.selectedNameSearch.emit(this.nameSearch);
      this.selected=true;
    }
     else{
      this.nameSearch='';
      this.selectedNameSearch.emit(this.nameSearch);
      this.selected=false;
     }   
  }
  constructor() {}

  ngOnInit(): void {
  }
}
