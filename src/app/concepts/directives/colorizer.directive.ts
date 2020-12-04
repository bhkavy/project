import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2) {
    console.log('Inside constructor of colorizerDirective');
    console.log(this.elRef.nativeElement);

    const el= this.elRef.nativeElement;
    //  el.style.backgroundColor ='yellow';
    //  el.style.color= 'blue';

    this.renderer.setStyle(el,'background-color','yellow');
    this.renderer.setStyle(el, 'color', 'blue');
    this.renderer.setStyle(el, 'height', '200px');
    const p= this.renderer.createElement('p');
    const text= this.renderer.createElement('kavya');
    this.renderer.appendChild(p,text);
    this.renderer.appendChild(el,p);
    
  }

}
