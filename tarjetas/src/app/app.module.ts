import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaDeCreditoComponent } from './components/tarjeta-de-credito/tarjeta-de-credito.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaDeCreditoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
