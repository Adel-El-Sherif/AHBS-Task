import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { GlobalSearchFormComponent } from './components/global-search-form/global-search-form.component';


@NgModule({
  declarations: [
    GlobalSearchFormComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ], 
  exports: [
    NgbModule,
    MatIconModule,
    MatButtonModule,
    GlobalSearchFormComponent,
  ]
})
export class SharedModule { }
