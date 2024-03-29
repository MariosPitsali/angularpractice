import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { StripSpecialCharactersPipe } from './shared/strip_special_characters.pipe'
import { AvailabilityComponent } from './availability/availability.component';
import {HttpClient, HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Router, RouterModule } from '@angular/router';
import { HeroDetailGuard } from './heroes/hero-detail.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesListComponent,
    StripSpecialCharactersPipe,
    AvailabilityComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'heroes', component: HeroesListComponent},
      {
        path: 'heroes/:id', 
        canActivate: [HeroDetailGuard],
        component: HeroDetailComponent
      },
      {path: 'welcome', component: AppComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
