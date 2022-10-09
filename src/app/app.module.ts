import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonerComponent } from './adddoner/adddoner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { Router, Routes } from '@angular/router';
const  appRoutes: Routes=[
  {
    path:"",component:AdddonerComponent
  },
      {
        path:"search",component:SearchComponent
    }
  
]
@NgModule({
  declarations: [
    AppComponent,
    AdddonerComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
