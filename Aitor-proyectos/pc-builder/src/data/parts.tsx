import { PartCategory, type PcPart } from '../types'

export const AVAILABLE_PARTS: PcPart[] = [
	// --- CPU (Procesadores) ---
	{
		id: 'cpu-1',
		name: 'Intel Core i5-13600K',
		price: 300,
		category: PartCategory.CPU,
	},
	{
		id: 'cpu-2',
		name: 'AMD Ryzen 7 7800X3D',
		price: 450,
		category: PartCategory.CPU,
	},
	{
		id: 'cpu-3',
		name: 'Intel Core i9-14900K',
		price: 600,
		category: PartCategory.CPU,
	},
	{
		id: 'cpu-4',
		name: 'AMD Ryzen 5 7600',
		price: 220,
		category: PartCategory.CPU,
	},

	// --- PCB (Placas Base / Motherboards) ---
	{
		id: 'pcb-1',
		name: 'ASUS ROG STRIX B650-A',
		price: 250,
		category: PartCategory.PCB,
	},
	{
		id: 'pcb-2',
		name: 'MSI PRO Z790-P WIFI',
		price: 210,
		category: PartCategory.PCB,
	},
	{
		id: 'pcb-3',
		name: 'Gigabyte B650M AORUS ELITE (Micro-ATX)',
		price: 180,
		category: PartCategory.PCB,
	},

	// --- RAM (Memoria) ---
	{
		id: 'ram-1',
		name: 'Corsair Vengeance 16GB (2x8GB) DDR5',
		price: 70,
		category: PartCategory.RAM,
	},
	{
		id: 'ram-2',
		name: 'G.Skill Trident Z5 32GB (2x16GB) DDR5',
		price: 130,
		category: PartCategory.RAM,
	},
	{
		id: 'ram-3',
		name: 'Kingston Fury Beast 64GB (2x32GB)',
		price: 250,
		category: PartCategory.RAM,
	},

	// --- GPU (Tarjetas Gráficas) ---
	{ id: 'gpu-1', name: 'NVIDIA RTX 4060', price: 300, category: PartCategory.GPU },
	{ id: 'gpu-2', name: 'AMD Radeon RX 7800 XT', price: 500, category: PartCategory.GPU },
	{ id: 'gpu-3', name: 'NVIDIA RTX 4090 OC', price: 1800, category: PartCategory.GPU },
	{ id: 'gpu-4', name: 'Intel Arc A770 16GB', price: 280, category: PartCategory.GPU },

	// --- SSD (Almacenamiento) ---
	{ id: 'ssd-1', name: 'Samsung 980 PRO 1TB NVMe', price: 90, category: PartCategory.SSD },
	{ id: 'ssd-2', name: 'WD Black SN850X 2TB NVMe', price: 160, category: PartCategory.SSD },
	{ id: 'ssd-3', name: 'Crucial P3 Plus 1TB (Budget)', price: 60, category: PartCategory.SSD },

	// --- PSU (Fuentes de Alimentación) ---
	{ id: 'psu-1', name: 'Corsair RM750e (750W Gold)', price: 100, category: PartCategory.PSU },
	{
		id: 'psu-2',
		name: 'Seasonic Focus GX-850 (850W Gold)',
		price: 140,
		category: PartCategory.PSU,
	},
	{ id: 'psu-3', name: 'Thermaltake Toughpower 1000W', price: 180, category: PartCategory.PSU },
]
