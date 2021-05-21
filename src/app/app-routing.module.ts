import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstComponent } from './routes/first/first.component';
import { SecondComponent } from './routes/second/second.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '0', pathMatch: 'full', redirectTo: '1' },
  { path: '1', component: FirstComponent },
  { path: 'lazy', loadChildren: () => import('./routes/second/') }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
