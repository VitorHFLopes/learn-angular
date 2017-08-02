import {HeroesComponent} from './heroes.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {NgModule} from '@angular/core';

const routes: Routes = [

    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},

    { path: 'heroes', component: HeroesComponent },

    { path: 'dashboard', component: DashboardComponent },

    { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

// Se houver guard services, eles devem estar declarados em providers, pois serão usados
// posteriormente pelas rotas
