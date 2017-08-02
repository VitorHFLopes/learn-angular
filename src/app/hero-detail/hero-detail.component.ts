import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {

        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(parseInt(params.get('id'), 10)))
            .subscribe(hero => this.hero = hero);
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    private goBack() {

        this.location.back();
    }
}
