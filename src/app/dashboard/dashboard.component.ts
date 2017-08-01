import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero-detail/hero';
import {HeroService} from '../hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{

    heroes: Hero[];
    heroService: HeroService;

    constructor(heroService: HeroService) {

        this.heroService = heroService;
    }

    ngOnInit() {

        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(5));
    }
}