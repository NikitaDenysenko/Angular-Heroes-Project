import { Component, Input, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { HeroService } from '../services/hero/hero.service'

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero
  constructor (
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit (): void {
    this.getHero()
  }

  getHero (): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.hero = this.heroService.getHero(id)
  }

  goBack(): void {
    this.location.back();
  }
}
