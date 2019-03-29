import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TallSplitComponent } from './tall-split/tall-split.component';
import { ShortSplitComponent } from './short-split/short-split.component';
import { QtrHalfComponent } from './qtr-half/qtr-half.component';
import { FeatureComponent } from './feature/feature.component';
import { InfoComponent } from './info/info.component';
import { ButtonComponent } from './button/button.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ShippingComponent,
    TallSplitComponent,
    ShortSplitComponent,
    QtrHalfComponent,
    FeatureComponent,
    InfoComponent,
    ButtonComponent,
    NavBottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
