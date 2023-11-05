import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FastfoodtableComponent } from './components/fastfoodtable/fastfoodtable.component';
import { FastfoodDetailComponent } from './components/fastfood-detail/fastfood-detail.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
<<<<<<< Updated upstream
=======
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
>>>>>>> Stashed changes


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
<<<<<<< Updated upstream
    RouterModule
=======
    RouterModule,
      MatSlideToggleModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
