import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlassgoComponent } from './glassgo/glassgo.component';
import { Part1Component } from './glassgo/part1/part1.component';
import { Part2Component } from './glassgo/part2/part2.component';
import { Part3Component } from './glassgo/part3/part3.component';
import { Part4Component } from './glassgo/part4/part4.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavbarComponent } from './glassgo/navbar/navbar.component';
import { SanityService } from './service/sanity.service';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [		
    AppComponent,
    GlassgoComponent,
    Part1Component,
    Part2Component,
    Part3Component,
    Part4Component,
    NavigationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,



  ],
  providers: [SanityService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
