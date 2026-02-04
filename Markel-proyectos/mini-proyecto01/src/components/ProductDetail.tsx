import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import type { Producto } from '../App'

type DetailProps = {
	productos: Producto[]
	toggleStock: (id: number) => void
}

const ProductDetail: React.FC<DetailProps> = ({ productos, toggleStock }) => {
	const { id } = useParams<{ id: string }>()
	const producto = productos.find((p) => p.id === Number(id))

	// useEffect: Sincronizar título de la pestaña con el producto
	useEffect(() => {
		if (producto) {
			document.title = `Viendo: ${producto.name}`
		}
	}, [producto])

	if (!producto) {
		return <div>Producto no encontrado</div>
	}

	return (
		<div>
			<Link to="/">← Volver</Link>

			<h1>{producto.name}</h1>
			<p>Categoría: {producto.category}</p>

			<h3>
				Estado:{' '}
				<span style={{ color: producto.inStock ? 'green' : 'red' }}>
					{producto.inStock ? 'Disponible' : 'Sin existencias'}
				</span>
			</h3>

			<button onClick={() => toggleStock(producto.id)}>
				{producto.inStock ? 'Marcar como Agotado' : 'Reponer Stock'}
			</button>
		</div>
	)
}

export default ProductDetail
