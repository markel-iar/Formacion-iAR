import type { Producto } from "./types";
import type { Componente } from "./types";

export const ORDERED_STEPS: Componente[] = [
    'CPU',
    'PlacaBase',
    'RAM', 
    'GPU', 
    'Almacenamiento',
    'FuenteAlimentacion',
    'Caja'
];


export const INITIAL_PRODUCTS: Producto[] = [
    { id: 1, nombre: 'Intel Core i9-13900K', componente: 'CPU', precio: 589 },
    { id: 2, nombre: 'NVIDIA GeForce RTX 4090', componente: 'GPU', precio: 1599 },
    { id: 3, nombre: 'Corsair Vengeance LPX 32GB', componente: 'RAM', precio: 149 },
    { id: 4, nombre: 'Samsung 970 EVO Plus 1TB', componente: 'Almacenamiento', precio: 129 },
    { id: 5, nombre: 'ASUS ROG Strix Z790-E', componente: 'PlacaBase', precio: 399 },
    { id: 6, nombre: 'Corsair RM850x', componente: 'FuenteAlimentacion', precio: 159 },
    { id: 7, nombre: 'NZXT H510', componente: 'Caja', precio: 79 },
    { id: 8, nombre: 'AMD Ryzen 9 7950X', componente: 'CPU', precio: 699 },
    { id: 9, nombre: 'AMD Radeon RX 7900 XTX', componente: 'GPU', precio: 999 },
    { id: 10, nombre: 'G.Skill Trident Z RGB 32GB', componente: 'RAM', precio: 169 },
    { id: 11, nombre: 'Western Digital Black SN850X 1TB', componente: 'Almacenamiento', precio: 139 },
    { id: 12, nombre: 'MSI MPG Z790 Carbon WiFi', componente: 'PlacaBase', precio: 379 },
    { id: 13, nombre: 'Seasonic Focus GX-850', componente: 'FuenteAlimentacion', precio: 169 },
    { id: 14, nombre: 'Fractal Design Meshify C', componente: 'Caja', precio: 99 },
    { id: 15, nombre: 'Intel Core i5-13600K', componente: 'CPU', precio: 319 },
    { id: 16, nombre: 'NVIDIA GeForce RTX 4070 Ti', componente: 'GPU', precio: 799 },
    { id: 17, nombre: 'Crucial Ballistix 16GB', componente: 'RAM', precio: 89 },
    { id: 18, nombre: 'Crucial P3 Plus 1TB', componente: 'Almacenamiento', precio: 109 },
    { id: 19, nombre: 'Gigabyte Z790 AORUS Elite AX', componente: 'PlacaBase', precio: 279 },
    { id: 20, nombre: 'EVGA SuperNOVA 850 G5', componente: 'FuenteAlimentacion', precio: 159 },
    { id: 21, nombre: 'Cooler Master MasterBox NR600', componente: 'Caja', precio: 89 },
    { id: 22, nombre: 'AMD Ryzen 5 7600X', componente: 'CPU', precio: 229 },
    { id: 23, nombre: 'AMD Radeon RX 7600', componente: 'GPU', precio: 329 },
    { id: 24, nombre: 'TeamGroup T-Force Vulcan Z 16GB', componente: 'RAM', precio: 79 },
    { id: 25, nombre: 'Sabrent Rocket Q 1TB', componente: 'Almacenamiento', precio: 119 },

];