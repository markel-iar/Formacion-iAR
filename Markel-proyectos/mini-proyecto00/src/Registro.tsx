import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Registro = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const navigate = useNavigate()

	return (
		<div style={{ border: '1px solid green', padding: '20px', margin: '10px' }}>
			<h2>Crear Cuenta</h2>

			<input
				type="text"
				placeholder="Usuario"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				type="password"
				placeholder="Contraseña"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<input
				type="email"
				placeholder="Correo Electrónico"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>

			<button
				onClick={() => {
					if (username === '' || password === '' || email === '') {
						let mensaje = 'Por favor, completa los campos '
						if (username === '') {
							mensaje += 'de usuario '
						}
						if (password === '') {
							mensaje += 'de contraseña '
						}
						if (email === '') {
							mensaje += 'de correo electrónico '
						}
						alert(mensaje)
						return
					}

					alert('Registrado')
					navigate('/')
				}}
			>
				Confirmar Registro
			</button>

			<button onClick={() => navigate(-1)} style={{ marginLeft: '10px' }}>
				Cancelar
			</button>
		</div>
	)
}
