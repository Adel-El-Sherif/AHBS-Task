import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';
import { GlobalSearchFormComponent } from './components/global-search-form/global-search-form.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
@NgModule({
  declarations: [
    PaginatorComponent,
    SectionHeadingComponent,
    GlobalSearchFormComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    MatIconModule,
    NgSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ], 
  exports: [    
    NgbModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    NgSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    PaginatorComponent,
    ReactiveFormsModule,
    SectionHeadingComponent,
    GlobalSearchFormComponent,
  ]
})
export class SharedModule { }
