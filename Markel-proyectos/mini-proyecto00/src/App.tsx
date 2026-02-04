import { Routes, Route } from 'react-router-dom'
import { Login } from './Login'
import { Registro } from './Registro'
import { PantallaPrincipal } from './PantallaPrincipal'
import { RutaProtegida } from './RutaProtegida'
import { AuthProvider } from './context/AuthContext'

function App() {
	return (
		<AuthProvider>
			<div style={{ maxWidth: '400px', margin: '0 auto' }}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/registro" element={<Registro />} />
					<Route
						path="/app"
						element={
							<RutaProtegida>
								<PantallaPrincipal />
							</RutaProtegida>
						}
					/>
				</Routes>
			</div>
		</AuthProvider>
	)
}

export default App
