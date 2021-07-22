import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { merge } from 'rxjs';
import { combineLatest } from 'rxjs';
import { from, fromEvent, Observable, of } from 'rxjs';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
import { filter, flatMap, map, mergeMap, startWith, switchMap, take } from 'rxjs/operators';

const API_URL = 'https://api.github.com/users?since=';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {
  @ViewChild('refreshBtn', { static: true }) refreshBtn: ElementRef;
  @ViewChild('suggestionClose1', { static: true }) suggestionClose1: ElementRef;

  public users$: Observable<any>;
  public removedId = 0;

  private refreshClickStream$: Observable<any>;
  private closeClickStream1$: Observable<any>;
  private responseStream$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    const refreshButton = document.querySelector('.refresh');
    const closeButton1 = document.querySelector('.close1');
    const closeButton2 = document.querySelector('.close2');
    const closeButton3 = document.querySelector('.close3');

    // this.refreshClickStream$ = fromEvent(this.refreshBtn.nativeElement, 'click');
    // const closeClickStream1$ = fromEvent(this.suggestionClose1.nativeElement, 'click');
    this.refreshClickStream$ = fromEvent(refreshButton, 'click');
    const closeClickStream1$ = fromEvent(closeButton1, 'click');
    const closeClickStream2$ = fromEvent(closeButton2, 'click');
    const closeClickStream3$ = fromEvent(closeButton3, 'click');

    const requestStream$ = this.refreshClickStream$.pipe(
      startWith('startup click'),
      map(() => {
        const randomOffset = Math.floor(Math.random() * 500);

        return API_URL + randomOffset;
      })
    );

    this.responseStream$ = requestStream$.pipe(
      mergeMap(requestUrl => from(fetch(requestUrl).then(response => response.json())))
    );

    // this.users$ = this.input$.pipe(
    //   switchMap((startPosition: number) => {
    //     return fetch(`${API_URL}${startPosition}`)
    //       .then(response => response.json());
    //   }),
    //   take(3)
    // );

    const suggestionStream1$ = this.createSuggestionStream(closeClickStream1$);
    const suggestionStream2$ = this.createSuggestionStream(closeClickStream2$);
    const suggestionStream3$ = this.createSuggestionStream(closeClickStream3$);

    suggestionStream1$.subscribe(suggestedUser => {
      console.log('1', suggestedUser);
      this.renderSuggestion(suggestedUser, '.suggestion1');
    });
    suggestionStream2$.subscribe(suggestedUser => {
      console.log('2', suggestedUser);
      this.renderSuggestion(suggestedUser, '.suggestion2');
    });
    suggestionStream3$.subscribe(suggestedUser => {
      console.log('3', suggestedUser);
      this.renderSuggestion(suggestedUser, '.suggestion3');
    });
  }

  private createSuggestionStream(closeClickStream: Observable<any>): Observable<any> {
    return combineLatest(
      closeClickStream.pipe(
        startWith('startup click')
      ),
      this.responseStream$,
      (click, listUsers) => listUsers[Math.floor(Math.random() * listUsers.length)]
    );
  }

  private renderSuggestion(suggestedUser, selector): void {
    const suggestionEl = document.querySelector(selector);
    if (suggestedUser === null) {
        suggestionEl.style.visibility = 'hidden';
    } else {
        suggestionEl.style.visibility = 'visible';
        const usernameEl = suggestionEl.querySelector('.username');
        usernameEl.href = suggestedUser.html_url;
        usernameEl.textContent = suggestedUser.login;
        const imgEl = suggestionEl.querySelector('img');
        imgEl.src = '';
        imgEl.src = suggestedUser.avatar_url;
    }
}

  onCardClose(id: number): void {
    this.removedId = id;
  }

  refreshCards(): void {
    console.log('!!!');
  }
}
