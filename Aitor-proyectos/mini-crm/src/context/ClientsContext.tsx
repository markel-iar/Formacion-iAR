import React, { createContext, useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import type { Client } from '../types'
import { dbClients } from '../data/mockData'

export interface ClientsContextType {
	clients: Client[]
	isLoading: boolean
}

export const ClientsContext = createContext<ClientsContextType | undefined>(undefined)

export const ClientsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [clients, setClients] = useState<Client[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		setTimeout(() => {
			setClients(dbClients)
			setIsLoading(false)
		}, 1000)
	}, [])

	const getClientById = useCallback(
		(id: number) => {
			return clients.find((c) => c.id === id)
		},
		[clients],
	)

	const value = {
		clients,
		isLoading,
		getClientById,
	}

	return <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>
}
