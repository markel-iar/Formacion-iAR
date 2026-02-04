import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import type { Producto, Componente } from '../types'
import { INITIAL_PRODUCTS, ORDERED_STEPS } from '../data'
import PartSelector from '../components/PartSelector'

interface CategoryPageProps {
	onSelectProduct: (category: Componente, product: Producto) => void
	selectedProducts: Partial<Record<Componente, Producto>>
}

const CategoryPage: React.FC<CategoryPageProps> = ({ onSelectProduct, selectedProducts }) => {
	const { category } = useParams<{ category: string }>()
	const navigate = useNavigate()
	const currentCategory = category as Componente

	if (!ORDERED_STEPS.includes(currentCategory)) {
		return <div>Categoría inválida</div>
	}

	const filteredProducts = INITIAL_PRODUCTS.filter(
		(product) => product.componente === currentCategory,
	)

	const handleSelectProduct = (product: Producto) => {
		onSelectProduct(currentCategory, product)

		const currentIndex = ORDERED_STEPS.indexOf(currentCategory)

		if (currentIndex < ORDERED_STEPS.length - 1) {
			const nextCategory = ORDERED_STEPS[currentIndex + 1]
			navigate(`/select/${nextCategory}`)
		} else {
			navigate('/summary')
		}
	}

	return (
		<div>
			<h1>Selecciona: {currentCategory}</h1>
			<PartSelector
				products={filteredProducts}
				onSelect={handleSelectProduct}
				selectedId={selectedProducts[currentCategory]?.id}
			/>
		</div>
	)
}

export default CategoryPage
