import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { LibraryComponent } from './library/library.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  { path: '',
    redirectTo: '',
    pathMatch: 'full'},
  { path: 'profile',
    component: ProfileComponent },
  { path: 'friends',
    component: FriendsComponent },
  { path: 'library',
    component: LibraryComponent },
  { path: 'games',
    component: GamesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
