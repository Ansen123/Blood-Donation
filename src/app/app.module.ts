import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonerComponent } from './adddoner/adddoner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { ViewAllComponent } from './view-all/view-all.component';
const  appRoutes: Routes=[
  {
    path:"",component:AdddonerComponent
  },
      {
        path:"search",component:SearchComponent
    },
    {
      path:"delete",component:DeleteComponent
    },
    {
      path:"view-all",component:ViewAllComponent
    }
  
]
@NgModule({
  declarations: [
    AppComponent,
    AdddonerComponent,
    NavbarComponent,
    SearchComponent,
    DeleteComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
