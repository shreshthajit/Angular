import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit {

  @Input() namesearch=[];//:string='';
    
  constructor() {
    
  }
 
   
   Data=[
     {
       num:1,
       card_image:"assets/images/card_image/img_1.png",
       airportName:"Airlines New Delhi University",
       address:"Hospitality District,Aerocity",
       costPerNight:"$198.21",
       text1:"salad",
       totalPrice:"667.49"
     },
     {
      num:2,
      card_image:"assets/images/card_image/img_2.png",
      airportName:"Sportscraft New Delhi University",
      address:"Hospitality District,Aerocity",
      costPerNight:"$221.21",
      text1:"salad",
      totalPrice:"544.49"
    },
    {
      num:3,
      card_image:"assets/images/card_image/img_3.png",
      airportName:"Programming Club New Delhi University",
      address:"Hospitality District,Aerocity",
      costPerNight:"$312.21",
      text1:"salad",
      totalPrice:"564.49"
    },
    {
      num:4,
      card_image:"assets/images/card_image/img_4.png",
      airportName:"Surat Airport",
      address:"5-A,Hospitality District,Aerocity",
      costPerNight:"$145.21",
      text1:"sandwich",
      totalPrice:"543.49"
    },
    {
      num:5,
      card_image:"assets/images/card_image/img_5.png",
      airportName:"Chandigarh International Airport",
      address:"5-A,Hospitality District,Aerocity",
      costPerNight:"$156.21",
      text1:"sandwich",
      totalPrice:"321.49"
    },
    {
      num:3,
      card_image:"assets/images/card_image/img_6.png",
      airportName:"Jaipur International Airport",
      address:"5-A,Hospitality District,Aerocity",
      costPerNight:"$167.21",
      text1:"sandwich",
      totalPrice:"675.49"
    },
    {
      num:4,
      card_image:"assets/images/card_image/img_7.png",
      airportName:"Trivandrum International Airport",
      address:"5-A,Hospitality District,Aerocity",
      costPerNight:"$178.21",
      text1:"bread",
      totalPrice:"342.49"

    },
    {
      num:5,
      card_image:"assets/images/card_image/img_8.png",
      airportName:"Indira Gandhi International Airport",
      address:"5-A,Hospitality District,Aerocity",
      costPerNight:"$121.21",
      text1:"bread",
      totalPrice:"224.49"
    },
   ]

  ngOnInit(): void {
  }

}
