import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-part-two',
  templateUrl: './filter-part-two.component.html',
  styleUrls: ['./filter-part-two.component.css']
})
export class FilterPartTwoComponent implements OnInit {

  @Output() selectedNameSearch=new EventEmitter<any>();

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
     id:2,
     option:"sandwich",
     isChecked:false
   },
   {
     id:3,
     option:"bread",
     isChecked:false
   },
   {
     id:4,
     option:"steak",
     isChecked:false
   },
   {
     id:5,
     option:"fish",
     isChecked:false
   },
  ]
 
  selectedItemsList=[];
  // getselected(option:string){
  //   if(!this.selected){
  //     this.nameSearch=option;
  //     this.selectedNameSearch.emit(this.nameSearch);
  //     this.selected=true;
  //   }
  //    else{
  //     this.nameSearch='';
  //     this.selectedNameSearch.emit(this.nameSearch);
  //     this.selected=false;
  //    }   
  // }
  getselected(){
    this.selectedItemsList = this.FreeBiesData.filter((value, index) => {
      return value.isChecked
    });
    // for(let item of this.selectedItemsList)
    // console.log(item);
    
    this.selectedNameSearch.emit(this.selectedItemsList);
  }
  constructor() {}

  ngOnInit(): void {
  }
}
