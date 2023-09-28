import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { WishComponent } from './wish/wish.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    WishComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
