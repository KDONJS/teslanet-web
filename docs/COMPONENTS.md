# Documentación de Componentes

Este proyecto contiene varios componentes de Angular utilizados para construir la interfaz del sitio web de Teslanet. A continuación se describen brevemente las responsabilidades y funcionalidades de cada componente.

## AppComponent

- **Ubicación:** `src/app/app.component.ts`
- **Descripción:** Componente raíz de la aplicación. Incluye la barra de navegación, las secciones principales (Home, Planes, Beneficios, Cobertura y Preguntas Frecuentes) y el pie de página.

## NavComponent

- **Ubicación:** `src/app/components/nav/nav.component.ts`
- **Descripción:** Barra de navegación principal. Centra el logo y el menú en pantallas grandes, implementa un menú responsive con animaciones para mostrar u ocultar las opciones e incluye un enlace de contacto por WhatsApp.

## HomeComponent

- **Ubicación:** `src/app/components/home/home.component.ts`
- **Descripción:** Sección de inicio con un carrusel de imágenes. Permite desplazamiento automático y navegación mediante fragmentos para enfocar elementos de la página.

## PlanesComponent

- **Ubicación:** `src/app/components/planes/planes.component.ts`
- **Descripción:** Muestra los planes de Internet en un carrusel automático con indicadores y flechas de navegación. Las tarjetas resaltan el plan recomendado y generan un enlace dinámico a WhatsApp para solicitar más información.

## BeneficiosComponent

- **Ubicación:** `src/app/components/beneficios/beneficios.component.ts`
- **Descripción:** Sección que resume las principales ventajas del servicio de fibra óptica (alta velocidad, estabilidad y soporte 24/7).

## CoverturaComponent

- **Ubicación:** `src/app/components/covertura/covertura.component.ts`
- **Descripción:** Utiliza Leaflet para mostrar un mapa con la zona de cobertura de Teslanet. Ajusta el zoom a la región delimitada, marca puntos de interés y libera la instancia del mapa al destruirse el componente.

## FooterComponent

- **Ubicación:** `src/app/components/footer/footer.component.ts`
- **Descripción:** Pie de página que organiza el contacto, las redes sociales y el logotipo en una cuadrícula responsive para facilitar la lectura.

## FrecuentesComponent

- **Ubicación:** `src/app/components/utils/frecuentes/frecuentes.component.ts`
- **Descripción:** Módulo de preguntas frecuentes. Incluye secciones expandibles con respuestas sobre pagos, soporte, equipos y otros temas.

