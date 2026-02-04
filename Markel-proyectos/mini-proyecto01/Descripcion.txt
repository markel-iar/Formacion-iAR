1. Gestor de Inventario con "Vistas" de Categoría

La Lógica: Un array de objetos (productos) como estado inicial.

Componentes:

Dashboard: Lista general de productos.

ProductDetail: Vista detallada de un producto usando parámetros de ruta.

CategoryFilter: Filtra la lista principal.

Uso de Hooks:

useState para la lista de productos.

useCallback para la función toggleStock (cambiar si hay o no existencias) que pasarás a los hijos.

useEffect para sincronizar el título de la pestaña con el producto seleccionado.

TypeScript: Define una interface Product y usa un Generic para una función de filtrado reutilizable.