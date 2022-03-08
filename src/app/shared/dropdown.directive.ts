import { Directive, HostBinding, HostListener,ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
 
  @HostBinding('class.open') isOpen=false;

  // @HostListener('click') toggleOpen(){
  //   this.isOpen=!this.isOpen;
  // }
  // constructor() {}

  //the below code will close the dropdown that we have opened  while  opening the new one
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}

}
