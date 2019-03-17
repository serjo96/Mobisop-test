import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './Pages/pages.module';
import { ComponentsModule } from './Components/components.module';


@NgModule({
  declarations: [
      AppComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ComponentsModule,
      PagesModule
  ],

  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
