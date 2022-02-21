import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { CorpsComponent } from './corps/corps.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'accueil', component: CorpsComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: '**', redirectTo: '/accueil', pathMatch: 'full'}
];

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
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
