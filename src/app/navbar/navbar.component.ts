import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Data=[
    {
      num:1,
      image1:"assets/images/plane.png ",
      image2:"assets/images/Flight.png"
    },
    {
     num:2,image1:"assets/images/plane.png",image2:"assets/images/Hotels.png "
   },
   {
     num:3,image1:"assets/images/plane.png",image2:"assets/images/Flight.png "
   },
   {
     num:4,image1:"assets/images/plane.png ",image2:"assets/images/Flight.png "
   },
   {
     num:5,image1:"assets/images/plane.png ",image2:"assets/images/Flight.png "
   },
   {
     num:6,image1:"assets/images/plane.png ",image2:"assets/images/Flight.png "
   }
  ]
 
constructor() {
  
}

ngOnInit() {
}
 
  

}
