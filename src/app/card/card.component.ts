import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id: number;
  @Input() title = 'Card title';
  @Input() subtitle?: string;
  @Input() text = 'Simple text';
  @Input() image = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  @Output() closeCard = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.closeCard.emit(this.id);
  }

}
