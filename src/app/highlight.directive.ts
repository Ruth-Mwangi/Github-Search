import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }


  @HostListener ('click') onClicks(){
    this.textDeco("rgba(0, 0, 255,0.47)");
  }

  
  textDeco(deco:string){

    this.elem.nativeElement.style.backgroundColor=deco;
  }



}
