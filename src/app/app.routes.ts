import {HeroesComponent} from './heroes.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

const routesDefinition: Routes = [
    {
        path: 'heroes', // URL na barra de endereço do navegador
        component: HeroesComponent // Componente a ser criado
    },
    {
        path: 'dashboard',
        component: DashboardComponent // Componente a ser criado
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const routes = RouterModule.forRoot(routesDefinition);
