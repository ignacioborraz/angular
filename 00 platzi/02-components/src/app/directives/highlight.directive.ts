import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'green'
    element.nativeElement.style.color = 'white'
  }

}
