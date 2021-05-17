import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

const SHARED_MODULES = [
  CommonModule,
  ReactiveFormsModule
];

const ANGULAR_MATERIAL_MODULES = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatSelectModule,
  MatTabsModule,
  MatTooltipModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatCardModule
];

const SHARED_COMPONENTS = [

];

const SHARED_DIRECTIVES = [

];

const SHARED_PIPES = [

];

@NgModule({
  declarations: [
    SHARED_COMPONENTS,
    SHARED_DIRECTIVES,
    SHARED_PIPES,
  ],
  imports: [
    ANGULAR_MATERIAL_MODULES,
    SHARED_MODULES,
    RouterModule
  ],
  exports: [
    ANGULAR_MATERIAL_MODULES,
    SHARED_MODULES,
    SHARED_COMPONENTS,
    SHARED_DIRECTIVES,
    SHARED_PIPES,
  ]
})
export class SharedModule { }
