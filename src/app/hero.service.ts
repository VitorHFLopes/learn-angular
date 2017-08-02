import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import {Hero} from './hero-detail/hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});
    heroes: Hero[];

    constructor(private http: Http) {}

    getHeroes(): Promise<Hero[]> {

        // this.heroes = HEROES;
        // return Promise.resolve(this.heroes);

        return this.http.get(this.heroesUrl).toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);

        // return new Promise(resolve => {
        //     setTimeout(() => {
        //
        //         this.heroes = HEROES;
        //         resolve(this.heroes);
        //     }, 2000);
        // });
    }

    getHero(id: number): Promise<Hero> {

        const url = `${this.heroesUrl}/${id}`;

        // return this.getHeroes()
        //     .then(heroes =>
        //         heroes.find(hero => hero.id === id));

        return this.http.get(url).toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {

        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {

        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {

        const url = `${this.heroesUrl}/${id}`;

        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {

        console.error('An erro occurred', error);
        return Promise.reject(error.message || error);
    }
}
