import { NavLink } from 'react-router-dom'
import '../App.css'

export const NavBar = () => {
	return (
		<nav style={{ display: 'flex', gap: '20px', padding: '20px', borderBottom: '1px solid #ccc' }}>
			<NavLink to="/cpu" className={({ isActive }) => (isActive ? 'active-link' : '')}>
				Procesador (CPU)
			</NavLink>
			<NavLink to="/gpu" className={({ isActive }) => (isActive ? 'active-link' : '')}>
				Gráfica (GPU)
			</NavLink>
			<NavLink to="/pcb" className={({ isActive }) => (isActive ? 'active-link' : '')}>
				Placa Base (PCB)
			</NavLink>
			<NavLink to="/ram" className={({ isActive }) => (isActive ? 'active-link' : '')}>
				Memoria (RAM)
			</NavLink>
			<NavLink to="/ssd" className={({ isActive }) => (isActive ? 'active-link' : '')}>
				Almacenamiento (SSD)
			</NavLink>
			<NavLink to="/psu" className={({ isActive }) => (isActive ? 'active-link' : '')}>
				Fuente de Poder (PSU)
			</NavLink>
			<NavLink to="/summary" style={{ marginLeft: 'auto', fontWeight: 'bold' }}>
				Resumen
			</NavLink>
		</nav>
	)
}
