import { Injectable } from '@angular/core'
import { Hero } from '../../hero'
import { HEROES } from '../../mock-heroes'
import { MessageService } from '../message/message.service'
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor (private messageService: MessageService) {}

  getHeroes () {
    const heroes = HEROES
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }

  getHero (id: number) {
    const hero = HEROES.find(h => h.id === id) as Hero
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return hero
  }
}
