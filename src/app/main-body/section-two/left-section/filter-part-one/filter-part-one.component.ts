import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-part-one',
  templateUrl: './filter-part-one.component.html',
  styleUrls: ['./filter-part-one.component.css']
})
export class FilterPartOneComponent implements OnInit {


  myModel=0;
  currentRate=5;
  constructor() { }

  ngOnInit(): void {
  }

}
