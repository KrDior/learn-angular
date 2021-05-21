import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-element',
  templateUrl: './ang-element.component.html',
  styleUrls: ['./ang-element.component.scss']
})
export class AngElementComponent implements OnInit {
  @Input() name?: string;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
