import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { CommonModule} from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendsComponent } from './friends/friends.component';
import { LibraryComponent } from './library/library.component';
import { GamesComponent } from './games/games.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    FriendsComponent,
    LibraryComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
