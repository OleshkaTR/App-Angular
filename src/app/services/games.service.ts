import { Injectable } from '@angular/core';
import {Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games: any [] = [
    { title: 'DOOM Ethernal', price: 100, description: 'Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity. The only thing they fear... is you.'},
    { title: 'Assassin’s Creed', price: 150, description: 'Assassin’s Creed is an action-adventure game set in an open world environment and played from a third-person perspective in which the player primarily assumes the role of Altaïr, as experienced by protagonist Desmond Miles.'},
    { title: 'StarCraft', price: 200, description: 'StarCraft (SC) is a real-time strategy (RTS) computer game introduced by Blizzard Entertainment in 1998. It is similar to Blizzard’s previous hit Warcraft II, except that it has a space opera setting as opposed to a high fantasy setting.'},
    { title: 'HoMaM', price: 250, description: 'Heroes of Might and Magic is a series of video games originally created and developed by New World Computing. ... The games feature turn-based, fantasy-themed conflicts in which players control armies of mythical creatures.'},
    { title: 'Stalker', price: 300, description: '1 : a person who stalks : a person who pursues someone obsessively and aggressively to the point of harassment celebrity stalkers In 1990, California was the first state to pass a stalking law that made it a crime to follow, threaten, or harass someone—especially if the stalker threatened violence'},
    { title: 'Disciples', price: 350, description: 'Disciples is a mature, dark fantasy strategy RPG with turn-based combat. Liberate the land of Nevendaar and uncover the endless stories hidden within this richly detailed world where every decision has a consequence, and every wrong move could be deadly.'}
  ];

  getGames() : Observable<any> {
    return of(this.games)
  }

  search(str: string) {
    return of(this.games.filter(game => game.title.includes(str)));
  }

  constructor() { }
}
