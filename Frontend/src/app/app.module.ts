import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/layout-area/layout/layout.component';
import { MenuComponent } from './components/layout-area/menu/menu.component';
import { HomeComponent } from './components/home-area/home/home.component';
import { ListComponent } from './components/data-area/list/list.component';
import { InsertComponent } from './components/data-area/insert/insert.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';
import { GamesTableComponent } from './list/games-table/games-table.component';
import { GameCardComponent } from './list/game-card/game-card.component';

@NgModule({
    declarations: [
        LayoutComponent,
        MenuComponent,
        HomeComponent,
        ListComponent,
        InsertComponent,
        PageNotFoundComponent,
        GamesTableComponent,
        GameCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    bootstrap: [LayoutComponent]
})
export class AppModule { }
