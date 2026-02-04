import React from 'react'
import type { Producto } from '../types'

interface PartSelectorProps {
	products: Producto[]
	onSelect: (product: Producto) => void
	selectedId?: number
}

const PartSelector: React.FC<PartSelectorProps> = ({ products, onSelect, selectedId }) => {
	return (
		<div>
			<h2>Selecciona un componente</h2>
			<ul>
				{products.map((product) => (
					<li
						key={product.id}
						style={{ backgroundColor: product.id === selectedId ? '#d3f9d8' : 'transparent' }}
					>
						<span>
							{product.nombre} - ${product.precio.toFixed(2)}
						</span>
						<button
							onClick={() => onSelect(product)}
							style={{
								marginLeft: '10px',
								backgroundColor: product.id === selectedId ? '#4caf50' : '#007bff',
								color: 'white',
							}}
						>
							{product.id === selectedId ? 'Seleccionado' : 'Seleccionar'}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default PartSelector
