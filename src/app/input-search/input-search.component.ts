import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

const API_URL = 'https://www.reddit.com/r/aww/search.json?q=';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  searchSubject$ = new Subject<string>();
  results$: Observable<any[]>

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.results$ = this.searchSubject$.pipe(
      debounceTime(200),
      distinctUntilChanged(), // skip changes if prev === curr
      tap(x => console.log(x)), // side effects
      switchMap(searchString => this.queryAPI(searchString))
    );
  }

  queryAPI(searchString: string): Observable<any> {
    return this.http.get(`${API_URL}${searchString}`).pipe(
      map(res => {
        return res['data']['children'];
      })
    );
  }

  onInputChange(e: InputEvent): void {
    const value = (e.target as HTMLInputElement).value;

    this.searchSubject$.next(value);
  }

  consoleUrl(url: string): void {
    console.log(url)
  }

}
