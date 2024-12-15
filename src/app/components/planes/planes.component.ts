import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSplideModule } from 'ngx-splide';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [
    CommonModule,
    NgxSplideModule,
    MatIconModule
  ],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export class PlanesComponent {
  opciones = {
    perPage: 3,
    perMove: 1,
    breakpoints: {
      1024: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      }
    }
  };

  imagenes  = [
    {
      src: 'assets/img/router.png',
      veneficio:{
        instalacion: '',
        tipo: 'internet 100% fibra optica',
      },
      alt: 'Plan 30Mb - S/40',
      plan: '30Mb',
      precio: 'S/40'
    },
    {
      src: 'assets/img/router.png',
      veneficio:{
        instalacion: 'recomendado',
        tipo: 'internet 100% fibra optica',
      },
      alt: 'Plan 100Mb - S/50',
      plan: '100Mb',
      precio: 'S/50'
    },
    {
      src: 'assets/img/router.png',
      veneficio:{
        instalacion: '',
        tipo: 'internet 100% fibra optica',
      },
      alt: 'Plan 150Mb - S/60',
      plan: '150Mb',
      precio: 'S/60'
    },
    {
      src: 'assets/img/router.png',
      veneficio:{
        instalacion: '',
        tipo: 'internet 100% fibra optica',
      },
      alt: 'Plan 200Mb - S/70',
      plan: '200Mb',
      precio: 'S/70'
    },
    {
      src: 'assets/img/router.png',
      veneficio:{
        instalacion: 'recomendado',
        tipo: 'internet 100% fibra optica',
      },
      alt: 'Plan 250Mb - S/80',
      plan: '250Mb',
      precio: 'S/80'
    },
    {
      src: 'assets/img/router.png',
      veneficio:{
        instalacion: '',
        tipo: 'internet 100% fibra optica',
      },
      alt: 'Plan 300Mb - S/90',
      plan: '300Mb',
      precio: 'S/90'
    },
    {
      src: 'assets/img/router.png',
      veneficio:{
        instalacion: 'recomendado',
        tipo: 'internet 100% fibra optica',
      },
      alt: 'Plan 350Mb - S/100',
      plan: '350Mb',
      precio: 'S/100'
    }
  ];

  numeroWhatsApp = '51964875184';

  generarUrlWhatsApp(plan: string, precio: string): string {
    const mensaje = `¡Hola! Estoy interesado en el plan ${plan} que cuesta ${precio}. ¿Podrían proporcionarme más información y los pasos para contratarlo? ¡Gracias!`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    return `https://wa.me/${this.numeroWhatsApp}?text=${mensajeCodificado}`;
  }
  
}
