import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AppShellComponent } from './app-shell.component';

import { SIDEBAR_DIRECTIVES } from './../shared/directives/side-nav.directive';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { AppShellService } from './app-shell.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  declarations: [
    AppShellComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SidePanelComponent,
    SIDEBAR_DIRECTIVES
  ],
  imports: [
    CommonModule,
    RouterModule,
    PerfectScrollbarModule,
    FormsModule
  ],
  providers: [AppShellService],
  exports: [AppShellComponent, SIDEBAR_DIRECTIVES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppShellModule { }
