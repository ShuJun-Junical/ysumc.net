import L from 'leaflet';
import points from './points.js';

import iconPointHeart from '@/asset/icons/point-heart.svg';

export const mapOptions = {
  crs: L.CRS.Simple,
  attributionControl: false,
  center: [-270, 480],
  zoom: 1,
  zoomSnap: 0.5,
  minZoom: 0,
  maxZoom: 4,
  maxBounds: [
    [-540, 0],
    [0, 960],
  ],
};

export const buildingType = {
  dorm: {
    color: '#3b3b3b',
    isSpecial: false,
    icon: 'M78.5,35.7h-14.1v-2c0-2.8-2.3-5.1-5.1-5.1h-30.3c-2.8,0-5.1,2.3-5.1,5.1v43.5h4v-5.1h32.3v5.1h4v-5.1h12.1v5.1h4v-39.4c0-1.1-.9-2-2-2ZM40.1,32.7h8.1v3h-8.1v-3ZM28,33.7c0-.6.5-1,1-1h7.1v3h-8.1v-2ZM60.4,67.9h-32.3v-2h32.3v2ZM60.4,61.9h-20.2c.6,0,1-.5,1-1v-2c0-.6-.5-1-1-1h-12.1v-12.1h32.3v16.2ZM60.4,41.7h-32.3v-2h32.3v2ZM60.4,35.7h-8.1v-3h7.1c.6,0,1,.5,1,1v2ZM76.5,67.9h-12.1v-4h12.1v4ZM76.5,59.9h-12.1v-4h12.1v4ZM76.5,51.8h-12.1v-4h12.1v4ZM76.5,43.7h-12.1v-4h12.1v4Z',
  },
  lab: {
    color: '#66cccc',
    isSpecial: false,
    icon: 'M57.2,19.8l10.6,18.4c.9,1.6.4,3.6-1.2,4.5l-4.2,2.4,3.3,5.7-5.7,3.3-3.3-5.7-4.2,2.5c-1.6.9-3.6.4-4.5-1.2l-6-10.4c-8.6,2.6-13.5,11.7-10.9,20.4.1.4.2.7.4,1,2.6-1.7,5.6-2.5,8.7-2.5,5.5,0,10.4,2.7,13.3,6.9l25.1-14.5,3.3,5.7-25.7,14.8c.5,2.2.5,4.5,0,6.7h26.4s0,6.5,0,6.5H27.2c-2.1-2.8-3.3-6.3-3.3-9.8,0-3.3,1-6.3,2.6-8.9-5.9-11.2-1.6-25,9.5-30.9.8-.4,1.7-.8,2.6-1.2l-1.3-2.2c-1.8-3.1-.7-7.1,2.4-8.9l8.5-4.9c3.1-1.8,7.1-.7,8.9,2.4h0ZM40.2,64.6c-5.4,0-9.8,4.4-9.8,9.8,0,1.1.2,2.2.6,3.3h18.5c1.8-5.1-.9-10.7-6-12.5-1-.4-2.2-.6-3.3-.6ZM51.6,23.1l-8.5,4.9,9,15.5,8.5-4.9s-9-15.5-9-15.5Z',
  },
  gym: {
    color: '#66cccc',
    isSpecial: false,
    icon: 'M77,29.1h-48.5c-3.8,0-6.8,3.1-6.8,6.8v39.6c0,3.8,3.1,6.8,6.8,6.8h48.5c3.8,0,6.8-3.1,6.8-6.8v-39.6c0-3.8-3.1-6.8-6.8-6.8ZM26.1,42.7c4.4,2.5,7.4,7,7.4,12.2s-3,9.8-7.4,12.2v-24.4ZM28.4,77.9c-1.3,0-2.3-1-2.3-2.3v-3.5c6.9-2.8,11.8-9.4,11.8-17.1s-4.9-14.3-11.8-17.1v-2c0-1.3,1-2.3,2.3-2.3h22.9v44.4h-22.9ZM77.1,77.9h-21.4v-44.4h21.4c1.3,0,2.3,1,2.3,2.3v2c-6.9,2.8-11.8,9.4-11.8,17.1s4.9,14.3,11.8,17.1v3.5c0,1.3-1,2.3-2.3,2.3ZM79.4,42.7v24.4c-4.4-2.5-7.4-7-7.4-12.2s3-9.8,7.4-12.2Z',
  },
  live: {
    color: '#cc6666',
    isSpecial: false,
    icon: 'M79.6,29.9v-1.2c-.1,0-1.4-.2-1.4-.2,0,0-1.8-.3-4.4-.3s-7.5.4-11.7,2.4c-3.2,1.5-6.1,5-8.5,10.4-.4.9-.7,1.7-1,2.5-.5-1.6-1.1-3.1-1.9-4.5-1.4-2.6-3.3-4.7-5.6-6.2-5.6-3.7-11-4.5-14.6-4.5s-4.3.4-4.4.4l-1.1.3v1.2c-.1.1-.4,3.2.3,7.1.4,2.3,1.1,4.5,2,6.4,1.1,2.4,2.7,4.5,4.5,6.1,2.7,2.3,5.5,4,8.5,5,2.3.8,4.7,1.2,7.1,1.2s2.7-.2,3.7-.3v4.3h-16v19.6c0,3,2.5,5.5,5.5,5.5h25.1c3,0,5.5-2.5,5.5-5.5v-19.6h-16.8v-9.1c2.2.4,4.3.5,6.2.5,6.3,0,11.2-1.9,14.5-5.6,5.6-6.3,4.5-15.4,4.5-15.8Z',
  },
  landmark: {
    color: '#1f296a',
    isSpecial: false,
    icon: 'M75.2,77.7c-.2-.2-.3-.4-.7-.4h-1.7v-6.7c0-.3-.4-.6-1-.6h-.8v-17h.8c.7,0,1.1-.5,1.1-1.1v-9.1c0-.7-.5-1.1-1.1-1.1h-.8v-8.7h.4c.7,0,1.1-.5,1.1-1.1v-9.1c0-.7-.5-1.1-1.1-1.1h-38.2c-.7,0-1.1.5-1.1,1.1v9.1c0,.6.5,1.1,1.1,1.1h.4v8.7c-.6,0-1.1.5-1.1,1.1v9.1c0,.6.5,1.1,1.1,1.1v17h-.8c-.5,0-1,.3-1,.6v6.7h-1.7c-.4,0-.6.2-.7.4l-2.3,2.6h50.4l-2.3-2.6ZM66.5,41.7h-1.3v-8.7h1.3v8.7ZM45.8,41.7v-8.7h3.3v8.7h-3.3ZM58.8,32.9v8.7h-3.3v-8.7h3.3ZM39.4,32.9v8.7h-1.3v-8.7h1.3ZM38.1,68.4v-15.4h28.4v15.4c0,.7-.3,1.3-.7,1.6h-7.2v-.2c1.6-1.6,2.6-3.8,2.6-6.3,0-4.9-3.9-8.8-8.8-8.8s-8.8,3.9-8.8,8.8,1,4.7,2.6,6.3v.2h-7.3c-.4-.3-.7-.9-.7-1.6ZM56,58.6c-.2-1-1-1.7-1.9-1.7h-3.7c-.9,0-1.7.7-1.9,1.7l-2,9.1c-.9-1.2-1.4-2.6-1.4-4.2,0-3.9,3.2-7.1,7.1-7.1s7.1,3.2,7.1,7.1-.5,3-1.4,4.2l-2-9.1Z',
  },
  building: {
    color: '#66cccc',
    isSpecial: false,
    icon: 'M80.8,80.3h-55.2c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h2.5v-47.7c0-4.1,3.3-7.6,7.6-7.6h17.8c4.1,0,7.6,3.3,7.6,7.6v13.2l11.9,3.4c3.3,1,5.4,3.9,5.5,7.2v23.8h2.5c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5h-.2ZM61,75.3h12.3v-23.8c0-1.2-.7-2.2-1.8-2.5l-10.5-3v8.7h5c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5h-5v4.2h5c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5h-5v6.4h0ZM52.1,75.3h3.9v-47.7c0-1.4-1.1-2.5-2.5-2.5h-17.8c-1.4,0-2.5,1.1-2.5,2.5v47.7h3.9v-10c0-1.4,1.1-2.5,2.5-2.5h10c1.4,0,2.5,1.1,2.5,2.5h0v10ZM42.1,75.3h5v-7.6h-5v7.6ZM49.5,56.4h-10c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h10c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5ZM49.5,46.4h-10c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h10c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5ZM49.5,36.4h-10c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5h10c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5Z',
  },
  park: {
    color: '#1f296a',
    isSpecial: false,
    icon: 'M38.1,23.6c2.4,0,4.6.9,6.4,2.4,1.8,1.6,2.9,3.8,3.2,6.1l2.3,17.3c.2,1.4,0,2.8-.3,4.2-.4,1.3-1.1,2.6-2,3.7-.9,1.1-2,1.9-3.3,2.5-1.3.6-2.6.9-4,.9h-.5v16.9h14v-4.5h-1.2c-.3,0-.6-.1-.9-.4-.2-.2-.4-.5-.4-.9v-4.9c0-.3.1-.6.4-.9.2-.2.5-.4.9-.4h3.6v-4.9h-3.6c-.3,0-.6-.1-.9-.4-.2-.2-.4-.5-.4-.9v-4.9c0-.3.1-.6.4-.9.2-.2.5-.4.9-.4h26.7c.3,0,.6.1.9.4.2.2.4.5.4.9v4.9c0,.3-.1.6-.4.9-.2.2-.5.4-.9.4h-3.6v4.9h3.6c.3,0,.6.1.9.4.2.2.4.5.4.9v4.9c0,.3-.1.6-.4.9-.2.2-.5.4-.9.4h-1.2v4.5h2.4c.6,0,1.3.3,1.7.8.5.5.7,1.1.7,1.7,0,.7-.3,1.7-.7,2.1-.5.5-1.1.7-1.7.7h-54.4c-.6,0-1.3-.3-1.7-.7-.5-.5-.7-1.3-.7-2s.3-1.5.7-1.9c.4-.5,1.1-.8,1.7-.8h8.3v-16.8h-1.1c-1.4,0-2.7-.3-4-.9-1.3-.6-2.4-1.4-3.3-2.5-.9-1.1-1.6-2.3-2-3.7-.4-1.3-.5-2.8-.3-4.2l2.3-17.3c.3-2.4,1.5-4.5,3.2-6.1,1.8-1.6,4-2.4,6.4-2.4h2.4ZM75.6,77.5v-4.5h-19.4v4.5h19.4ZM73,60.6h-14v4.9s14,0,14,0v-4.9h0Z',
  },
  canteen: {
    color: '#d36839',
    isSpecial: false,
    icon: 'M73.8,82.3c0,2.4-.6,4-2.9,4-2.3,0-2.8-1.6-2.8-4v-23c-.2,0-6.6-.9-8.8-7.4,0,0,2.7-30.8,12.6-30.8,2.5,0,1.8,6.7,1.8,6.7v54.5ZM44.2,51.2h-1.2l1.7,31.1c0,2.4-2.2,4-4.5,4s-4.4-1.6-4.4-4l1.7-31.1h-1.3c-.9,0-5.5-8.4-5.5-9.9l2.2-20.2s3,.1,3,.1v13.3c0,1.5,0,2.7,1.4,2.7s1.5-1.2,1.5-2.7v-13.3s4.1,0,4.1,0v13.5c0,1.5.2,2.5,1.7,2.5s1.5-1,1.5-2.5v-13.5h2.5l2.1,20c0,1.5-5.7,9.9-6.7,9.9Z',
  },
  library: {
    color: '#66cccc',
    isSpecial: false,
    icon: 'M36.7,82.8h-8.4c-1.7,0-3.1-1.4-3.1-3.1v-52c0-1.7,1.4-3.1,3.1-3.1h8.4c1.7,0,3.1,1.4,3.1,3.1v52c0,1.7-1.4,3.1-3.1,3.1ZM29.7,34.2h5.6v-5.1h-5.6v5.1ZM54.3,83.1h-8.4c-1.7,0-3.1-1.4-3.1-3.1v-52c0-1.7,1.4-3.1,3.1-3.1h8.4c1.7,0,3.1,1.4,3.1,3.1v52c0,1.7-1.4,3.1-3.1,3.1h0ZM47.3,34.5h5.6v-5.1h-5.6v5.1ZM72,83.3c-1.5,0-2.8-1.1-3-2.6l-8.8-51.3c-.3-1.7.8-3.3,2.5-3.6l8.3-1.4c.8-.1,1.6,0,2.3.5s1.1,1.2,1.3,2l8.8,51.3c.1.8,0,1.6-.5,2.3-.5.7-1.2,1.1-2,1.3l-.4-2.2.4,2.2-8.3,1.4c-.2,0-.4,0-.5,0ZM72.1,73.6l1,5.1,5.5-.9-1-5.1-5.5.9Z',
  },
  gate: {
    color: '#1f296a',
    isSpecial: true,
    icon: 'M79.5,55.6c0,.9-.3,1.7-.9,2.3l-6.3,6.6c-.6.6-1.3.9-2.2.9-1.9,0-3.1-1.3-3.1-3.3s.3-1.7.9-2.3l.9-.9h-8.2c-1.9,0-3.1-1.3-3.1-3.3s1.3-3.3,3.1-3.3h8.2l-.9-.9c-.6-.6-.9-1.3-.9-2.3,0-1.9,1.3-3.3,3.1-3.3s1.6.3,2.2.9l6.3,6.6c.7.5.9,1.2.9,2.2h0ZM70.2,39h-26.6l6,3.6c.9.7,1.6,1.7,1.6,3v26.4h19c1.9,0,3.1,1.3,3.1,3.3s-1.3,3.3-3.1,3.3h-18.9v3.3c0,1.9-1.3,3.3-3.1,3.3s-1.6-.6-1.6-.6l-15.9-9.8s-1.6-1.2-1.6-2.6v-36.2c0-1.3,1.7-3.3,3.1-3.3h37.9c1.9,0,3.1,1.3,3.1,3.3s-1.2,3.3-3.1,3.3v-.3Z',
  },
};

