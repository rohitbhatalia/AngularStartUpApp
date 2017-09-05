import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService{
    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]>{
       // 

        this.http.get("http://localhost:8578/api/data").toPromise()
        .then(response => {
            response.json()
        }).catch(this.handleError);;

        return Promise.resolve(HEROES);
    }

    getHero(id: number): Promise<Hero>{
        return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
    }

    getNumber(): Promise<number>{
        return this.http.get("http://localhost:8578/api/values")
        .toPromise()
        .then(response => {
            response.json() as number
        })
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }
}