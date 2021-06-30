import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AnimalService } from './animal.service';
import { myAnimation1 } from './animation/1';
import { FlowerService } from './flower.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ myAnimation1 ],
  providers: [
    { provide: FlowerService, useValue: { emoji: '🌻' } },
    // { provide: AnimalService, useValue: {emoji: '🐳'}},
  ],
  // viewProviders: [
  //   { provide: FlowerService, useValue: { emoji: '🌻' } },
  //   {provide: AnimalService, useValue: {emoji: '🐳'}}
  // ]
})
export class AppComponent {
  public title = 'learn-angular';
  public output1 = '';
  public output2 = '';

  private intervalId: ReturnType<typeof setTimeout>;
  private worker: Worker;

  constructor(
    public flower: FlowerService,
    public animal: AnimalService
  ) {
    this.worker = new Worker('./my-worker.worker.ts', { type: 'module'});
  }

  public getRouterOutletState(outlet: RouterOutlet): ActivatedRoute | string {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public randomNumber(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      return;
    }

    this.intervalId = setInterval(() => {
      this.output1 = Math.random().toString();
    }, 100);
  }

  public findBigPrime(): void {
    this.output2 = '';

    this.worker.onmessage = ({ data }) => {
      this.output2 = data;
    };
    this.worker.postMessage(40);
  }
}
