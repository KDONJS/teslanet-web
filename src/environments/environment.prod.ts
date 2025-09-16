export const environment = {
  production: true,
  mapboxToken: (window as any)?.__env?.MAPBOX_TOKEN || ''
};