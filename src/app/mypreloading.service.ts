import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyPreloadingService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // return load();
    // return EMPTY;

    if (route.data.nopreload) {
      return EMPTY;
    }

    return of(true).pipe(
      delay(3000),
      switchMap(_ => load())
    );
  }
}
