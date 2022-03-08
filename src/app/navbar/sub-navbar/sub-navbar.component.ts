import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent implements OnInit {


  constructor() {}

 roomCount=0;
 adultCount=0;
 childrenCount=0;
 childcounter=[];
roomIncrement(){
   this.roomCount++;
 }

roomDecrement(){
  if(this.roomCount>0)
  this.roomCount--;
}


adultIncrement(){
   this.adultCount++;
}

adultDecrement(){
  if(this.adultCount>0)
  this.adultCount--;
}

childrenIncrement(){
this.childrenCount++;
this.childcounter.push(this.childcounter.length+1);
}

childrenDecrement(){
 if(this.childrenCount>0){
  this.childrenCount--;
  this.childcounter.pop();
 }
}




name = 'Angular';
ddStatus: string = "ddClosed";
ddStyling: boolean = false;

dropDownClicked() {
  (!this.ddStyling) ? this.ddStyling = true : this.ddStyling = false;
  (this.ddStatus == 'ddClosed') ? this.ddStatus = 'ddOpened' : this.ddStatus = "ddClosed";
}


  ngOnInit(){
  }
}
