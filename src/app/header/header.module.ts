import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    NavComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    DropdownComponent
  ]
})
export class HeaderModule { }
