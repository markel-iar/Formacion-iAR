// Enums para categorías estrictas
export const PartCategory = {
	CPU: 'CPU',
	PCB: 'PCB',
	GPU: 'GPU',
	RAM: 'RAM',
	PSU: 'PSU',
	SSD: 'SSD',
} as const

export type PartCategoryType = (typeof PartCategory)[keyof typeof PartCategory]

// Interfaz de una pieza
export interface PcPart {
	id: string
	name: string
	price: number
	category: PartCategoryType
	image?: string
}

// Estado global de la construcción
// Record permite definir un objeto donde la clave es la categoría y el valor la Pieza o null
export type BuildState = Record<PartCategoryType, PcPart | null>

// Contexto que pasaremos por el Router (Outlet)
export interface RouterContextType {
	currentBuild: BuildState
	selectPart: (category: PartCategoryType, part: PcPart) => void
}
