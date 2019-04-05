import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavBottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
