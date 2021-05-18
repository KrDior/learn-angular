import {
  AfterContentInit,
  AfterViewInit,
  Attribute,
  Component,
  ComponentFactoryResolver,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import { Animal } from '../animal/animal';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, AfterViewInit, AfterContentInit {
  // @ContentChild('paragSelector') paragraphEl: ElementRef;
  // @ContentChild(OtherComponent) compOther: OtherComponent;    // получаем по селектору Класса компонента
  // @ContentChild(OtherComponent, { read: OtherComponent }) compOther: OtherComponent;
  @ViewChild(BannerComponent, {static: false}) private bannerElement?: BannerComponent;
  @ContentChildren(Animal) animals: QueryList<Animal> = new QueryList();
  // @ViewChildren() elements?: QueryList<Element>;

  public myComponent;

  constructor(
    private view: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Attribute('title') public title: string
    ) { }

  ngOnInit(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    this.view.createComponent(componentFactory);

    this.myComponent = BannerComponent;
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {

  }

  onClick(): void {
    // this.bannerElement.logMessage();
    this.animals.forEach(it => it.sayHi());
    console.log(this.title);
  }

}
