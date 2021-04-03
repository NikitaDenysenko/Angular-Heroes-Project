import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'

import { HeroService } from '../services/hero/hero.service'
import { MessageService } from '../services/message/message.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]

  constructor (
    private heroService: HeroService
  ) {}

  ngOnInit () {
    this.heroes = this.heroService.getHeroes()
  }
}
//routable hero details component