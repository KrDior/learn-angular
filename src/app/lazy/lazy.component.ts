import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
  // providers: [
  //   {provide: FlowerService, useValue: {emoji: '🌺'}}
  // ],
})
export class LazyComponent implements OnInit {

  constructor(private flowerService: FlowerService) { }

  ngOnInit(): void {
    console.log('flowerService', this.flowerService.emoji);
  }

}
