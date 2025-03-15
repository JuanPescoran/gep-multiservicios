import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './gep-multiservicios/components/toolbar/toolbar.component'; 
import { MatCardModule } from '@angular/material/card';
import { HeroComponent } from './gep-multiservicios/components/hero/hero.component'; 
import { FormComponent } from './gep-multiservicios/components/form/form.component';
import { FeatureComponent } from './gep-multiservicios/components/feature/feature.component';
import { FooterComponent } from './gep-multiservicios/components/footer/footer.component';

const MATERIAL_MODULES = [MatCardModule];
const COMPONENTS = [ToolbarComponent, HeroComponent, FormComponent, FeatureComponent, FooterComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MATERIAL_MODULES, COMPONENTS],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gep-multiservicios';
}
