import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id?: number;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() text?: string;
  @Input() image = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
