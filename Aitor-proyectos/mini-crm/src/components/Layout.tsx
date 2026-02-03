import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Layout: React.FC = () => {
	return (
		<div>
			<nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
				<Link to="/" style={{ marginRight: '15px' }}>
					Dashboard
				</Link>
				<Link to="/clients">Clientes</Link>
			</nav>
			{/* Outlet es donde React Router renderiza la página hija correspondiente */}
			<main style={{ padding: '0 1rem' }}>
				<Outlet />
			</main>
		</div>
	)
}
