import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FastfoodtableComponent } from './cocinero/components/fastfoodtable/fastfoodtable.component';
import { FastfoodDetailComponent } from './cocinero/components/fastfood-detail/fastfood-detail.component';
import { HomeComponent } from './cocinero/components/home/home.component';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './cocinero/components/footer/footer.component';
import { HeaderComponent } from './cocinero/components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FastfoodtableComponent,
    FastfoodDetailComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
