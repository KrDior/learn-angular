import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal/animal';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
  providers: [{ provide: Animal, useExisting: CatComponent}]
})
export class CatComponent extends Animal implements OnInit {

  phrase: string;

  ngOnInit(): void {
  }

  sayHi(): void {
    this.phrase = 'mey';
  }

}
