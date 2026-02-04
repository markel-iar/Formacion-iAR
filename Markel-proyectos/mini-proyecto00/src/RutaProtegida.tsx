import { Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { type ReactNode } from 'react'

export const RutaProtegida = ({ children }: { children: ReactNode }) => {
	const { estaAutenticado } = useAuth()

	if (!estaAutenticado) {
		return <Navigate to="/" />
	}

	return <>{children}</>
}
