// src/pages/ClientDetail.tsx
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useClients } from '../hooks/useClients'

export const ClientDetail: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const navigate = useNavigate()

	// Obtenemos la lista completa y el estado de carga
	const { clients, isLoading } = useClients()

	// --- ESTADO DERIVADO  ---
	// Calculamos el cliente "al vuelo" en cada render.
	// No necesitamos useState ni useEffect para esto.
	const client = clients.find((c) => c.id === Number(id))

	// --- EFECTO SOLO PARA REDIRECCIÓN ---
	// Solo usamos useEffect para "efectos secundarios" como navegar
	// si algo sale mal (ej: el cliente no existe).
	useEffect(() => {
		if (!isLoading && !client) {
			navigate('/clients')
		}
	}, [isLoading, client, navigate])

	// Renderizado condicional
	if (isLoading) {
		return <p>Cargando perfil...</p>
	}

	// Si llegamos aquí y no hay cliente, el useEffect de arriba nos redirigirá,
	// pero por seguridad retornamos null para no pintar nada roto.
	if (!client) {
		return null
	}

	return (
		<div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
			<h2>Perfil de: {client.name}</h2>
			<p>
				<strong>Email:</strong> {client.email}
			</p>
			<p>
				<strong>Empresa:</strong> {client.company}
			</p>
			<p>
				<strong>Estado: </strong>
				<span style={{ color: client.status === 'Active' ? 'green' : 'red' }}>{client.status}</span>
			</p>
			<button onClick={() => navigate('/clients')}>Volver atrás</button>
		</div>
	)
}
