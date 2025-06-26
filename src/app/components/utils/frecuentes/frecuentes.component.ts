import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-frecuentes',
  standalone: true,
  imports: [],
  templateUrl: './frecuentes.component.html',
  styleUrl: './frecuentes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrecuentesComponent {
  mail = "tteslanet@gmail.com"
}
