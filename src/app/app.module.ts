import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './task1/cards/cards.component';
import { MapUsersPipe } from './task1/map.users.pipe';
import { Task1Component } from './task1/task1.component';
import { UsersService } from './task1/users.servis';
import { ChangerDirective } from './task2/changer.directive';
import { Task2Component } from './task2/task2.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    ChangerDirective,
    MapUsersPipe,
    CardsComponent,
  ],
  imports: [BrowserModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
