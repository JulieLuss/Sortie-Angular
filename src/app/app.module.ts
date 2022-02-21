import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnTeteComponent } from './Pages/en-tete/en-tete.component';
import { PiedDePageComponent } from './Pages/pied-de-page/pied-de-page.component';
import { CorpsComponent } from './Pages/corps/corps.component';

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    PiedDePageComponent,
    CorpsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
