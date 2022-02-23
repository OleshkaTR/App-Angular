import { Component } from '@angular/core';

const items: string[] = [
  'games', 'library', 'friends', 'profile'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homeWorkAngular';

  submitted = false;

  onSubmit() { this.submitted = true; }

  public items: string[] = items;
  public activeItem: string | undefined;

  public onSelectItem(item: string): void {
    this.activeItem = item;
  }
}
