import {Injectable} from '@angular/core';
import {Hero} from './hero-detail/hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {

    heroes: Hero[];

    getHeroes(): Promise<Hero[]> {

        this.heroes = HEROES;
        return Promise.resolve(this.heroes);

        // return new Promise(resolve => {
        //     setTimeout(() => {
        //
        //         this.heroes = HEROES;
        //         resolve(this.heroes);
        //     }, 2000);
        // });
    }
}
