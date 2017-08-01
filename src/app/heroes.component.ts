import {Component, OnInit} from '@angular/core';
import {Hero} from './hero-detail/hero';
import {HeroService} from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;
    heroService: HeroService;


    constructor(heroService: HeroService) {

        this.heroService = heroService;
    }

    ngOnInit(): void {

        this.getHeroes();
    }

    onSelect(hero: Hero): void {

        this.selectedHero = hero;
    }

    getHeroes(): void {

        this.heroService.getHeroes()
            .then(heroes =>
                this.heroes = heroes);
    }
}
