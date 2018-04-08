import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appIphoneDetector]'
})
export class IphoneDetectorDirective {

  @HostBinding('style.background') background: string;
  @HostListener('window:resize', ['$event']) click(event) {
    console.log(event);
  }

  @Input()
  set phone(value) {
    value.toLowerCase().indexOf('iphone') ? this.background = 'red' : this.background = '#FFF9C4';
  }

  constructor(private element: ElementRef) {}


}
