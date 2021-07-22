import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyPreloadingService } from './mypreloading.service';
import { FirstComponent } from './routes/first/first.component';
import { SecondComponent } from './routes/second/second.component';
import { TwitterComponent } from './twitter/twitter.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '', component: TwitterComponent },
  { path: '0', pathMatch: 'full', redirectTo: '1' },
  { path: '1', component: FirstComponent },
  { path: '2', component: SecondComponent },
  { path: 'lazy', data: { nopreload: true }, loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: MyPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
