import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public myComponent;

  constructor(private view: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    this.view.createComponent(componentFactory);

    this.myComponent = BannerComponent;
  }

}
