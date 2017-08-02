import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {HeroService} from './hero.service';
import {HeroSearchComponent} from './hero-search/hero-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        HeroSearchComponent
    ], // Lista de componentes, pipes e diretivas da aplicacao que pertence ao modulo
    providers: [HeroService], // Cria um instancia para ser usado depois, um singleton
    bootstrap: [AppComponent]
})
export class AppModule {}
