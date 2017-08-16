import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './views/home.component';
import { ScreenComponent } from "./views/screen.component";

@NgModule({
  imports: [
  	AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ScreenComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
