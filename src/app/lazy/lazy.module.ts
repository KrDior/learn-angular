import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { FlowerService } from '../flower.service';


@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  providers: [
    {provide: FlowerService, useValue: {emoji: '🌺'}}
  ],
})
export class LazyModule { }
