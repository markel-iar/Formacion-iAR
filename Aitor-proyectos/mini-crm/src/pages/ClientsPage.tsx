import React from 'react'
import { Link } from 'react-router-dom'
import { useClients } from '../hooks/useClients'

export const ClientsPage: React.FC = () => {
	const { clients, isLoading } = useClients()

	if (isLoading) {
		return <p>Cargando lista...</p>
	}

	return (
		<div>
			<h2>Listado de Clientes</h2>
			<ul>
				{clients.map((client) => (
					<li key={client.id} style={{ marginBottom: '10px' }}>
						<strong>{client.name}</strong> ({client.company})
						{/* Link dinámico: navega a /clients/1, /clients/2, etc */}
						<Link to={`/clients/${client.id}`} style={{ marginLeft: '10px' }}>
							Ver Detalle
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
