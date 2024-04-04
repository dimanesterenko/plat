import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // May already be imported
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AppComponent, InputComponent],
  imports: [BrowserModule, FormsModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
