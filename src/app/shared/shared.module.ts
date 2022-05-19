import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [
  MatCardModule,
  MatGridListModule,
  MatProgressBarModule,
  MatDividerModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule { }
