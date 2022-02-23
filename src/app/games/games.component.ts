import { Component, OnInit } from '@angular/core';
import { GamesService } from "../services/games.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: any;
  formControl!: FormControl;

  constructor(private readonly gamesService: GamesService) { }

  async ngOnInit(): Promise<void> {
    this.formControl = new FormControl('');
    this.games = await this.gamesService.getGames().toPromise();
  }

  async search(): Promise<void> {
    this.games = await this.gamesService.search(this.formControl.value).toPromise();
  }

}
