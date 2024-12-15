import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  animations: [
    trigger('menuAnimation', [
      state('closed', style({
        transform: 'translateX(100%)', // Menú fuera de la pantalla
        opacity: 0,
      })),
      state('open', style({
        transform: 'translateX(0)', // Menú completamente visible
        opacity: 1,
      })),
      transition('closed => open', [
        animate('0.4s ease-out') // Suavidad al abrir
      ]),
      transition('open => closed', [
        animate('0.4s ease-in') // Suavidad al cerrar
      ]),
    ]),
  ]
})
export class NavComponent {

  urlWatssapp = 'https://wa.me/51964875184'
  textWatsapp = '?text=%C2%A1Hola%21%20%20Me%20gustar%C3%ADa%20conocer%20los%20planes%20que%20ofrece%20Red%20TeslaNet.%20%C2%BFPodr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%3F'

  menuVisible = false;

  get menuState() {
    return this.menuVisible ? 'open' : 'closed';
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  closeMenu() {
    this.menuVisible = false;
  }
}
