import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Imagen {
  url: string;
  texto: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy{
  imagenes: Imagen[] = [
    { url: 'assets/img/hero3.webp', texto: 'Texto para la imagen 1' },
    { url: 'assets/img/hero2.webp', texto: 'Texto para la imagen 2' },
    { url: 'assets/img/hero1.webp', texto: 'Texto para la imagen 3' }
  ];
  indiceActual: number = 0;
  intervaloAutoDesplazamiento: any;

  ngOnInit(): void {
    this.iniciarAutoDesplazamiento();
  }

  ngOnDestroy(): void {
    this.detenerAutoDesplazamiento();
  }

  getTransform(): string {
    return `translateX(-${this.indiceActual * 100}%)`;
  }

  siguiente(): void {
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
  }

  anterior(): void {
    this.indiceActual = (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
  }

  iniciarAutoDesplazamiento(): void {
    this.intervaloAutoDesplazamiento = setInterval(() => {
      this.siguiente();
    }, 5000); // Cambia de imagen cada 5 segundos
  }

  detenerAutoDesplazamiento(): void {
    if (this.intervaloAutoDesplazamiento) {
      clearInterval(this.intervaloAutoDesplazamiento);
    }
  }
}
