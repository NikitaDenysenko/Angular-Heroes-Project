import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeroesComponent } from './heroes/heroes.component'
import { HeroDetailsComponent } from './hero-details/hero-details.component'
import { MessagesComponent } from './messages/messages.component'
import { DashboardComponent } from './dashboard/dashboard.component'

import { TableModule } from 'primeng/table'
import { ButtonModule } from 'primeng/button'
import { RatingModule } from 'primeng/rating'
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    TableModule,
    RatingModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
