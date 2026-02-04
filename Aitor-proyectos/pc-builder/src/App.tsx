import { useState, useCallback } from 'react'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { PartSelector } from './components/PartSelector'
import { Summary } from './components/Summary'
import {
	type BuildState,
	PartCategory,
	type PartCategoryType,
	type PcPart,
	type RouterContextType,
} from './types'
import './App.css'

// Layout principal que contiene el NavBar y el Outlet (donde se renderizan las páginas)
const Layout = () => {
	// 1. ESTADO GLOBAL
	const [buildState, setBuildState] = useState<BuildState>({
		[PartCategory.CPU]: null,
		[PartCategory.PCB]: null,
		[PartCategory.GPU]: null,
		[PartCategory.RAM]: null,
		[PartCategory.PSU]: null,
		[PartCategory.SSD]: null,
	})

	// 2. USECALLBACK
	// Memorizamos esta función. Si PartSelector usa React.memo,
	// no se re-renderizarán los selectores de otras rutas si estuvieran visibles.
	const selectPart = useCallback((category: PartCategoryType, part: PcPart) => {
		setBuildState((prev) => ({
			...prev,
			[category]: part,
		}))
		console.log(`Pieza seleccionada: ${part.name}`)
	}, []) // Dependencias vacías: la función nunca cambia de referencia

	// Contexto que se pasa a los hijos del Outlet
	const contextValue: RouterContextType = { currentBuild: buildState, selectPart }

	return (
		<div className="app-container">
			<header>
				<h1>PC Builder Pro 3000</h1>
			</header>
			<NavBar />
			<main style={{ padding: '2rem' }}>
				{/* Aquí se inyectan los componentes de las rutas hijas con el contexto */}
				<Outlet context={contextValue} />
			</main>
		</div>
	)
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Navigate to="/cpu" replace />} />

				<Route path="cpu" element={<PartSelector category={PartCategory.CPU} nextPath="/pcb" />} />
				<Route path="pcb" element={<PartSelector category={PartCategory.PCB} nextPath="/ram" />} />
				<Route path="ram" element={<PartSelector category={PartCategory.RAM} nextPath="/gpu" />} />
				<Route path="gpu" element={<PartSelector category={PartCategory.GPU} nextPath="/ssd" />} />
				<Route path="ssd" element={<PartSelector category={PartCategory.SSD} nextPath="/psu" />} />
				<Route
					path="psu"
					element={<PartSelector category={PartCategory.PSU} nextPath="/summary" />}
				/>

				<Route path="summary" element={<Summary />} />
			</Route>
		</Routes>
	)
}

export default App
