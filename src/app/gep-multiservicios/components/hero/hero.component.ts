import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-hero',
  imports: [NgFor],
  template: `
    <div class="carousel-container">
      <div class="carousel-slide" *ngFor="let slide of slides; let i = index" 
          [class.active]="i === currentIndex">
        <img [src]="slide.image" alt="Slide {{i+1}}">
        <h1 class="hero-title" [@slideIn]="i === currentIndex ? 'visible' : 'hidden'">
          {{ slide.text }}
        </h1>
      </div>

      <!-- Botones de navegación -->
      <button class="prev" (click)="prevSlide()">&#10094;</button>
      <button class="next" (click)="nextSlide()">&#10095;</button>
    </div>
  `,
  styles: [`
    .carousel-container {
      position: relative;
      width: 100%;
      max-width: 800px;
      height: 600px;
      overflow: hidden;
      margin: auto;
    }
    
    .carousel-slide {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s ease-in-out;
    }
    
    .carousel-slide.active {
      opacity: 1;
    }
    
    .carousel-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hero-title {
      position: absolute;
      bottom: 20%;
      left: 10%;
      color: white;
      font-size: 2rem;
      font-weight: bold;
    }

    /* Botones de navegación */
    .prev, .next {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
    }
    
    .prev { left: 10px; }
    .next { right: 10px; }

  `],
  animations: [
    trigger('slideIn', [
      state('hidden', style({ opacity: 0, transform: 'translateX(-50px)' })),
      state('visible', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('hidden => visible', animate('600ms ease-in')),
    ])
  ]
})
export class HeroComponent {
  slides = [
    { image: 'https://imgur.com/Lmhhyo1.jpg', text: 'Venta de Cercos Eléctricos y Alarmas' },
    { image: 'https://imgur.com/0ndlrj9.jpg', text: 'Protección y Seguridad Garantizada' },
    { image: 'https://imgur.com/xRg1OXH.jpg', text: 'Contáctanos para una Cotización' },
    { image: 'https://imgur.com/AYfBBqH.jpg', text: 'Contáctanos para una Cotización' }

    
  ];
  
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
