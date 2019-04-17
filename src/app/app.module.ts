import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// libs
import { ScCommonvfModule } from '@sc/commonvf';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScCommonvfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
