import { Component, Host, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-di-child',
  templateUrl: './di-child.component.html',
  styleUrls: ['./di-child.component.scss'],
  providers: [
    {provide: FlowerService, useValue: {emoji: '🌺'}}
  ],
  viewProviders: [
    {provide: AnimalService, useValue: {emoji: '🐶'}}
  ]
})
export class DiChildComponent implements OnInit {

  constructor(
    @Self() @Optional() public flower: FlowerService,
    @Self() @Optional() public animal: AnimalService,
    // @SkipSelf() public flower: FlowerService,
    // @SkipSelf() public animal: AnimalService,
    // @Host() public flower: FlowerService,
    // @Host() public animal: AnimalService,
  ) { }

  ngOnInit(): void {
  }

}
