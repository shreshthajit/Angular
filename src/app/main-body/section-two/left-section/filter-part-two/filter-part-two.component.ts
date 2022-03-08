import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-part-two',
  templateUrl: './filter-part-two.component.html',
  styleUrls: ['./filter-part-two.component.css']
})
export class FilterPartTwoComponent implements OnInit {

  @Output() selectedNameSearch=new EventEmitter<string>();

  selected:boolean=false;
  
  nameSearch:string='';
  
  FreeBiesData=[
    {id:1,
     option:"Free breakfast",
   },
   {id:1,
     option:"Free breakfast",
   },
   {id:1,
     option:"Break",
   },
   {id:1,
     option:"breakfast",
   },
   {id:1,
     option:"Free breakfast",
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
