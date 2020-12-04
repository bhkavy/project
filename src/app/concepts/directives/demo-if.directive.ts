import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDemoIf]'
})
export class DemoIfDirective {

  constructor( private viewContainerRef: ViewContainerRef,private templateRef: TemplateRef<object> ) {
    console.log(this.viewContainerRef);//div
    console.log(this.templateRef);//p

    const isAuth= true;
    
    if (isAuth){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }

}
