import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromComponent } from './from/from.component';
import { KayitlarComponent } from './kayitlar/kayitlar.component';

@NgModule({
  declarations: [
    AppComponent,
    FromComponent,
    KayitlarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
