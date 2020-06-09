import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppShellModule } from './../@core/app-shell/app-shell.module';
import { TemplateModule } from './templates/template.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    PagesRoutingModule,
    AppShellModule,
    FormsModule,
    CommonModule,
    TemplateModule
  ]
})
export class PagesModule { }