const LIconHeart = L.icon({
  iconUrl: iconPointHeart,
  iconSize: [50, 50],
  iconAnchor: [25, 43],
});

const divIcon = L.divIcon({
  className: 'map-icon',
  iconSize: [29.71, 41.14],
  iconAnchor: [14.855, 41],
});

export const markers = [];

export const markerLayer = L.layerGroup(
  points.map(p => {
    const marker = L.marker([-p.position[1] / 16, p.position[0] / 16], {
      icon: divIcon,
      title: p.title,
      autoPanOnFocus: true,
      riseOnHover: true,
    });
    // marker.bindPopup(p.title);
    p.uuid = Symbol(p.title);
    marker.rawPoint = p;
    markers.push(marker);
    return marker;
  })
);

export const eggLayer = L.layerGroup(
  [
    [12045, 5820],
    [6490, 4442],
    [1655, 3721],
  ].map(element =>
    L.marker([-element[1] / 16, element[0] / 16], { icon: LIconHeart })
  )
);

const imageBounds = [
  [-540, 0],
  [0, 960],
];
const tileLayerUrl = '/map/tiles/512/zoom_{z}/tile_{x}_{y}.webp';
export const mapLayer = L.tileLayer(tileLayerUrl, {
  bounds: imageBounds,
  minZoom: 0,
  maxZoom: 5,
  noWrap: true,
  tileSize: 512,
  maxNativeZoom: 4,
  detectRetina: true,
});

export default {
  mapOptions,
  markerLayer,
  eggLayer,
  mapLayer,
};
