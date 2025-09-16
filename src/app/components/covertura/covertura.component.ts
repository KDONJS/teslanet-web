import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import mapboxgl, { Map, Marker, Popup } from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-covertura',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './covertura.component.html',
  styleUrl: './covertura.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoverturaComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map', { static: false }) mapEl!: ElementRef<HTMLDivElement>;
  private map!: Map;

  // Estilos de mapa disponibles
  public mapStyles = [
    { id: 'streets-v12', name: 'Calles', style: 'mapbox://styles/mapbox/streets-v12' },
    { id: 'satellite-streets-v12', name: 'Satélite', style: 'mapbox://styles/mapbox/satellite-streets-v12' },
    { id: 'light-v11', name: 'Claro', style: 'mapbox://styles/mapbox/light-v11' },
    { id: 'dark-v11', name: 'Oscuro', style: 'mapbox://styles/mapbox/dark-v11' },
    { id: 'outdoors-v12', name: 'Exterior', style: 'mapbox://styles/mapbox/outdoors-v12' }
  ];

  public currentStyle = 'streets-v12';

  private customRegionCoords: [number, number][] = [
    [-76.93516038060726, -12.186885961398],
    [-76.93445729684855, -12.18812152468031],
    [-76.93402454206004, -12.1887878143747],
    [-76.93204109846481, -12.19114893743754],
    [-76.93347381820826, -12.19190173336623],
    [-76.9349907310452, -12.19201080636206],
    [-76.93578774709977, -12.19326537890342],
    [-76.93423379588658, -12.19558426864074],
    [-76.93291917738769, -12.19758475061389],
    [-76.92798277114618, -12.20604338933488],
    [-76.92486400941233, -12.20983025341421],
    [-76.92392678436444, -12.20879694853691],
    [-76.92274931547784, -12.20722618764132],
    [-76.92157139997663, -12.2067497137216],
    [-76.91965112776261, -12.20786779178989],
    [-76.91926585065212, -12.20752148967718],
    [-76.91892313047241, -12.20628652879557],
    [-76.92259418579137, -12.20534279602118],
    [-76.92254419277856, -12.20408522548317],
    [-76.92340667535424, -12.20308705902563],
    [-76.92198927308087, -12.20231878611447],
    [-76.91983577644346, -12.20045516091419],
    [-76.9199767626757, -12.19929116363567],
    [-76.91746839971943, -12.19808260519753],
    [-76.91923694651379, -12.19520654043889],
    [-76.91750051109474, -12.19365007310417],
    [-76.91865314056095, -12.1914555193293],
    [-76.9193003429003, -12.1902484787444],
    [-76.91699367098903, -12.18862688023535],
    [-76.91950167437318, -12.18478142559332],
    [-76.92125282256416, -12.18420970773757],
    [-76.92184978880623, -12.18353072749263],
    [-76.92171798072597, -12.18207705766405],
    [-76.92200042155299, -12.18181106554831],
    [-76.92240250879736, -12.18212996535881],
    [-76.92305027398575, -12.18240506082615],
    [-76.92335601671672, -12.18150899216556],
    [-76.92251862907297, -12.18065924755586],
    [-76.92304209287956, -12.17938828733797],
    [-76.92381335311696, -12.17803981903226],
    [-76.92345353251831, -12.17791757672652],
    [-76.9232232548823, -12.17752078355461],
    [-76.92319950335323, -12.17712966531108],
    [-76.92281212581644, -12.17705657479076],
    [-76.92219917296077, -12.17707980396909],
    [-76.92150542772305, -12.17667079760084],
    [-76.92112375111387, -12.17623907858718],
    [-76.92171290949248, -12.17557971609238],
    [-76.92218376109872, -12.17544475993621],
    [-76.92240593215134, -12.17577566181509],
    [-76.9232321618082, -12.17560964814678],
    [-76.92396996665293, -12.17441026885435],
    [-76.92501719125234, -12.17440896371655],
    [-76.92511184207167, -12.17397578146909],
    [-76.92581053247363, -12.17383292579133],
    [-76.92649433994463, -12.17420752131332],
    [-76.92552438226457, -12.17213154476077],
    [-76.92660806674138, -12.17073866357627],
    [-76.92667938055943, -12.17006413544184],
    [-76.9276076989085, -12.17078350616263],
    [-76.92791462825998, -12.17283550085991],
    [-76.92721214715424, -12.17284980040215],
    [-76.92741474992403, -12.17333036925814],
    [-76.92987734245669, -12.17463716066283],
    [-76.93116117132392, -12.17513005155584],
    [-76.93162189622812, -12.17558145847821],
    [-76.93424674679191, -12.17766970953612],
    [-76.93565040252689, -12.17830892254416],
    [-76.93620026937265, -12.17875480874626],
    [-76.93749786191088, -12.18057796328727],
    [-76.93590383709527, -12.18256259539212],
    [-76.93428640040418, -12.18162954349622],
    [-76.93314263284033, -12.18001304688186],
    [-76.93391466789717, -12.17893814231205],
    [-76.93262111434834, -12.17864371860517],
    [-76.93236724813498, -12.17939895910655],
    [-76.93150706126622, -12.1795303910619],
    [-76.93066433413551, -12.17926588933358],
    [-76.92961129349507, -12.17936571048372],
    [-76.92937226811873, -12.18041280990915],
    [-76.92979746167639, -12.18154043813304],
    [-76.93042644420123, -12.18250191200976],
    [-76.93009352698314, -12.1830209638317],
    [-76.93076134020451, -12.18336415396405],
    [-76.93100017372826, -12.18305708187031],
    [-76.93124417232683, -12.18318338045117],
    [-76.93200713901058, -12.18396985493188],
    [-76.93250780390296, -12.1840796919116],
    [-76.93280635544789, -12.18433333226537],
    [-76.93341742295726, -12.18432361360186],
    [-76.93439630210145, -12.18257498382227],
    [-76.93517614474044, -12.18363634527434],
    [-76.93516038060726, -12.186885961398],
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    mapboxgl.accessToken = environment.mapboxToken;
  }

  private initMap(): void {
    // Evita errores con Angular Universal (SSR)
    if (!isPlatformBrowser(this.platformId)) return;

    this.map = new mapboxgl.Map({
      container: this.mapEl.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-76.929, -12.192],
      zoom: 13,
      minZoom: 10,
      maxZoom: 18,
      // Mejorar el comportamiento del zoom
      scrollZoom: {
        around: 'center' // Zoom centrado en el centro del mapa
      },
      doubleClickZoom: true,
      touchZoomRotate: true,
      dragRotate: false, // Desactivar rotación para mejor UX
      pitchWithRotate: false
    });

    // Controles de navegación mejorados
    this.map.addControl(new mapboxgl.NavigationControl({
      showCompass: false, // Ocultar brújula ya que desactivamos rotación
      showZoom: true,
      visualizePitch: false
    }), 'top-right');
    
    this.map.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    // Agregar el polígono de cobertura cuando el mapa se carga
    this.map.on('load', () => {
      this.addCoverageLayer();
      this.fitToCoverage();
    });

    // Agregar marcador de punto de cobertura
    const popup = new Popup({
      closeOnClick: false,
      closeButton: true
    }).setHTML('<b>San Francisco de Tablada de Lurin</b><br/>Cobertura TESLANET');
    
    new Marker({
      color: '#3856ff'
    }).setLngLat([-76.929, -12.192]).setPopup(popup).addTo(this.map);
  }

  private addCoverageLayer(): void {
    this.map.addSource('coverage-area', {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [this.customRegionCoords]
        },
        properties: {}
      }
    });

    this.map.addLayer({
      id: 'coverage-fill',
      type: 'fill',
      source: 'coverage-area',
      paint: {
        'fill-color': '#30a3e6',
        'fill-opacity': 0.3
      }
    });

    this.map.addLayer({
      id: 'coverage-outline',
      type: 'line',
      source: 'coverage-area',
      paint: {
        'line-color': '#3856ff',
        'line-width': 2
      }
    });
  }

  private fitToCoverage(): void {
    const bounds = new mapboxgl.LngLatBounds();
    this.customRegionCoords.forEach(coord => bounds.extend(coord));
    this.map.fitBounds(bounds, { 
      padding: 80,
      maxZoom: 15 // Limitar el zoom máximo al ajustar
    });
  }

  // Método para cambiar el estilo del mapa - CORREGIDO
  public changeMapStyle(event: Event): void {
    if (!this.map || !isPlatformBrowser(this.platformId)) return;
    
    const target = event.target as HTMLSelectElement;
    const styleId = target.value;
    
    const selectedStyle = this.mapStyles.find(style => style.id === styleId);
    if (selectedStyle) {
      this.currentStyle = styleId;
      
      // Guardar el estado actual del mapa
      const currentCenter = this.map.getCenter();
      const currentZoom = this.map.getZoom();
      
      // Cambiar el estilo
      this.map.setStyle(selectedStyle.style);
      
      // Restaurar las capas cuando el nuevo estilo se carga
      this.map.once('styledata', () => {
        this.addCoverageLayer();
        
        // Restaurar la vista
        this.map.setCenter(currentCenter);
        this.map.setZoom(currentZoom);
      });
    }
  }

  // Método para centrar en la zona de cobertura
  public centerOnCoverage(): void {
    if (!this.map || !isPlatformBrowser(this.platformId)) return;
    this.fitToCoverage();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}