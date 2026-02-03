// src/data/mockData.ts
import type { Client } from '../types'

export const dbClients: Client[] = [
	{
		id: 1,
		name: 'Ana García',
		email: 'agarcia@iar-soft.com',
		company: 'TechSolutions',
		status: 'Active',
	},
	{
		id: 2,
		name: 'Carlos López',
		email: 'clopez@iar-soft.com',
		company: 'Marketify',
		status: 'Inactive',
	},
	{ id: 3, name: 'Sofía Ruiz', email: 'sruiz@iar-soft.inc', company: 'DevInc', status: 'Active' },
]
