import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from 'xng-breadcrumb';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { ToolbarComponent } from './layout/components/toolbar/toolbar.component';
import { UserCardComponent } from './layout/components/header/components/user-card/user-card.component';
import { HamburgerIconComponent } from './layout/components/toolbar/components/hamburger-icon/hamburger-icon.component';
import { SelectLanguageComponent } from './layout/components/header/components/select-language/select-language.component';
import { AhbsBreadcrumbComponent } from './layout/components/toolbar/components/ahbs-breadcrumb/ahbs-breadcrumb.component';
import { NavbarComponent } from './layout/components/toolbar/components/navbar/navbar.component';
import { CurrentPageComponent } from './layout/components/toolbar/components/current-page/current-page.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    UserCardComponent,
    HamburgerIconComponent,
    AhbsBreadcrumbComponent,
    SelectLanguageComponent,
    NavbarComponent,
    CurrentPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BreadcrumbModule,
    PagesRoutingModule
  ]
})
export class LayoutModule { }
