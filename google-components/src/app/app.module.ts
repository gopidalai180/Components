import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GoogleimgComponent } from './googleimg/googleimg.component';
import { GooglesearchComponent } from './googlesearch/googlesearch.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GoogleimgComponent,
    GooglesearchComponent,
    ButtonsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
