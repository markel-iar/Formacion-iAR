import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { AVAILABLE_PARTS } from '../data/parts'
import { type PartCategoryType, type RouterContextType } from '../types'

interface PartSelectorProps {
	category: PartCategoryType
	nextPath: string // Ruta a la que ir después de elegir
}

// React.memo evita re-renders si las props (incluyendo la función selectPart) no cambian
export const PartSelector = React.memo(({ category, nextPath }: PartSelectorProps) => {
	const navigate = useNavigate()

	// Consumimos el estado y la función del Outlet (definido en App.tsx)
	const { currentBuild, selectPart } = useOutletContext<RouterContextType>()

	// Filtramos las partes de esta categoría
	const parts = AVAILABLE_PARTS.filter((p) => p.category === category)

	const handleSelect = (part: (typeof parts)[0]) => {
		selectPart(category, part)
		// Navegación automática
		navigate(nextPath)
	}

	return (
		<div className="selector-container">
			<h2>Selecciona tu {category}</h2>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
					gap: '1rem',
				}}
			>
				{parts.map((part) => (
					<div
						key={part.id}
						onClick={() => handleSelect(part)}
						style={{
							border:
								currentBuild[category]?.id === part.id ? '2px solid #646cff' : '1px solid #ddd',
							padding: '1rem',
							cursor: 'pointer',
							borderRadius: '8px',
							backgroundColor: currentBuild[category]?.id === part.id ? '#f0f9ff' : 'transparent',
						}}
					>
						<h3>{part.name}</h3>
						<p>${part.price}</p>
					</div>
				))}
			</div>
		</div>
	)
})
