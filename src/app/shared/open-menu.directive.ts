import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOpenMenu]'
})
export class OpenMenuDirective {

  @HostBinding('class.open') classOpen:boolean = false

  constructor() { }

  @HostListener('click') openedClass(){
    this.classOpen = !this.classOpen
  }
}
