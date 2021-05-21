import { EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-element',
  templateUrl: './ang-element.component.html',
  styleUrls: ['./ang-element.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AngElementComponent implements OnInit {
  @Input() name?: string;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
