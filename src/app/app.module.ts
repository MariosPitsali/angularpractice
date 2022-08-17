import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { StripSpecialCharactersPipe } from './shared/strip_special_characters.pipe'
import { AvailabilityComponent } from './availability/availability.component';

import { FormsModule } from '@angular/forms';
import { HeroesListComponent } from './heroes-list/heroes-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesListComponent,
    StripSpecialCharactersPipe,
    AvailabilityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
