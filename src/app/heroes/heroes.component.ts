import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'

import { HEROES } from '../mock-heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero

  onSelect(hero: Hero) {
    this.selectedHero = hero
  }

  getColor(hero: Hero) {
    return this.selectedHero?.id === hero.id ? 'selected' : null
  }

  heroes: Hero[] = [...HEROES]

  constructor () {}

  ngOnInit (): void {}
}
