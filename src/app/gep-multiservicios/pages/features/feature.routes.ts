import { Routes } from "@angular/router";
import path from "path";

const featuresRoutes:Routes = [
    {
        path: '',
        loadComponent: () => import('./features.component').then((m: { FeaturesComponent: any }) => m.FeaturesComponent),  
    }
]

export default featuresRoutes;