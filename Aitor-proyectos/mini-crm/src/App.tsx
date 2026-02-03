import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ClientsProvider } from './context/ClientsContext'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { ClientsPage } from './pages/ClientsPage'
import { ClientDetail } from './pages/ClientDetail'

function App() {
	return (
		<ClientsProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Dashboard />} />
						<Route path="clients" element={<ClientsPage />} />
						<Route path="clients/:id" element={<ClientDetail />} />
						<Route path="*" element={<p>Página no encontrada</p>} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ClientsProvider>
	)
}

export default App
