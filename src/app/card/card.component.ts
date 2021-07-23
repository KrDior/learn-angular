import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input() id?: number;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() text?: string;
  @Input() image = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  @Output() closeCard = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes): void {
    console.log(changes)
  }

  onClose(): void {
    // this.closeCard.emit(this.id);
  }

}
