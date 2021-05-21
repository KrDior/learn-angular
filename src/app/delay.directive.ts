import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit {

  @Input() delay?: number;
  @Input() delayTime?: number;
  @Input() delayTitle?: string;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<object>
  ) {}

  ngOnInit(): void {
    console.log(this.delayTime);
    console.log(this.delayTitle);
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, this.delay);
  }

}
