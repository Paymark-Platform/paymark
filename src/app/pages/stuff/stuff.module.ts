import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuffComponent } from './stuff.component';


@NgModule({
  declarations: [StuffComponent],
  imports: [
    CommonModule
  ],
  exports: [StuffComponent]
})
export class StuffModule { }
