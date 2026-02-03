import { useContext } from 'react'
// Importamos la interfaz para usarla como tipo de retorno
import { ClientsContext, type ClientsContextType } from '../context/ClientsContext'

export const useClients = (): ClientsContextType => {
	const context = useContext(ClientsContext)

	if (context === undefined) {
		throw new Error('useClients debe ser usado dentro de un ClientsProvider')
	}

	return context
}
