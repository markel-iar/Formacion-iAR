import React from 'react'

type FilterProps = {
	categories: string[]
	selectedCategory: string | null
	onSelectCategory: (cat: string | null) => void
}

const CategoryFilter: React.FC<FilterProps> = ({
	categories,
	selectedCategory,
	onSelectCategory,
}) => {
	return (
		<div style={{ marginBottom: '20px', padding: '10px', borderBottom: '1px solid #ddd' }}>
			<strong>Filtrar por: </strong>

			<button
				onClick={() => onSelectCategory(null)}
				style={{
					marginRight: '10px',
					fontWeight: selectedCategory === null ? 'bold' : 'normal',
					backgroundColor: selectedCategory === null ? '#ddd' : 'transparent',
				}}
			>
				Todas
			</button>

			{/* Botones dinámicos para cada categoría */}
			{categories.map((_cat) => (
				<button
					key={_cat}
					onClick={() => onSelectCategory(_cat)}
					style={{
						marginRight: '10px',
						fontWeight: selectedCategory === _cat ? 'bold' : 'normal',
						backgroundColor: selectedCategory === _cat ? '#ddd' : 'transparent',
					}}
				>
					{_cat}
				</button>
			))}
		</div>
	)
}

export default CategoryFilter
