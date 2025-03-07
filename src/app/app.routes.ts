import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
    {path: '', redirectTo: '/landing-page', pathMatch: 'full'},
    {path: 'landing-page', loadChildren:() => import('./gep-multiservicios/pages/landing-page/landing-page.routes')},
    { path: '**', redirectTo: '/landing-page'}

];
