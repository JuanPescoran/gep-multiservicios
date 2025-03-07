import { Routes } from "@angular/router";
import path from "path";

const LandingPageRoute:Routes = [
    {
        path: '',
        loadComponent: () => import('src/app/gep-multiservicios/pages/landing-page/landing-page.component').then((m: { LandingPageComponent : any }) => m.LandingPageComponent),  
    }
]

export default LandingPageRoute;