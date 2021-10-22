import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgIf2Component } from './components/ng-if2/ng-if2.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgIf2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
