import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.css']
})
export class SectionTwoComponent implements OnInit {

 
  // nameSearch:string='';
   nameSearch=[];
   starCnt=0;
   priceVal=0;
   
  constructor(){
  }
  
  ngOnInit(): void {
  }
}
