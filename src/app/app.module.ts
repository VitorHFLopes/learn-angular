import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import {AppComponent} from './app.component';
import {routes} from './app.routes';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routes
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ], // Lista de componentes, pipes e diretivas da aplicacao que pertence ao modulo
    providers: [HeroService], // Cria um instancia para ser usado depois, um singleton
    bootstrap: [AppComponent]
})
export class AppModule {}
