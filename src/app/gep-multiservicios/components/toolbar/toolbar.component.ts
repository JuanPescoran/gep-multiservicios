import { Component, Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


const MATERIAL_MODULE = [MatToolbarModule, MatIconModule, MatButtonModule];

@Component({
  selector: 'app-toolbar',
  imports: [MATERIAL_MODULE],
  template: `
    <mat-toolbar color="primary">
      <a mat-button>
        <mat-icon>home</mat-icon>
        <span>Home Page</span>
      </a>
      <a mat-button>
        <mat-icon>build</mat-icon>
        <span>Servicios</span>
      </a>

      <a mat-button>
        <mat-icon>phone</mat-icon>
        <span>Contáctanos</span>
      </a>
    </mat-toolbar>
  `,
  styles: `
  .mat-toolbar.mat-primary {
  background: #a3bf73;
  color: #fff;
}
  `
})
export class ToolbarComponent {
}
