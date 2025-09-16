export const environment = {
  production: false,
  mapboxToken: (window as any)?.__env?.MAPBOX_TOKEN || ''
};