import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { Ventana1Component } from './components/ventana1/ventana1.component';
import { Ventana2Component } from './components/ventana2/ventana2.component';
import { Ventana3Component } from './components/ventana3/ventana3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Ventana1Component,
    Ventana2Component,
    Ventana3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
