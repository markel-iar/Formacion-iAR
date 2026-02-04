import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CategoryFilter from './CategoryFilter' // <--- Importamos el hijo
import type { Producto } from '../App'

type DashboardProps = {
	productos: Producto[]
	toggleStock: (id: number) => void
}

const Dashboard: React.FC<DashboardProps> = ({ productos, toggleStock }) => {
	const [filtro, setFiltro] = useState<string | null>(null)

	const categoriasUnicas = Array.from(new Set(productos.map((p) => p.category)))

	const productosVisibles = filtro ? productos.filter((p) => p.category === filtro) : productos

	return (
		<div>
			<h2>Panel de Control</h2>

			<CategoryFilter
				categories={categoriasUnicas}
				selectedCategory={filtro}
				onSelectCategory={setFiltro}
			/>

			<ul>
				{productosVisibles.map((p) => (
					<li key={p.id} style={{ marginBottom: '10px' }}>
						<Link to={`/product/${p.id}`} style={{ fontWeight: 'bold' }}>
							{p.name}
						</Link>{' '}
						<span style={{ fontSize: '0.8em', color: '#666' }}>({p.category})</span>{' '}
						<span style={{ color: p.inStock ? 'green' : 'red' }}>
							[{p.inStock ? 'En Stock' : 'Agotado'}]
						</span>
						<button onClick={() => toggleStock(p.id)} style={{ marginLeft: '10px' }}>
							Stock
						</button>
					</li>
				))}
			</ul>

			{productosVisibles.length === 0 && <p>No hay productos en esta categoría.</p>}
		</div>
	)
}

export default Dashboard
