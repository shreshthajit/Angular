import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.css']
})
export class RightSectionComponent implements OnInit {

  @Input() namesearch=[];//:string='';
  @Input() starsearch:number;
  @Input() pricesearch:number;
    
  constructor() {}
 
   
   Data=[
     {
       num:1,
       card_image:"assets/images/card_image/img_1.png",
       airportName:"Airlines New Delhi University",
       address:"Hospitality District,Aerocity",
       costPerNight:"$198.21",
       text1:"salad",
       totalPrice:"50",
       stars:[0,1],
       starCnt:"2"
     },
     {
      num:2,
      card_image:"assets/images/card_image/img_2.png",
      airportName:"Sportscraft New Delhi University",
      address:"Hospitality District,Aerocity",
      costPerNight:"$221.21",
      text1:"salad",
      totalPrice:"50",
      stars:[0,1],
      starCnt:"2"
    },
    {
      num:3,
      card_image:"assets/images/card_image/img_3.png",
      airportName:"Programming Club New Delhi University",
      address:"Hospitality District,Aerocity",
      costPerNight:"$312.21",
      text1:"salad",
      totalPrice:"50",
      stars:[0,1,2],
      starCnt:"3"
    },
    {
      num:4,
      card_image:"assets/images/card_image/img_4.png",
      airportName:"Surat Airport",
      address:"5-A,Hospitality District,Aerocity",
      costPerNight:"$145.21",
      text1:"sandwich",
      totalPrice:"60",
      stars:[0,1,2],
      starCnt:"3"
    },
    {
      num:5,
      card_image:"assets/images/card_image/img_5.png",
      airportName:"Chandigarh International Airport",
      address:"5-A,Hospitality District,Aerocity",
      costPerNight:"$156.21",
      text1:"sandwich",
      totalPrice:"60",
      stars:[0,1,2,3,4],
      starCnt:"5"
    },
    {
      num:3,
      card_image:"assets/images/card_image/img_6.png",
      airportName:"Jaipur International Airport",
      address:"5-A,Hospitality District,Aerocity",
      costPerNight:"$167.21",
      text1:"sandwich",
      totalPrice:"100",
      stars:[0,1,2,3,4],
      starCnt:"5"
    },
    {
      num:4,
      card_image:"assets/images/card_image/img_7.png",
      airportName:"Trivandrum International Airport",
      address:"5-A,Hospitality District,Aerocity",
      costPerNight:"$178.21",
      text1:"bread",
      totalPrice:"100",
      stars:[0,1,2,3,4],
      starCnt:"5"
    },
    {
      num:5,
      card_image:"assets/images/card_image/img_8.png",
      airportName:"Indira Gandhi International Airport",
      address:"5-A,Hospitality District,Aerocity",
      costPerNight:"$121.21",
      text1:"bread",
      totalPrice:"100",
      stars:[0,1,2,3,4],
      starCnt:"5"
    },
   ]

  ngOnInit(): void {
  }

}
