import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { PrimeNumberComponent } from './prime-number/prime-number.component';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    PrimeNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
