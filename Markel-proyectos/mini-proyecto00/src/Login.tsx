import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

export const Login = () => {
	const { login } = useAuth()
	const [usuario, setUsuario] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()

	const manejarEntrada = () => {
		if (usuario === '' || password === '') {
			let mensaje = 'Por favor, completa los campos '
			if (usuario === '') {
				mensaje += 'de usuario '
			}
			if (password === '') {
				mensaje += 'de contraseña '
			}
			alert(mensaje)
			return
		}

		login(usuario)
		navigate('/app')
	}

	return (
		<div style={{ border: '1px solid blue', padding: '20px', margin: '10px' }}>
			<h2>Iniciar Sesión</h2>

			<input
				type="text"
				placeholder="Usuario"
				value={usuario}
				onChange={(e) => setUsuario(e.target.value)}
			/>

			<input
				type="password"
				placeholder="Contraseña"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<button onClick={manejarEntrada}>Entrar</button>

			<p>
				¿No tienes cuenta?
				<button onClick={() => navigate('/registro')} style={{ marginLeft: '10px' }}>
					Regístrate
				</button>
			</p>
		</div>
	)
}
