import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserCardComponent } from './layout/components/header/components/user-card/user-card.component';
import { SelectLanguageComponent } from './layout/components/header/components/select-language/select-language.component';
import { ToolbarComponent } from './layout/components/toolbar/toolbar.component';
import { HamburgerIconComponent } from './layout/components/toolbar/hamburger-icon/hamburger-icon.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    UserCardComponent,
    SelectLanguageComponent,
    ToolbarComponent,
    HamburgerIconComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class LayoutModule { }
