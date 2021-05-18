import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal/animal';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
  providers: [{ provide: Animal, useExisting: DogComponent}]
})
export class DogComponent extends Animal implements OnInit {

  phrase: string;

  ngOnInit(): void {
  }

  sayHi(): void {
    this.phrase = 'gav-gav';
  }

}
