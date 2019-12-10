
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorComponent } from './components/profesor/profesor.component';
import { CursoComponent } from './components/curso/curso.component';


const appRoutes: Routes = [
    { path: '', component: CursoComponent }, 
    { path: 'curso', component: CursoComponent }, 
    { path: 'profesor', component: ProfesorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);