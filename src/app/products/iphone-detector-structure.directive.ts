import {Directive, HostBinding, HostListener, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIphoneDetectorStructure]'
})
export class IphoneDetectorStructureDirective {

  @HostBinding('style.background') background: string;
  @HostListener('window:resize', ['$event']) click(event) {
    console.log(event);
  }

  @Input()
  set appIphoneDetectorStructure(value) {
    if (!value.toLowerCase().indexOf('iphone')) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}


}
