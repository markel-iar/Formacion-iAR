import { useOutletContext } from 'react-router-dom'
import { type RouterContextType } from '../types'

export const Summary = () => {
	const { currentBuild } = useOutletContext<RouterContextType>()

	// Cálculo del total
	const total = Object.values(currentBuild).reduce((acc, part) => acc + (part?.price || 0), 0)
	const isComplete = Object.values(currentBuild).every((part) => part !== null)

	return (
		<div style={{ padding: '20px' }}>
			<h2>Resumen de tu Build</h2>
			<ul>
				{Object.entries(currentBuild).map(([category, part]) => (
					<li key={category}>
						<strong>{category}:</strong>{' '}
						{part ? (
							`${part.name} ($${part.price})`
						) : (
							<span style={{ color: 'red' }}>No seleccionado</span>
						)}
					</li>
				))}
			</ul>
			<hr />
			<h3>Total: ${total}</h3>
			{!isComplete && <p>⚠️ Aún te faltan piezas por elegir.</p>}
			{isComplete && <button style={{ marginTop: '10px' }}>Comprar PC</button>}
		</div>
	)
}
