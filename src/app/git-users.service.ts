import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { debounceTime, map, mergeMap, startWith } from 'rxjs/operators';

const API_URL = 'https://api.github.com/users?since=';

export interface User {
  id: string;
  repos_url: string;
  avatar_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class GitUsersService {

  constructor() { }

  getUsers(refreshClickStream$: Observable<Event>): Observable<User[]> {
    return this.createRequestStream(refreshClickStream$).pipe(
      debounceTime(500),
      mergeMap(requestUrl => from(fetch(requestUrl).then(response => response.json())))
    );
  }

  private createRequestStream(refreshClickStream$: Observable<Event>): Observable<string> {
    return refreshClickStream$.pipe(
      startWith('startup click'),
      map(() => API_URL + this.calculateRandomOffset())
    );
  }

  private calculateRandomOffset(): number {
    return Math.floor(Math.random() * 500);
  }
}
