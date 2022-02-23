import { Component, OnInit } from '@angular/core';
import { LibraryService } from "../services/library.service";


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  games: any;

  constructor(private readonly libraryService: LibraryService) { }

  async ngOnInit(): Promise<void> {
    this.games = await this.libraryService.getGames().toPromise();
  }

}
