import type { ReactNode } from 'react'

export interface Client {
	id: number
	name: string
	email: string
	company: string
	status: 'Active' | 'Inactive' // Union Type: solo permite estos dos valores
}

export type { ReactNode }
