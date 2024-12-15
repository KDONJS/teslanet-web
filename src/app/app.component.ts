import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PlanesComponent } from './components/planes/planes.component';
import { BeneficiosComponent } from './components/beneficios/beneficios.component';
import { CoverturaComponent } from './components/covertura/covertura.component';
import { FrecuentesComponent } from "./components/utils/frecuentes/frecuentes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    HomeComponent,
    FooterComponent,
    PlanesComponent,
    BeneficiosComponent,
    CoverturaComponent,
    FrecuentesComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teslanet';
}
