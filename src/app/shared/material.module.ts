import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

const material = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
