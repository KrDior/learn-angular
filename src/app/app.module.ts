import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ColoryDirective } from './colory.directive';
// import { BannerComponent } from './banner/banner.component';
import { TeamsComponent } from './teams/teams.component';
import { SharedModule } from './shared/shared.module';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { RockComponent } from './rock/rock.component';
import { DelayDirective } from './delay.directive';
import { ReversePipe } from './reverse.pipe';
import { AngElementComponent } from './ang-element/ang-element.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ColoryDirective,
    // BannerComponent,
    TeamsComponent,
    CatComponent,
    DogComponent,
    RockComponent,
    DelayDirective,
    ReversePipe,
    AngElementComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const angElement = createCustomElement(AngElementComponent, { injector });
    customElements.define('my-ang-element', angElement);
  }
}
