import { 
Component,
OnInit,Input, 
ViewEncapsulation, 
OnChanges, 
SimpleChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, OnDestroy, ViewChild,   ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated//Native,None
})
export class ServerElementComponent implements 
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
  
{
    @Input('srvElement') element:{
      type: string,
      name: string,
      content: string,
    };

    @Input() name:string;
    @ViewChild('heading',{static:true}) header:ElementRef<HTMLInputElement>;
    @ContentChild('contentParagraph',{static:true}) paragraph:ElementRef;//<HTMLInputElement>;

  constructor() {
    console.log('constructor called');
   }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnchanges called');
    console.log(changes);
  }
  ngOnInit(){
    console.log('ngOnInit called');
    console.log('text Content'+this.header.nativeElement.textContent);
    console.log('text Content Paragraph: '+this.paragraph.nativeElement.textContent);
  }
  ngDoCheck(){
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(){
      console.log('ngAfterContentInit called');
      console.log('text Content Paragraph: '+this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){ 
    console.log('ngAfterContentchecked called');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    // console.log('textContent:  '+this.header.nativeElement.textContent);
   }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(){
      console.log('ngOnDestroy called');
  }
}
