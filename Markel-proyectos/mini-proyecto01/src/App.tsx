import { useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ProductDetail from './components/ProductDetail'
//comentario
export type Producto = {
	id: number
	name: string
	category: string
	inStock: boolean
}

const INITIAL_STATE: Producto[] = [
	{ id: 1, name: 'Monitor 24"', category: 'Electrónica', inStock: true },
	{ id: 2, name: 'Silla Ergonómica', category: 'Hogar', inStock: false },
	{ id: 3, name: 'Teclado Mecánico', category: 'Electrónica', inStock: true },
]

function App() {
	const [productos, setProductos] = useState<Producto[]>(INITIAL_STATE)

	const toggleStock = useCallback((id: number) => {
		setProductos((prevProductos) =>
			prevProductos.map((p) => (p.id === id ? { ...p, inStock: !p.inStock } : p)),
		)
	}, [])

	return (
		<BrowserRouter>
			<div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
				<h1>Gestor de Inventario</h1>
				<Routes>
					<Route path="/" element={<Dashboard productos={productos} toggleStock={toggleStock} />} />
					<Route
						path="/product/:id"
						element={<ProductDetail productos={productos} toggleStock={toggleStock} />}
					/>

					<Route path="/categoryfilter" element={<div>Página no encontrada</div>} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
