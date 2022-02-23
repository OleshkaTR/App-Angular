import { Injectable } from '@angular/core';
import {Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  games: any [] = [
    { title: 'DOOM Ethernal', price: 200, description: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'},
    { title: 'Assassin’s Creed', price: 300, description: 'Assassin’s Creed is an action-adventure game set in an open world environment and played from a third-person perspective in which the player primarily assumes the role of Altaïr, as experienced by protagonist Desmond Miles.'},
    { title: 'StarCraft', price: 400, description: 'StarCraft (SC) is a real-time strategy (RTS) computer game introduced by Blizzard Entertainment in 1998. It is similar to Blizzard’s previous hit Warcraft II, except that it has a space opera setting as opposed to a high fantasy setting.'}
  ];

  getGames() : Observable<any> {
    return of(this.games)
  }

  constructor() { }
}
