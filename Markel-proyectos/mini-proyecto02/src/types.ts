export type Componente = 
    | 'CPU' 
    | 'GPU' 
    | 'RAM' 
    | 'Almacenamiento' 
    | 'PlacaBase' 
    | 'FuenteAlimentacion' 
    | 'Caja';

export interface Producto {
    id: number;
    nombre: string;
    componente: Componente;
    precio: number;
}

export type Build ={
    [key in Componente]?: Producto;
}