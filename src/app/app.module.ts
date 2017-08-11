import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdDatepickerModule} from '@angular/material';
import {MdNativeDateModule} from '@angular/material';
import { Md2Module } from 'md2';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { MilkywayComponent } from './milkyway/milkyway.component';
import { PicofthedayComponent } from './picoftheday/picoftheday.component';
import { PicfrommarsComponent } from './picfrommars/picfrommars.component';
import { NetworkComponent } from './network/network.component';
import { GallerypotdComponent } from './picoftheday/gallerypotd/gallerypotd.component';
import { GallerypfmComponent } from './picfrommars/gallerypfm/gallerypfm.component';

// const est une constante
// : Routes type
const appRoutes: Routes = [
  { path: 'Gallerypotd', component: GallerypotdComponent
  },
  { path: 'Gallerypfm', component: GallerypfmComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MilkywayComponent,
    PicofthedayComponent,
    PicfrommarsComponent,
    NetworkComponent,
    GallerypotdComponent,
    GallerypfmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdInputModule,
    MdNativeDateModule,
    FormsModule,
    Md2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
