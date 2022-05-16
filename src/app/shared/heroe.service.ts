import { Injectable } from '@angular/core';
import { Heroe } from '../Heroe';
import { HEROES } from '../misHeroes';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private heroes:Heroe[]= HEROES;
  constructor() { }

  getHeroes():Heroe[]{
    return this.heroes;
  }

  getUnHeroe(posicion:number): Heroe{
    return this.heroes[posicion];
  }

  searchUnHeroe(nomheroe: string):number{
    let index = this.heroes.findIndex(p => p.nombre === nomheroe);
    return index;
  }
}
