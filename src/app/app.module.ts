import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromComponent } from './from/from.component';
import { KayitlarComponent } from './kayitlar/kayitlar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // inputtan verı alma yontemlerıdır
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, FromComponent, KayitlarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
