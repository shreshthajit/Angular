import { Directive, ElementRef, Renderer2,OnInit,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
 
  @Input() defaultColor: string='transparent';
  @Input() highlightColor: string='blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;//=this.defaultColor;
  constructor(private elRef:ElementRef,private rederer:Renderer2) {}
  ngOnInit(){
  //  this.rederer.setStyle(this.elRef.nativeElement,'background-color','blue');
  this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData){
    // this.rederer.setStyle(this.elRef.nativeElement,'background-color','blue');
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData){
    // this.rederer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.backgroundColor=this.defaultColor;
  }
  

}
