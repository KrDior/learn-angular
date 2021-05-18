import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.scss']
})
export class RockComponent implements OnInit {

  phrase: string;

  ngOnInit(): void {
  }

  sayHi(): void {
    this.phrase = '!!!!!!!!!!!!!!!!';
  }

}
