import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Імпортуємо FormsModule
import { InputComponent } from './input.component';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Додаємо FormsModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
