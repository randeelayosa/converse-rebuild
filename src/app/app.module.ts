import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SubMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
